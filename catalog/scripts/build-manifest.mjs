#!/usr/bin/env node

import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const outputPath = path.join(rootDir, "template-manifest.json");

const CATEGORY_ORDER = [
  "Business & Corporate",
  "Portfolio & Resume",
  "Landing Page & App",
  "Coming Soon",
  "Admin & Dashboard",
  "React templates",
  "Education",
  "Medical, Health & Fitness",
  "Real Estate & Interior",
  "Food & Restaurant",
  "Travel & Hospitality",
  "Photography & Creative",
  "Automotive",
  "Hosting & Technology",
  "Personal & Blog",
];

const CATEGORY_SET = new Set(CATEGORY_ORDER);

const excludedTopLevelDirs = new Set([
  ".git",
  ".github",
  "assets",
  "catalog",
  "node_modules",
  "scripts",
  "themewagon_open_source",
  "templatemo_all",
]);

const ignoredNestedDirs = new Set([
  ".git",
  "node_modules",
  "bower_components",
  "vendor",
  "docs",
  "doc",
  "documentation",
  "plugins",
]);

const manualCategoryByTemplate = {
  "aroma-beauty-and-spa-responsive-bootstrap-template": "Personal & Blog",
  "beauty-salon-bootstrap-html5-template": "Personal & Blog",
  "businessline-corporate-portfolio-bootstrap-responsive-web-template": "Business & Corporate",
  "car-care-auto-mobile-html5-bootstrap-web-template": "Automotive",
  "city-square-bootstrap-responsive-web-template": "Business & Corporate",
  "css3-bw": "Photography & Creative",
  "css3-drop-shadows": "Photography & Creative",
  "css3-seascape": "Photography & Creative",
  "css3-seascape-two": "Photography & Creative",
  "darktouch-corporate-portfolio-bootstrap-responsive-web-template": "Business & Corporate",
  "delite-music-html5-bootstrap-responsive-web-template": "Personal & Blog",
  dreamy: "Personal & Blog",
  drifting: "Personal & Blog",
  droll: "Personal & Blog",
  extent: "Personal & Blog",
  "free-bootstrap-template-real-estate-my-home": "Real Estate & Interior",
  "full-slider": "Landing Page & App",
  "funky-cool-blue": "Business & Corporate",
  gila: "Personal & Blog",
  "golden-hotel-free-html5-bootstrap-web-template": "Travel & Hospitality",
  "grand-free-bootstrap-responsive-website-template": "Business & Corporate",
  "grass-stains": "Personal & Blog",
  "green-corp-flat-free-responsive-mobile-website": "Business & Corporate",
  greenery: "Personal & Blog",
  "gunmetal-portal": "Hosting & Technology",
  "half-slider": "Landing Page & App",
  interio: "Real Estate & Interior",
  lazydays: "Personal & Blog",
  "lovely-wedding-bootstrap-free-website-template": "Personal & Blog",
  metropolis: "Personal & Blog",
  missunderstood: "Personal & Blog",
  "moto-business-html5-responsive-web-template": "Business & Corporate",
  "ninja-business-consulting-html-responsive-web-template": "Business & Corporate",
  "one-page-wonder": "Business & Corporate",
  plain: "Personal & Blog",
  prosimii: "Personal & Blog",
  "relic-portal": "Hosting & Technology",
  reveal: "Business & Corporate",
  "rocket-business-bootstrap-free-responsive-web-theme": "Business & Corporate",
  sample_site: "Landing Page & App",
  "simple-sidebar": "Landing Page & App",
  sinorca: "Personal & Blog",
  "startbootstrap-clean-blog-1.0.2": "Personal & Blog",
  "startbootstrap-grayscale-1.0.3": "Landing Page & App",
  "street-life": "Personal & Blog",
  "super-simple-site": "Personal & Blog",
  "techro": "Hosting & Technology",
  "the-best-wedding-free-bootstrap-template": "Personal & Blog",
  "theme-changer-template": "Landing Page & App",
  "themer-bootstrap-responsive-web-template": "Business & Corporate",
  "thin-green-line": "Personal & Blog",
  "times-corporate-portfolio-bootstrap-responsive-web-template": "Business & Corporate",
  "trendy-free-bootstrap-responsive-website-template": "Business & Corporate",
  "unique-free-responsive-html5-template": "Business & Corporate",
  "vcare-free-html5-template-hospital-website": "Medical, Health & Fitness",
  "webtrends-free-bootstrap-responsive-web-template": "Business & Corporate",
  "wedding-bells-free-responsive-html5-template": "Personal & Blog",
  zenlike: "Personal & Blog",
};

function listTopLevelDirectories(root) {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        !excludedTopLevelDirs.has(entry.name),
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function walkHtmlFiles(baseDir, maxDepth = 3) {
  const found = [];

  function walk(currentDir, depth) {
    if (depth > maxDepth) {
      return;
    }

    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) {
        continue;
      }

      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (ignoredNestedDirs.has(entry.name.toLowerCase())) {
          continue;
        }
        walk(fullPath, depth + 1);
        continue;
      }

      if (entry.isFile() && /\.html?$/i.test(entry.name)) {
        found.push(path.relative(baseDir, fullPath).replaceAll("\\", "/"));
      }
    }
  }

  walk(baseDir, 0);
  return found;
}

