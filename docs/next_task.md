# Approved Next Task

## Review CU1 pull request

CU1 - Static Resume Landing Page v1 is implemented and verified on `feature/resume-landing-page-v1`. It is ready for review and is not closed or merged.

### Objective

Review the pull request against `main`, compare the complete page with `source/resume-content.md`, inspect the standardized project heroes and archived Skin Element labeling, and either approve it or request focused changes.

### Review evidence

- Full implementation: `index.html`, `styles.css`, and `script.js`
- Content integrity: `node scripts/verify-content.mjs` passes for 111 source fragments and 15 approved links
- Browser QA: Playwright passed at 1440px, 768px, and 375px with no overflow, console errors, page errors, or failed local requests
- Project heroes: three brand-only local assets load without clipping at all approved widths; provenance, dimensions, hashes, and usage constraints are recorded in `assets/projects/README.md`
- PDF: `assets/resume/keanan-wilson-resume.pdf` returns HTTP 200 and downloads as `keanan-wilson-resume.pdf`
- GitHub Pages: relative paths passed a local `/keanan-wilson-resume/` project-prefix simulation
- Context Projection: required and `pending-launch`

### Exact next action

Keanan reviews the open CU1 pull request. Do not merge it as part of the implementation handoff.

After approval and merge, verify the live GitHub Pages project URL, reconcile `docs/completion-unit.json`, `docs/context_current_state.md`, `docs/handoff_log.md`, and `docs/next_task.md` on `main`, then complete or explicitly defer Context Projection with approval.

### Do not do

Do not select another roadmap item, change approved resume content, add unapproved imagery or services beyond the recorded brand-only marks, claim CU1 is closed before merge and production verification, or project a public URL before it is confirmed.
