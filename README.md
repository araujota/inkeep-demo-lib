# Inkeep Demo Lib

A minimal TypeScript library + MkDocs site that Inkeep can crawl easily.
- API docs generated via **TypeDoc** (markdown) to `docs/api`
- Site built by **MkDocs Material**
- Deployed to **GitHub Pages** via GitHub Actions

## Quick use

1) Create a new GitHub repo named `inkeep-demo-lib` and push these files.
2) On your machine:
   ```bash
   npm ci
   npm run build:typedoc
   pip install mkdocs-material
   mkdocs serve
   ```
3) Push to `main`; the included workflow will publish to:
   `https://<your-username>.github.io/inkeep-demo-lib/`

## Inkeep config

- Use **General Web** source with the above base URL.
- Allowlist `/`, `/guides/`, `/api/`.
- Deny `/search/`.
- Keep depth to 3–4.
- Re-crawl weekly (or on CI deploys).

## Notes
- `robots.txt` is included and allows indexing.
- `sitemap.xml` is emitted by MkDocs' sitemap plugin.
