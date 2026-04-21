#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
BASE_URL="https://themewagon.com/theme-tag/open-source/"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

OUT_DIR="$ROOT_DIR/themewagon_open_source"
PAGES_DIR="$OUT_DIR/pages"
THEMES_DIR="$OUT_DIR/theme_pages"
ZIPS_DIR="$OUT_DIR/zips"
EXTRACTED_DIR="$OUT_DIR/extracted"
REPORT_JSON="$OUT_DIR/download_report.json"

mkdir -p "$PAGES_DIR" "$THEMES_DIR" "$ZIPS_DIR" "$EXTRACTED_DIR"

TMP_ALL_PAGES="$OUT_DIR/.all_pages.txt"
TMP_ALL_THEMES="$OUT_DIR/.all_themes_raw.txt"
TMP_UNIQUE_THEMES="$OUT_DIR/theme_urls.txt"
TMP_RESULTS="$OUT_DIR/.results.tsv"

: > "$TMP_ALL_PAGES"
: > "$TMP_ALL_THEMES"
: > "$TMP_RESULTS"

current_url="$BASE_URL"
page_num=1

echo "[1/4] Crawling open-source listing pages..."
while [[ -n "$current_url" ]]; do
  if rg -Fxq "$current_url" "$TMP_ALL_PAGES"; then
    break
  fi

  page_file="$PAGES_DIR/page_${page_num}.html"
  echo "  - Page $page_num: $current_url"
  curl -L --fail --retry 3 --retry-delay 1 -A "$UA" "$current_url" -o "$page_file" >/dev/null 2>&1
  echo "$current_url" >> "$TMP_ALL_PAGES"

  grep -oE 'class="product-image-wrapper"[[:space:]]+href="[^"]+"' "$page_file" \
    | sed -E 's/.*href="([^"]+)"/\1/' \
    >> "$TMP_ALL_THEMES" || true

  next_url="$(grep -oE '<link rel="next" href="[^"]+"' "$page_file" | sed -E 's/.*href="([^"]+)"/\1/' | head -n 1 || true)"

  if [[ -z "$next_url" ]]; then
    break
  fi

  current_url="$next_url"
  ((page_num++))
done

sort -u "$TMP_ALL_THEMES" > "$TMP_UNIQUE_THEMES"

theme_count="$(wc -l < "$TMP_UNIQUE_THEMES" | tr -d ' ')"
page_count="$(wc -l < "$TMP_ALL_PAGES" | tr -d ' ')"

echo "  Found $page_count listing page(s) and $theme_count unique theme URL(s)."

echo "[2/4] Fetching theme pages and extracting direct download links..."
while IFS= read -r theme_url; do
  [[ -z "$theme_url" ]] && continue

  slug="$(echo "$theme_url" | sed -E 's#https?://themewagon.com/themes/([^/]+)/?.*#\1#')"
  if [[ -z "$slug" || "$slug" == "$theme_url" ]]; then
    slug="theme_$(echo -n "$theme_url" | shasum | awk '{print substr($1,1,10)}')"
  fi

  theme_file="$THEMES_DIR/${slug}.html"
  if [[ ! -f "$theme_file" ]]; then
    curl -L --fail --retry 3 --retry-delay 1 -A "$UA" "$theme_url" -o "$theme_file" >/dev/null 2>&1 || {
      echo -e "$slug\t$theme_url\t\tTHEME_PAGE_FAILED" >> "$TMP_RESULTS"
      continue
    }
  fi

  download_url="$(grep -oE 'data-url="[^"]+"[^>]*data-direct-download|data-direct-download[^>]*data-url="[^"]+"' "$theme_file" | sed -E 's/.*data-url="([^"]+)".*/\1/' | head -n 1 || true)"

  if [[ -z "$download_url" ]]; then
    download_url="$(grep -oE 'https?://[^"\x27 >]+\.zip([?][^"\x27 >]*)?' "$theme_file" | head -n 1 || true)"
  fi

  if [[ -z "$download_url" ]]; then
    echo -e "$slug\t$theme_url\t\tNO_DOWNLOAD_URL" >> "$TMP_RESULTS"
    continue
  fi

  echo -e "$slug\t$theme_url\t$download_url\tREADY" >> "$TMP_RESULTS"
done < "$TMP_UNIQUE_THEMES"

ready_count="$(awk -F'\t' '$4=="READY"{c++} END{print c+0}' "$TMP_RESULTS")"
failed_meta_count="$(awk -F'\t' '$4!="READY"{c++} END{print c+0}' "$TMP_RESULTS")"

echo "  Ready to download: $ready_count"
[[ "$failed_meta_count" -gt 0 ]] && echo "  Missing/failed metadata: $failed_meta_count"

echo "[3/4] Downloading archives..."
while IFS=$'\t' read -r slug theme_url download_url status; do
  [[ "$status" != "READY" ]] && continue

  out_zip="$ZIPS_DIR/${slug}.zip"
  if [[ -s "$out_zip" ]]; then
    echo "  - Skip existing: $slug"
    continue
  fi

  echo "  - Download: $slug"
  if ! curl -L --fail --retry 3 --retry-delay 1 -A "$UA" -e "$theme_url" "$download_url" -o "$out_zip" >/dev/null 2>&1; then
    rm -f "$out_zip"
    awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOAD_FAILED"; print $0}' "$TMP_RESULTS" > "$TMP_RESULTS.tmp" && mv "$TMP_RESULTS.tmp" "$TMP_RESULTS"
    continue
  fi

  if file "$out_zip" | grep -qiE 'HTML|text'; then
    rm -f "$out_zip"
    awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOADED_HTML_NOT_ZIP"; print $0}' "$TMP_RESULTS" > "$TMP_RESULTS.tmp" && mv "$TMP_RESULTS.tmp" "$TMP_RESULTS"
    continue
  fi

  awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOADED"; print $0}' "$TMP_RESULTS" > "$TMP_RESULTS.tmp" && mv "$TMP_RESULTS.tmp" "$TMP_RESULTS"
done < "$TMP_RESULTS"

echo "[4/4] Extracting downloaded archives..."
while IFS=$'\t' read -r slug _theme_url _download_url status; do
  [[ "$status" != "DOWNLOADED" ]] && continue
  zip_path="$ZIPS_DIR/${slug}.zip"
  target_dir="$EXTRACTED_DIR/${slug}"
  mkdir -p "$target_dir"
  unzip -oq "$zip_path" -d "$target_dir" || true
done < "$TMP_RESULTS"

python3 - <<'PY'
import json
from pathlib import Path

out_dir = Path("themewagon_open_source")
results_path = out_dir / ".results.tsv"
report_path = out_dir / "download_report.json"

def parse_tsv(line):
    parts = line.rstrip("\n").split("\t")
    while len(parts) < 4:
        parts.append("")
    return {
        "slug": parts[0],
        "theme_url": parts[1],
        "download_url": parts[2],
        "status": parts[3],
    }

rows = [parse_tsv(line) for line in results_path.read_text(encoding="utf-8").splitlines() if line.strip()]
summary = {
    "total_themes_discovered": len(rows),
    "status_counts": {},
}
for row in rows:
    summary["status_counts"][row["status"]] = summary["status_counts"].get(row["status"], 0) + 1

report = {
    "summary": summary,
    "items": rows,
}
report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
print(json.dumps(summary, indent=2))
PY

echo "Done."
echo "- Theme URLs: $TMP_UNIQUE_THEMES"
echo "- Zips: $ZIPS_DIR"
echo "- Extracted: $EXTRACTED_DIR"
echo "- Report: $REPORT_JSON"
