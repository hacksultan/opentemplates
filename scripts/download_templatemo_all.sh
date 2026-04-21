#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
BASE_URL="https://templatemo.com"
START_PAGE="$BASE_URL/page/1"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

OUT_DIR="$ROOT_DIR/templatemo_all"
PAGES_DIR="$OUT_DIR/pages"
TEMPLATE_PAGES_DIR="$OUT_DIR/template_pages"
ZIPS_DIR="$OUT_DIR/zips"
EXTRACTED_DIR="$OUT_DIR/extracted"

URLS_FILE="$OUT_DIR/template_urls.txt"
RESULTS_TSV="$OUT_DIR/results.tsv"
REPORT_JSON="$OUT_DIR/download_report.json"

mkdir -p "$PAGES_DIR" "$TEMPLATE_PAGES_DIR" "$ZIPS_DIR" "$EXTRACTED_DIR"
: > "$URLS_FILE"
: > "$RESULTS_TSV"

echo "[1/5] Discovering total listing pages..."
curl -L --fail -A "$UA" "$START_PAGE" -o "$PAGES_DIR/page_1.html" >/dev/null 2>&1

PAGE_COUNT="$(rg -o 'Page 1 of [0-9]+' "$PAGES_DIR/page_1.html" | awk '{print $4}' | head -n1)"
if [[ -z "$PAGE_COUNT" ]]; then
  echo "Could not determine page count from $START_PAGE"
  exit 1
fi

echo "  Total pages: $PAGE_COUNT"

echo "[2/5] Crawling listing pages and extracting template URLs..."
for ((i=1; i<=PAGE_COUNT; i++)); do
  page_url="$BASE_URL/page/$i"
  page_file="$PAGES_DIR/page_${i}.html"

  if [[ ! -f "$page_file" ]]; then
    curl -L --fail --retry 4 --retry-all-errors --retry-delay 2 -A "$UA" "$page_url" -o "$page_file" >/dev/null 2>&1
  fi

  rg -o 'href="/tm-[0-9]+-[^"]+"' "$page_file" \
    | sed -E 's/^href="([^\"]+)"$/https:\/\/templatemo.com\1/' \
    >> "$URLS_FILE" || true

  echo "  - Page $i/$PAGE_COUNT parsed"
done

sort -u "$URLS_FILE" -o "$URLS_FILE"
TEMPLATE_COUNT="$(wc -l < "$URLS_FILE" | tr -d ' ')"
echo "  Unique template pages found: $TEMPLATE_COUNT"

