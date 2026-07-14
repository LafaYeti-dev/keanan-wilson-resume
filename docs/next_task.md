# Approved Next Task

## Review CU1 pull request

CU1 - Static Resume Landing Page v1 is implemented and verified on `feature/resume-landing-page-v1`. It is ready for review and is not closed or merged.

### Objective

Review the pull request against `main`, compare the complete page with `source/resume-content.md`, inspect the Pi8 Featured Project and standardized project heroes, confirm the mobile heading behavior and absence of PDF download controls, and either approve it or request focused changes.

### Review evidence

- Full implementation: `index.html`, `styles.css`, and `script.js`
- Content integrity: `node scripts/verify-content.mjs` passes for 114 source fragments and 16 approved links
- Browser QA: Playwright passed at 1440px, 768px, and 375px with no overflow or console errors; the long toolkit heading also preserves whole words at 320px
- Project heroes: the official high-resolution Pi8 visual and two brand marks load without problematic clipping at all approved widths; provenance, dimensions, hashes, and usage constraints are recorded in `assets/projects/README.md`
- PDF: `assets/resume/keanan-wilson-resume.pdf` remains a verified repository asset, but the interface contains no PDF links or download controls
- GitHub Pages: relative paths passed a local `/keanan-wilson-resume/` project-prefix simulation
- Context Projection: required and `pending-launch`

### Exact next action

Keanan reviews the open CU1 pull request. Do not merge it as part of the implementation handoff.

After approval and merge, verify the live GitHub Pages project URL, reconcile `docs/completion-unit.json`, `docs/context_current_state.md`, `docs/handoff_log.md`, and `docs/next_task.md` on `main`, then complete or explicitly defer Context Projection with approval.

### Do not do

Do not select another roadmap item, change approved resume content, add unapproved imagery or services beyond the recorded Pi8 product visual and brand marks, reintroduce a PDF download control without approval, claim CU1 is closed before merge and production verification, or project a public URL before it is confirmed.
