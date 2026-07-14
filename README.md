# Keanan Wilson Resume

Public, GitHub Pages-hosted resume and project portfolio for Keanan Wilson.

## Current status

CU1 - Static Resume Landing Page v1 is merged to `main` and live on GitHub Pages. Production verification passed; the Completion Unit remains open only for Context Projection completion or an explicitly approved deferral.

## Public site

https://lafayeti-dev.github.io/keanan-wilson-resume/

## Authoritative sources

- `source/resume-content.md` - approved resume content; preserve wording, titles, dates, metrics, and claims unless Keanan explicitly approves a change.
- `assets/resume/keanan-wilson-resume.pdf` - downloadable traditional resume.
- `docs/completion-unit.json` - active scope and Definition of Done.
- `docs/context_current_state.md` - verified current state.
- `docs/next_task.md` - exact approved next action.
- `docs/handoff_log.md` - durable progress and handoff record.

## Intended implementation

- Semantic HTML
- Modern CSS
- Minimal vanilla JavaScript
- No framework or build system
- GitHub Pages project URL

## Local preview

After the site files exist:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Verify approved content preservation with:

```bash
node scripts/verify-content.mjs
```

## Public repository warning

Do not commit credentials, private client data, supplier spreadsheets, Shopify exports, private dashboards, unpublished business documents, or unsanitized backend screenshots.
