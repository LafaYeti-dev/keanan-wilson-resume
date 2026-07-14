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
- Explicit unreleased archived Shopify rebuild labeling for The Skin Element, including a statement that the work does not represent the current public site
- Education, Upwork contact path, and two downloadable resume PDF actions
- Responsive navigation, skip link, focus states, reduced-motion handling, metadata, and print styles
- Lean source-integrity verification in `scripts/verify-content.mjs`

## Authoritative content and assets

- `source/resume-content.md` remains unchanged and authoritative.
- `node scripts/verify-content.mjs` found all 111 authoritative content fragments and all 15 approved source links in `index.html`.
- `assets/resume/keanan-wilson-resume.pdf` is present as a four-page PDF 1.4 document.
- PDF SHA-256: `e86a5b4d27a6ecad78401426823acd168e21b54defb6b736fb9757cd0e7e46d6`
- No approved project imagery was supplied, so v1 uses the approved text-led design and includes no placeholder, stock, or generated imagery.

## Verification evidence

- `git diff --check`: passed with no output.
- `npx --yes html-validate index.html`: passed with 0 errors and 0 warnings.
- `node --check script.js` and `node --check scripts/verify-content.mjs`: passed.
- Local server on port 4173: index, stylesheet, script, and PDF returned HTTP 200.
- Playwright 1.61.1 Chromium at 1440x1000, 768x1024, and 375x812: 0 overflow elements, 0 text outside the viewport, one H1, 19 ordered headings, 0 console warnings/errors, 0 page errors, and 0 failed local requests at every viewport.
- Playwright CLI full-page screenshots at 1440px, 768px, and 375px: visually reviewed with no overlap or clipping.
- Keyboard: skip link receives first focus and transfers focus to Summary; sampled focus outlines are solid and 3px; mobile menu opens, closes on Escape, and returns focus to its control.
- Link and download checks: all internal targets resolve; all external links use `noopener noreferrer`; PDF download event returned `keanan-wilson-resume.pdf`.
- GitHub Pages project-path simulation: `/keanan-wilson-resume/` page, CSS, JavaScript, and PDF returned HTTP 200 with the prefix retained and no mobile overflow.
- Accessibility and contrast: semantic landmarks and H1-H3 hierarchy passed; sampled contrast ratios ranged from 5.88:1 to 14.73:1; no images are present, so alt-text checks are not applicable.
- Reduced motion: `prefers-reduced-motion: reduce` changed smooth scrolling to `auto` and transitions to 0.01ms.
- Print: eight Letter pages rendered with white backgrounds, black text, hidden navigation/footer controls, and no clipping or orphaned final contact content.

## Known limitations

- Automated checks received HTTP 200 from 5 authoritative external destinations and HTTP 403 from 10 brand or Upwork destinations. No checked URL returned 404 or 410; the exact approved links were preserved.
- GitHub Pages has not been launched from this feature branch. The project-path behavior is verified locally, but the canonical URL still requires post-merge production verification.
- CU1 remains open until the PR is reviewed and merged, the public URL is confirmed, state files are reconciled on `main`, and Context Projection is completed or explicitly deferred with approval.

## Context Projection

Required and still `pending-launch`. The implementation now establishes the repository and intended public experience, but no cross-repository projection is approved until the reviewed PR is merged and the final GitHub Pages URL is known.
