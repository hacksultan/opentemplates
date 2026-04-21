# Catalog Infrastructure

This folder contains the infrastructure for generating the static landing page and template manifest.

## Structure

- `config/site.config.json`: catalog title + GitHub repo settings used for source-folder links.
- `scripts/build-manifest.mjs`: scans root template folders and generates `template-manifest.json`.
- `scripts/build-landing.mjs`: generates root `index.html` from `template-manifest.json`.

## Commands (run from repo root)

- `node catalog/scripts/build-manifest.mjs`
- `node catalog/scripts/build-landing.mjs`

## Notes

- Templates remain at repository root by design, so users can browse all folders directly in GitHub.
- Build scripts intentionally output generated files at root:
  - `index.html`
  - `template-manifest.json`