echo "[3/5] Fetching template pages and resolving download links..."
idx=0
while IFS= read -r template_url; do
  [[ -z "$template_url" ]] && continue
  idx=$((idx+1))

  slug="$(basename "$template_url")"
  template_file="$TEMPLATE_PAGES_DIR/${slug}.html"

  if [[ ! -f "$template_file" ]]; then
    if ! curl -L --fail --retry 4 --retry-all-errors --retry-delay 2 -A "$UA" "$template_url" -o "$template_file" >/dev/null 2>&1; then
      echo -e "$slug\t$template_url\t\tTEMPLATE_PAGE_FAILED" >> "$RESULTS_TSV"
      echo "  - [$idx/$TEMPLATE_COUNT] $slug -> TEMPLATE_PAGE_FAILED"
      continue
    fi
  fi

  download_path="$(rg -o 'href="/download/[^"]+"' "$template_file" | sed -E 's/^href="([^\"]+)"$/\1/' | head -n1 || true)"

  if [[ -z "$download_path" ]]; then
    echo -e "$slug\t$template_url\t\tNO_DOWNLOAD_LINK" >> "$RESULTS_TSV"
    echo "  - [$idx/$TEMPLATE_COUNT] $slug -> NO_DOWNLOAD_LINK"
    continue
  fi

  download_url="$BASE_URL$download_path"
  echo -e "$slug\t$template_url\t$download_url\tREADY" >> "$RESULTS_TSV"
  echo "  - [$idx/$TEMPLATE_COUNT] $slug -> READY"
done < "$URLS_FILE"

ready_count="$(awk -F'\t' '$4=="READY"{c++} END{print c+0}' "$RESULTS_TSV")"
failed_meta_count="$(awk -F'\t' '$4!="READY"{c++} END{print c+0}' "$RESULTS_TSV")"
echo "  Ready to download: $ready_count"
[[ "$failed_meta_count" -gt 0 ]] && echo "  Metadata failures: $failed_meta_count"

echo "[4/5] Downloading ZIP files..."
dl_idx=0
while IFS=$'\t' read -r slug template_url download_url state; do
  [[ "$state" != "READY" ]] && continue
  dl_idx=$((dl_idx+1))
  out_zip="$ZIPS_DIR/${slug}.zip"

  if [[ -s "$out_zip" ]]; then
    echo "  - [$dl_idx/$ready_count] $slug -> SKIP_EXISTING"
    awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && ($4=="READY" || $4=="DOWNLOADED_HTML_NOT_ZIP" || $4=="DOWNLOAD_FAILED")) $4="DOWNLOADED"; print $0}' "$RESULTS_TSV" > "$RESULTS_TSV.tmp" && mv "$RESULTS_TSV.tmp" "$RESULTS_TSV"
    continue
  fi

  if ! curl -L --fail --retry 6 --retry-all-errors --retry-delay 2 --connect-timeout 20 --max-time 1200 \
      -A "$UA" "$download_url" -o "$out_zip" >/dev/null 2>&1; then
    rm -f "$out_zip"
    awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOAD_FAILED"; print $0}' "$RESULTS_TSV" > "$RESULTS_TSV.tmp" && mv "$RESULTS_TSV.tmp" "$RESULTS_TSV"
    echo "  - [$dl_idx/$ready_count] $slug -> DOWNLOAD_FAILED"
    continue
  fi

  if ! file "$out_zip" | rg -qi 'Zip archive data'; then
    rm -f "$out_zip"
    awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOADED_HTML_NOT_ZIP"; print $0}' "$RESULTS_TSV" > "$RESULTS_TSV.tmp" && mv "$RESULTS_TSV.tmp" "$RESULTS_TSV"
    echo "  - [$dl_idx/$ready_count] $slug -> DOWNLOADED_HTML_NOT_ZIP"
    continue
  fi

  awk -F'\t' -v slug="$slug" 'BEGIN{OFS="\t"} {if($1==slug && $4=="READY") $4="DOWNLOADED"; print $0}' "$RESULTS_TSV" > "$RESULTS_TSV.tmp" && mv "$RESULTS_TSV.tmp" "$RESULTS_TSV"
  echo "  - [$dl_idx/$ready_count] $slug -> DOWNLOADED"
done < "$RESULTS_TSV"

echo "[5/5] Extracting downloaded ZIP files..."
while IFS=$'\t' read -r slug _template_url _download_url state; do
  [[ "$state" != "DOWNLOADED" ]] && continue
  zip_file="$ZIPS_DIR/${slug}.zip"
  target_dir="$EXTRACTED_DIR/${slug}"
  mkdir -p "$target_dir"
  unzip -oq "$zip_file" -d "$target_dir" || true
done < "$RESULTS_TSV"

python3 - <<'PY'
import json
from pathlib import Path
from collections import Counter

out_dir = Path('templatemo_all')
results_tsv = out_dir / 'results.tsv'
report_json = out_dir / 'download_report.json'

items = []
for line in results_tsv.read_text(encoding='utf-8').splitlines():
    if not line.strip():
        continue
    parts = line.split('\t')
    while len(parts) < 4:
        parts.append('')
    items.append({
        'slug': parts[0],
        'template_url': parts[1],
        'download_url': parts[2],
        'status': parts[3],
    })

counts = Counter(item['status'] for item in items)
report = {
    'summary': {
        'total_templates_discovered': len(items),
        'status_counts': dict(counts),
    },
    'items': items,
}

report_json.write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report['summary'], indent=2))
PY

echo "Done."
echo "- Output dir: $OUT_DIR"
echo "- Template URLs: $URLS_FILE"
echo "- Results TSV: $RESULTS_TSV"
echo "- Report JSON: $REPORT_JSON"
