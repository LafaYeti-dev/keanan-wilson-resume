# Approved Next Task

## Launch CU1

CU1 - Static Resume Landing Page v1 is implemented and verified on `feature/resume-landing-page-v1`. Keanan explicitly requested launch after reviewing the final design direction. It is launch-authorized but is not yet closed or merged.

### Objective

Merge the verified pull request to `main`, enable GitHub Pages from the repository root on `main`, verify the public project URL and all critical assets, then reconcile the repository state files without claiming CU1 closed until Context Projection is completed or explicitly deferred with approval.

### Review evidence

- Full implementation: `index.html`, `styles.css`, and `script.js`
- Content integrity: `node scripts/verify-content.mjs` passes for 114 source fragments and 16 approved links
- Desktop scale: 1440px now uses 20px body copy with a 33px line height, a 112px hero name, 58px section headings, 34px company/project headings, and 22px project evidence; 1024px uses an 18px/50px tier
- Browser QA: Playwright passed at 1440px, 1024px, 768px, 375px, and 320px with no overflow, out-of-bounds elements, broken assets, failed requests, or console errors; the long toolkit heading preserves whole words at narrow widths
- Content order: Featured Projects precedes Professional Experience in the DOM, navigation, hero index, section numbering, and print output
- Project heroes: the official high-resolution Pi8 visual and two brand marks load without problematic clipping at all approved widths; provenance, dimensions, hashes, and usage constraints are recorded in `assets/projects/README.md`
- PDF: `assets/resume/keanan-wilson-resume.pdf` remains a verified repository asset, but the interface contains no PDF links or download controls
- GitHub Pages: relative paths passed a local `/keanan-wilson-resume/` project-prefix simulation
- Context Projection: required and `pending-launch`

### Exact next action

Merge the open CU1 pull request, enable GitHub Pages, verify the live public URL, and reconcile `README.md`, `docs/completion-unit.json`, `docs/context_current_state.md`, `docs/handoff_log.md`, and `docs/next_task.md` on `main` with real launch evidence.

### Do not do

Do not select another roadmap item, change approved resume content, add unapproved imagery or services beyond the recorded Pi8 product visual and brand marks, reintroduce a PDF download control without approval, claim CU1 is closed before merge and production verification, or record a public URL before it is confirmed.
