#!/usr/bin/env node

import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const manifestPath = path.join(rootDir, "template-manifest.json");
const landingPath = path.join(rootDir, "index.html");
const siteConfigPath = path.join(rootDir, "catalog", "config", "site.config.json");

const defaultSiteConfig = {
  siteTitle: "Website Templates Catalog",
  repoUrl: "",
  repoBranch: "main",
};

let siteConfig = { ...defaultSiteConfig };
if (fs.existsSync(siteConfigPath)) {
  const parsed = JSON.parse(fs.readFileSync(siteConfigPath, "utf8"));
  siteConfig = { ...siteConfig, ...parsed };
}

if (!fs.existsSync(manifestPath)) {
  console.error(
    "Missing template-manifest.json. Run `node catalog/scripts/build-manifest.mjs` first.",
  );
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const siteTitle = String(siteConfig.siteTitle || defaultSiteConfig.siteTitle);
const repoUrl = String(
  process.env.CATALOG_REPO_URL || siteConfig.repoUrl || defaultSiteConfig.repoUrl,
).replace(/\/$/, "");
const repoBranch = String(
  process.env.CATALOG_REPO_BRANCH || siteConfig.repoBranch || defaultSiteConfig.repoBranch,
);
const githubTreeBase = repoUrl ? `${repoUrl}/tree/${repoBranch}` : "";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${siteTitle}</title>
  <style>
    :root {
      --bg: #f4f4ef;
      --surface: #ffffff;
      --ink: #1e1f23;
      --muted: #5f636f;
      --border: #d8dbe2;
      --brand: #0f4c81;
      --brand-2: #0c7096;
      --ring: rgba(15, 76, 129, 0.2);
      --badge-bg: #ecf4fb;
      --badge-ink: #17456b;
      --shadow: 0 12px 36px rgba(21, 31, 56, 0.12);
      --radius: 18px;
    }

    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      color: var(--ink);
      font-family: "Avenir Next", "Segoe UI", Tahoma, sans-serif;
      background:
        radial-gradient(circle at 10% -10%, #d9eef9 0, rgba(217, 238, 249, 0) 35%),
        radial-gradient(circle at 95% 5%, #ffe9d1 0, rgba(255, 233, 209, 0) 30%),
        var(--bg);
    }

    .container {
      width: min(1200px, calc(100% - 2.5rem));
      margin: 2rem auto 4rem;
    }

    .hero {
      display: grid;
      gap: 0.8rem;
      margin-bottom: 1.6rem;
      padding: 1.5rem;
      border-radius: var(--radius);
      background: linear-gradient(140deg, #fff 0%, #f8fbff 100%);
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
    }

    .hero h1 {
      margin: 0;
      line-height: 1.15;
      font-size: clamp(1.6rem, 3.4vw, 2.5rem);
      letter-spacing: 0.01em;
    }

    .hero p {
      margin: 0;
      color: var(--muted);
      max-width: 74ch;
      font-size: 0.99rem;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
      margin-top: 0.35rem;
    }

    .search,
    .category-select {
      border: 1px solid var(--border);
      background: #fff;
      border-radius: 12px;
      font-size: 0.98rem;
      padding: 0.72rem 0.9rem;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      outline: none;
      color: #1f2631;
    }

    .search {
      width: min(430px, 100%);
    }

    .category-select {
      width: min(330px, 100%);
      cursor: pointer;
    }

    .search:focus,
    .category-select:focus {
      border-color: var(--brand-2);
      box-shadow: 0 0 0 4px var(--ring);
    }

    .count {
      font-weight: 600;
      color: #32445b;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.95rem;
    }

    .card {
      display: grid;
      gap: 0.8rem;
      padding: 1rem;
      border-radius: 14px;
      background: var(--surface);
      border: 1px solid var(--border);
      box-shadow: 0 2px 8px rgba(25, 32, 49, 0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      animation: rise 0.3s ease both;
    }

    .card:hover {
      border-color: #b6cde0;
      transform: translateY(-3px);
      box-shadow: 0 14px 24px rgba(31, 51, 79, 0.12);
    }

    .card-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .card h2 {
      margin: 0;
      font-size: 0.98rem;
      line-height: 1.35;
    }

    .badge {
      margin: 0;
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 0.22rem 0.58rem;
      font-size: 0.72rem;
      font-weight: 700;
      white-space: nowrap;
      background: var(--badge-bg);
      color: var(--badge-ink);
      border: 1px solid #c7dff2;
    }

    .path {
      margin: 0;
      color: var(--muted);
      font-size: 0.8rem;
      word-break: break-word;
      font-family: ui-monospace, Menlo, Consolas, monospace;
    }

    .actions {
      display: flex;
      gap: 0.55rem;
      flex-wrap: wrap;
    }

    .btn {
      border: 0;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      padding: 0.56rem 0.74rem;
      font-size: 0.86rem;
      font-weight: 600;
      transition: opacity 0.15s ease, transform 0.15s ease, background 0.15s ease;
    }

    .btn:hover { transform: translateY(-1px); }

    .btn-open {
      background: linear-gradient(140deg, var(--brand) 0%, var(--brand-2) 100%);
      color: #fff;
    }

    .btn-preview {
      border: 1px solid var(--border);
      background: #fff;
      color: #283040;
    }

    .empty {
      display: none;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 12px;
      border: 1px dashed #c5ccd7;
      color: #4c5768;
      background: #fff;
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(15, 18, 24, 0.66);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      backdrop-filter: blur(2px);
    }

    .modal.show { display: flex; }

    .modal-shell {
      width: min(1300px, 100%);
      height: min(92vh, 920px);
      display: grid;
      grid-template-rows: auto 1fr;
      background: #fff;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid #ced6e1;
      box-shadow: 0 25px 60px rgba(6, 16, 30, 0.45);
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.7rem 0.8rem;
      border-bottom: 1px solid #e3e8f0;
      background: #f7faff;
    }

    .modal-title {
      font-weight: 700;
      font-size: 0.95rem;
      color: #1a2e44;
    }

    .modal-actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .iframe {
      width: 100%;
      height: 100%;
      border: 0;
      background: #fff;
    }

    .btn-close {
      background: #1a2b42;
      color: #fff;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1024px) {
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 680px) {
      .container { width: min(1200px, calc(100% - 1.2rem)); margin-top: 1rem; }
      .hero { padding: 1rem; }
      .grid { grid-template-columns: 1fr; }
      .modal-shell { height: min(92vh, 760px); }
    }
  </style>
</head>
<body>
  <main class="container">
    <section class="hero">
      <h1>${siteTitle}</h1>
      <p>
        Every template in this repository is now assigned to a category.
        Use search and category filter together, then open, preview, or jump to each GitHub source folder.
      </p>
      <div class="controls">
        <label class="sr-only" for="search">Search templates</label>
        <input id="search" class="search" type="search" placeholder="Search template name..." />
        <label class="sr-only" for="category-filter">Filter by category</label>
        <select id="category-filter" class="category-select">
          <option value="all">All Categories</option>
        </select>
        <div id="count" class="count"></div>
      </div>
    </section>
    <section id="grid" class="grid" aria-live="polite"></section>
    <div id="empty" class="empty">No templates matched your filters.</div>
  </main>

  <aside id="modal" class="modal" aria-hidden="true">
    <div class="modal-shell" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <header class="modal-header">
        <div id="modal-title" class="modal-title">Preview</div>
        <div class="modal-actions">
          <a id="open-new-tab" class="btn btn-open" target="_blank" rel="noopener noreferrer">Open In New Tab</a>
          <button id="close-modal" class="btn btn-close" type="button">Close</button>
        </div>
      </header>
      <iframe id="modal-frame" class="iframe" loading="lazy" title="Template preview"></iframe>
    </div>
  </aside>

  <script>
    const templates = ${JSON.stringify(manifest)};
    const githubTreeBase = ${JSON.stringify(githubTreeBase)};

    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");
    const count = document.getElementById("count");
    const search = document.getElementById("search");
    const categoryFilter = document.getElementById("category-filter");

    const modal = document.getElementById("modal");
    const modalFrame = document.getElementById("modal-frame");
    const modalTitle = document.getElementById("modal-title");
    const openNewTab = document.getElementById("open-new-tab");
    const closeModalButton = document.getElementById("close-modal");

    const categoryCounts = templates.reduce((acc, template) => {
      acc[template.category] = (acc[template.category] || 0) + 1;
      return acc;
    }, {});

    const categories = Object.keys(categoryCounts);
    for (const category of categories) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category + " (" + categoryCounts[category] + ")";
      categoryFilter.append(option);
    }

    function getGitHubFolderPath(template) {
      const rawEntry = String(template.entry || "").replace(/\\\\/g, "/");
      const parts = rawEntry.split("/").filter(Boolean);

      if (parts.length > 1) {
        parts.pop();
      }

      if (!parts.length && template.name) {
        parts.push(String(template.name));
      }

      return parts.map((segment) => encodeURIComponent(segment)).join("/");
    }

    function templateCard(template) {
      const card = document.createElement("article");
      card.className = "card";

      const head = document.createElement("div");
      head.className = "card-head";

      const title = document.createElement("h2");
      title.textContent = template.title;

      const badge = document.createElement("p");
      badge.className = "badge";
      badge.textContent = template.category;

      head.append(title, badge);

      const templatePath = document.createElement("p");
      templatePath.className = "path";
      templatePath.textContent = template.entry;

      const actions = document.createElement("div");
      actions.className = "actions";

      const openLink = document.createElement("a");
      openLink.className = "btn btn-open";
      openLink.href = template.entry;
      openLink.target = "_blank";
      openLink.rel = "noopener noreferrer";
      openLink.textContent = "Open Website";

      const previewButton = document.createElement("button");
      previewButton.className = "btn btn-preview";
      previewButton.type = "button";
      previewButton.textContent = "Preview Modal";
      previewButton.addEventListener("click", () => openModal(template));

      if (githubTreeBase) {
        const sourceLink = document.createElement("a");
        sourceLink.className = "btn btn-preview";
        const githubFolderPath = getGitHubFolderPath(template);
        sourceLink.href = githubFolderPath ? githubTreeBase + "/" + githubFolderPath : githubTreeBase;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
        sourceLink.textContent = "View GitHub Folder";
        actions.append(openLink, sourceLink, previewButton);
      } else {
        actions.append(openLink, previewButton);
      }
      card.append(head, templatePath, actions);
      return card;
    }

    function render(items) {
      grid.replaceChildren(...items.map(templateCard));
      count.textContent =
        items.length +
        " / " +
        templates.length +
        " templates • " +
        categories.length +
        " categories";
      empty.style.display = items.length ? "none" : "block";
    }

    function applyFilters() {
      const query = search.value.trim().toLowerCase();
      const selectedCategory = categoryFilter.value;

      const filtered = templates.filter((template) => {
        if (selectedCategory !== "all" && template.category !== selectedCategory) {
          return false;
        }

        if (!query) {
          return true;
        }

        return (
          template.name.toLowerCase().includes(query) ||
          template.title.toLowerCase().includes(query) ||
          template.category.toLowerCase().includes(query)
        );
      });

      render(filtered);
    }

    function openModal(template) {
      modalTitle.textContent = template.title;
      modalFrame.src = template.entry;
      openNewTab.href = template.entry;
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modalFrame.src = "about:blank";
      document.body.style.overflow = "";
    }

    closeModalButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
      }
    });

    search.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);

    render(templates);
  </script>
</body>
</html>
`;

fs.writeFileSync(landingPath, html);
console.log(
  `Landing page generated: ${path.relative(rootDir, landingPath)} (${manifest.length} templates)`,
);
