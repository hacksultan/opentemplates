# OpenTemplates

A large open-source collection of website templates.

- Browse templates in GitHub as top-level folders.
- Use the live catalog UI to search, filter, preview, and open source folders.

## Live Website

Use the catalog at:

- `https://opentemplates.netlify.com`

What you can do there:

1. Search templates by name.
2. Filter templates by category.
3. Open a template directly.
4. Preview templates in the built-in modal.
5. Click `View GitHub Folder` to open the exact source folder in this repository.

## Repository Structure

Templates are intentionally kept at the repository root so contributors and users can quickly browse all folders in GitHub.

- Top-level template folders: `tm-001-one/`, `agile-agency-free-bootstrap-web-template/`, etc.
- Generated catalog files at root:
  - `index.html`
  - `template-manifest.json`
- Catalog infrastructure:
  - `catalog/config/site.config.json`
  - `catalog/scripts/build-manifest.mjs`
  - `catalog/scripts/build-landing.mjs`

## Contributing

Contributions are welcome.

### 1. Add or update templates

1. Add template folders at repository root.
2. Keep each template self-contained (HTML/CSS/JS/assets in its own folder).
3. Avoid moving templates into a single nested directory.

### 2. Regenerate catalog files

From repo root, run:

```bash
node catalog/scripts/build-manifest.mjs
node catalog/scripts/build-landing.mjs
```

This refreshes:

- `template-manifest.json`
- `index.html`

### 3. Open a pull request

1. Fork the repo.
2. Create a branch.
3. Commit your template/content updates.
4. Include regenerated catalog files.
5. Open a PR with a short summary of what was added or changed.

## Using Templates With Your AI Coder

The easiest workflow is to pick a template from the live catalog, then give your AI coder both the template link and your project goals.

### Workflow

1. Open `https://opentemplates.netlify.com`.
2. Find a template using search/filter.
3. Click `View GitHub Folder`.
4. Share that folder URL with your AI coder.
5. Ask the AI coder to adapt the template to your use case.

### Prompt template you can copy

```text
Use this template as the base:
<PASTE_TEMPLATE_GITHUB_FOLDER_URL>

Build a <type of site> for <industry/use case>.

Requirements:
- Brand colors: <colors>
- Typography style: <style>
- Sections needed: <hero, features, pricing, faq, contact, etc>
- Must be responsive on mobile and desktop
- Keep original structure where possible, but modernize visuals
- Remove unused sections/assets
- Output clean HTML/CSS/JS with clear file organization
```

Tip: ask your AI coder to keep changes in a new folder so the original template remains intact.

## Local Catalog Build

If you want to generate the catalog locally:

```bash
node catalog/scripts/build-manifest.mjs
node catalog/scripts/build-landing.mjs
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Netlify is configured via `netlify.toml`.

- Build command:
  - `node catalog/scripts/build-manifest.mjs && node catalog/scripts/build-landing.mjs`
- Publish directory:
  - `.`

## Credits

Unique GitHub URLs referenced in this README:

- `https://github.com/learning-zone/website-templates`