function pickEntryHtml(templateDirName) {
  const absoluteTemplateDir = path.join(rootDir, templateDirName);
  const topLevelFiles = fs
    .readdirSync(absoluteTemplateDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);

  const lowerToOriginal = new Map(
    topLevelFiles.map((fileName) => [fileName.toLowerCase(), fileName]),
  );
  const preferredTopLevelFiles = [
    "index.html",
    "index.htm",
    "home.html",
    "default.html",
    "main.html",
  ];

  for (const preferred of preferredTopLevelFiles) {
    if (lowerToOriginal.has(preferred)) {
      return lowerToOriginal.get(preferred);
    }
  }

  const allHtmlFiles = walkHtmlFiles(absoluteTemplateDir, 3);
  if (allHtmlFiles.length === 0) {
    return null;
  }

  const scored = allHtmlFiles
    .map((relativePath) => {
      const lowerPath = relativePath.toLowerCase();
      let score = 1000;

      if (/(^|\/)index\.html?$/.test(lowerPath)) {
        score -= 500;
      }
      score += relativePath.split("/").length * 10;

      if (
        lowerPath.includes("documentation/") ||
        lowerPath.includes("/documentation/") ||
        lowerPath.includes("docs/")
      ) {
        score += 300;
      }

      if (lowerPath.includes("example") || lowerPath.includes("demo")) {
        score += 150;
      }

      return { relativePath, score };
    })
    .sort((a, b) => a.score - b.score || a.relativePath.localeCompare(b.relativePath));

  return scored[0].relativePath;
}

function extractPageTitle(filePath) {
  try {
    const html = fs.readFileSync(filePath, "utf8");
    const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!match) {
      return "";
    }
    return match[1].replace(/\s+/g, " ").trim();
  } catch {
    return "";
  }
}

function formatTitleFromSlug(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function assignCategory(templateDirName, pageTitle) {
  if (manualCategoryByTemplate[templateDirName]) {
    return manualCategoryByTemplate[templateDirName];
  }

  const haystack = `${templateDirName} ${pageTitle}`.toLowerCase();

  if (templateDirName.startsWith("react-") || /\breact\b|next\.?js/.test(haystack)) {
    return "React templates";
  }
  if (/coming-soon|coming soon/.test(haystack)) {
    return "Coming Soon";
  }
  if (/admin|dashboard|sb-admin|matrix|hybrid|insight/.test(haystack)) {
    return "Admin & Dashboard";
  }
  if (/portfolio|resume|freelancer/.test(haystack)) {
    return "Portfolio & Resume";
  }
  if (/photography|photo|scenic/.test(haystack)) {
    return "Photography & Creative";
  }
  if (/landing-page|landing page|mobile-app|mobile app|smartapp|\bapp\b/.test(haystack)) {
    return "Landing Page & App";
  }
  if (/education|educational|school|institution|b-school|\blearn\b/.test(haystack)) {
    return "Education";
  }
  if (/medical|health|fitness|gym|hospital|doctor/.test(haystack)) {
    return "Medical, Health & Fitness";
  }
  if (/restaurant|coffee|food|bistro|\beat\b/.test(haystack)) {
    return "Food & Restaurant";
  }
  if (/real-estate|real estate|\bestate\b|interior/.test(haystack)) {
    return "Real Estate & Interior";
  }
  if (/travel|traveller|tour|hotel/.test(haystack)) {
    return "Travel & Hospitality";
  }
  if (/hosting|tech|cloud|internet|portal/.test(haystack)) {
    return "Hosting & Technology";
  }
  if (/\bcar\b|auto|automobile|repair|moto/.test(haystack)) {
    return "Automotive";
  }
  if (
    /business|corporate|agency|consulting|multipurpose|multi-purpose|onepage|single page/.test(
      haystack,
    )
  ) {
    return "Business & Corporate";
  }

  return "Personal & Blog";
}

const topLevelDirs = listTopLevelDirectories(rootDir);
const manifest = [];

for (const templateDirName of topLevelDirs) {
  const entryHtml = pickEntryHtml(templateDirName);
  if (!entryHtml) {
    continue;
  }

  const entryPath = `${templateDirName}/${entryHtml}`.replaceAll("\\", "/");
  const pageTitle = extractPageTitle(path.join(rootDir, entryPath));
  const category = assignCategory(templateDirName, pageTitle);

  if (!CATEGORY_SET.has(category)) {
    throw new Error(`Invalid category \"${category}\" for template \"${templateDirName}\"`);
  }

  manifest.push({
    id: manifest.length + 1,
    name: templateDirName,
    title: formatTitleFromSlug(templateDirName),
    entry: entryPath,
    category,
  });
}

manifest.sort((a, b) => {
  const categoryDelta =
    CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
  if (categoryDelta !== 0) {
    return categoryDelta;
  }
  return a.title.localeCompare(b.title);
});

manifest.forEach((template, index) => {
  template.id = index + 1;
});

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + "\n");

const categoryCounts = new Map();
for (const template of manifest) {
  categoryCounts.set(template.category, (categoryCounts.get(template.category) ?? 0) + 1);
}

console.log(
  `Manifest generated: ${path.relative(rootDir, outputPath)} (${manifest.length} templates)`,
);
console.log(`Categories used: ${categoryCounts.size}`);
for (const category of CATEGORY_ORDER) {
  if (!categoryCounts.has(category)) {
    continue;
  }
  console.log(`- ${category}: ${categoryCounts.get(category)}`);
}
