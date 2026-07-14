# Current State

## Status

CU1 - Static Resume Landing Page v1 is implemented and verified on `feature/resume-landing-page-v1`. It is ready for pull-request review and is not closed or merged.

## Verified repository state

- Repository: `LafaYeti-dev/keanan-wilson-resume`
- Base branch and commit: `main` at `a1008572389640e933039c904a9fcf1392b2cfe8`
- Working branch: `feature/resume-landing-page-v1`
- Intended hosting: GitHub Pages project URL
- Stack: semantic HTML, modern CSS, and minimal vanilla JavaScript
- Build system and runtime dependencies: none
- Local preview: `http://127.0.0.1:4173/`

## Implemented experience

- Premium text-led hero and professional positioning
- Approved summary, project-management toolkit, and core skills
- Complete professional experience with every approved company, title, date, bullet, metric, and link
- Featured project evidence for The Skin Element, Polk Audio, and Angostura Bitters
- Standardized project heroes using brand logos or wordmarks only, with consistent aspect ratios and project-specific neutral fields
- Explicit unreleased archived Shopify rebuild labeling for The Skin Element, including a statement that the work does not represent the current public site
- Education, Upwork contact path, and two downloadable resume PDF actions
- Responsive navigation, skip link, focus states, reduced-motion handling, metadata, and print styles
- Lean source-integrity verification in `scripts/verify-content.mjs`

## Authoritative content and assets

- `source/resume-content.md` remains unchanged and authoritative.
- `node scripts/verify-content.mjs` found all 111 authoritative content fragments and all 15 approved source links in `index.html`.
- `assets/resume/keanan-wilson-resume.pdf` is present as a four-page PDF 1.4 document.
- PDF SHA-256: `e86a5b4d27a6ecad78401426823acd168e21b54defb6b736fb9757cd0e7e46d6`
- Approved project visuals are limited to three brand-only marks; no screenshots, product photography, stock imagery, placeholders, or generated imagery are present.
- The Skin Element logo matches the archived unreleased Shopify theme reference; the page continues to state that the work does not represent the current public site.
- Asset dimensions, source URLs, SHA-256 hashes, and usage constraints are recorded in `assets/projects/README.md`.

## Verification evidence

- `git diff --check`: passed with no output.
- `npx --no-install html-validate index.html`: passed with 0 errors and 0 warnings.
- `node --check script.js` and `node --check scripts/verify-content.mjs`: passed.
- Local server on port 4173: index, stylesheet, script, and PDF returned HTTP 200.
- Playwright 1.61.1 Chromium at 1440x1000, 768x1024, and 375x812: 0 overflow elements, 0 text outside the viewport, one H1, 19 ordered headings, 0 console warnings/errors, 0 page errors, and 0 failed local requests at every viewport.
- Playwright 1.61.1 CLI screenshots at 1440x900, 768x1024, and 375x812: the settled Evidence view was visually reviewed with no overlap, logo clipping, or project-copy collision.
- Browser geometry checks: all three project marks loaded and were fully contained; hero ratios were 3.2:1 on desktop/tablet and 2.286:1 on mobile; every viewport reported zero horizontal overflow.
- Keyboard: skip link receives first focus and transfers focus to Summary; sampled focus outlines are solid and 3px; mobile menu opens, closes on Escape, and returns focus to its control.
- Link and download checks: all internal targets resolve; all external links use `noopener noreferrer`; PDF download event returned `keanan-wilson-resume.pdf`.
- GitHub Pages project-path simulation: `/keanan-wilson-resume/` page, CSS, all three project logos, and PDF returned HTTP 200 with the prefix retained and no mobile overflow.
- Accessibility and contrast: semantic landmarks and H1-H3 hierarchy passed; sampled contrast ratios ranged from 5.88:1 to 14.73:1; the decorative logos have empty alt attributes inside `aria-hidden` containers while adjacent H3 headings expose the official brand names.
- Reduced motion: `prefers-reduced-motion: reduce` changed smooth scrolling to `auto` and transitions to 0.01ms.
- Print: an eight-page tagged Letter PDF rendered with black text, hidden navigation/footer controls, and decorative project heroes omitted while project headings and evidence copy remained present.
- Asset provenance: all three recorded source URLs returned HTTP 200 and matched the committed byte sizes; local and online copies were hash-verified where available.

## Known limitations

- Automated checks received HTTP 200 from 5 authoritative external destinations and HTTP 403 from 10 brand or Upwork destinations. No checked URL returned 404 or 410; the exact approved links were preserved.
- The Polk wordmark is a high-resolution local asset traced to a third-party logo archive rather than an official media kit; its local and recorded online copies match by SHA-256 and can be replaced if an official press asset becomes available.
- GitHub Pages has not been launched from this feature branch. The project-path behavior is verified locally, but the canonical URL still requires post-merge production verification.
- CU1 remains open until the PR is reviewed and merged, the public URL is confirmed, state files are reconciled on `main`, and Context Projection is completed or explicitly deferred with approval.

## Context Projection

Required and still `pending-launch`. The implementation now establishes the repository and intended public experience, but no cross-repository projection is approved until the reviewed PR is merged and the final GitHub Pages URL is known.
