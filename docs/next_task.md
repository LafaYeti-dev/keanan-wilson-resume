# Approved Next Task

## Resolve Context Projection

CU1 - Static Resume Landing Page v1 is live with Keanan's requested 25% global text reduction and 50% hero-name reduction. The revision is merged and production-verified. Context Projection is the only remaining completion item.

### Objective

Project the final repository, public URL, project status, and portfolio registry changes into the required external context, or obtain explicit approval to defer that projection. Only then reconcile CU1 as closed.

### Review evidence

- Full implementation: `index.html`, `styles.css`, and `script.js`
- Content integrity: `node scripts/verify-content.mjs` passes for 114 source fragments and 16 approved links
- Type scale: every non-hero font size is exactly 75% of its prior value; the hero full name is exactly 50% at every breakpoint
- Desktop scale: 1440px now uses 15px body copy, a 56px hero name, 43.5px section headings, 25.5px company/project headings, and 16.5px project evidence
- Browser QA: Playwright passed at 1440px, 1024px, 768px, 375px, and 320px with no overflow, out-of-bounds elements, broken assets, failed requests, or console errors; the long toolkit heading preserves whole words at narrow widths
- Content order: Featured Projects precedes Professional Experience in the DOM, navigation, hero index, section numbering, and print output
- Project heroes: the official high-resolution Pi8 visual and two brand marks load without problematic clipping at all approved widths; provenance, dimensions, hashes, and usage constraints are recorded in `assets/projects/README.md`
- PDF: `assets/resume/keanan-wilson-resume.pdf` remains a verified repository asset, but the interface contains no PDF links or download controls
- GitHub Pages: relative paths passed a local `/keanan-wilson-resume/` project-prefix simulation
- Production: PR #2 merged to `main` as `4b2863ef84d7b37e447fd89215ee19b884cfdb2b`; GitHub Pages build `1095220710` completed successfully
- Public URL: `https://lafayeti-dev.github.io/keanan-wilson-resume/`
- Live QA: page and critical assets returned HTTPS 200; Playwright passed at 1440px, 1024px, 768px, 375px, and 320px with no overflow, broken assets, failed requests, or console errors
- Context Projection: required and `launch-verified-projection-pending`

### Exact next action

Complete Context Projection for the confirmed public site and repository, or explicitly approve deferral. Then update the four state files to close CU1 if all completion rules are satisfied.

### Do not do

Do not select another roadmap item, change approved resume content, add unapproved imagery or services beyond the recorded Pi8 product visual and brand marks, reintroduce a PDF download control without approval, or claim CU1 closed while required Context Projection is unresolved.
