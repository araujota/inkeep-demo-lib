# Quickstart

Install dependencies and generate API docs:

```bash
npm ci
npm run build:typedoc
```

Serve the site locally:

```bash
pip install mkdocs-material
mkdocs serve
```

Deploy (CI will do this automatically on `main`):

```bash
mkdocs gh-deploy --force
```
