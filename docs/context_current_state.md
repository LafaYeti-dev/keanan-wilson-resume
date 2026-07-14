# Current State

## Status

CU1 - Static Resume Landing Page v1 is implemented and verified on `feature/resume-landing-page-v1`. Keanan explicitly authorized launch after the final design revision. It is ready to merge and deploy but is not yet closed or merged.

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
- Near-full-width desktop reading scale with 32px page gutters, 20px body copy, 112px hero name, 58px section headings, 34px company/project headings, and 22px project evidence at 1440px
- Moderate 1024px scale with 18px body copy and 50px section headings; tablet and mobile now use a roomier 17px body and 18px project-evidence scale
- System sans-serif body typography for a more open, legible reading texture without external font requests
- Approved summary, project-management toolkit, and core skills
- Complete professional experience with every approved company, title, date, bullet, metric, and link
- Featured Projects for the Bowers & Wilkins Pi8 Earbuds product launch, Polk Audio, and Angostura Bitters, positioned before Professional Experience in navigation, DOM, visual, and print order
- Standardized project heroes using an official Pi8 product visual plus brand marks for Polk Audio and Angostura
- The Skin Element remains in Professional Experience and is explicitly identified there as a completed, unreleased Shopify rebuild; it is not presented as a current-site project
- Education and an Upwork contact path with no visible PDF download option
- Responsive navigation, skip link, focus states, reduced-motion handling, metadata, and print styles
- Lean source-integrity verification in `scripts/verify-content.mjs`

## Authoritative content and assets

- `source/resume-content.md` remains authoritative and now includes only Keanan's specifically approved Pi8 Featured Project update.
- `node scripts/verify-content.mjs` found all 114 authoritative content fragments and all 16 approved source links in `index.html`.
- `assets/resume/keanan-wilson-resume.pdf` is present as a four-page PDF 1.4 document.
- PDF SHA-256: `e86a5b4d27a6ecad78401426823acd168e21b54defb6b736fb9757cd0e7e46d6`
- Approved project visuals are limited to one official Pi8 product image and two brand marks; no screenshots, stock imagery, placeholders, or generated imagery are present.
- The Skin Element project hero and logo asset were removed. Its original Professional Experience wording remains unchanged and does not link to or imply ownership of the current public site.
- Asset dimensions, source URLs, SHA-256 hashes, and usage constraints are recorded in `assets/projects/README.md`.

## Verification evidence

- `git diff --check`: passed with no output.
- `npx --no-install html-validate index.html`: passed with 0 errors and 0 warnings.
- `node --check script.js` and `node --check scripts/verify-content.mjs`: passed.
- Local server on port 4173: index, stylesheet, script, and PDF returned HTTP 200.
- Playwright 1.61.1 Chromium at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720: every viewport reported zero horizontal overflow, out-of-bounds elements, broken images, failed requests, console warnings, and console errors.
- Typography checks: 1440px measured 20px/33px body copy, 112px hero type, 58px section headings, 34px company/project headings, and 22px project evidence; 1024px measured 18px body copy, 50px section headings, 30px company/project headings, and 20px project evidence; narrower widths use 17px body copy and 18px project evidence.
- Playwright 1.61.1 CLI screenshots: desktop hero, Featured Projects, and Professional Experience views at 1440x1000 plus Featured Projects at 768x1024 and 375x812 were visually reviewed with no clipping, overlap, or copy collision.
- Browser geometry checks: the Pi8 visual loaded at its 1500 x 1125 intrinsic size. The toolkit title stays on one line at 1440px and 1024px, and preserves whole words with zero overflow at 375px and the 320px minimum.
- Keyboard: skip link receives first focus and transfers focus to Summary; sampled focus outlines are solid and 3px; mobile menu opens, closes on Escape, and returns focus to its control.
- Link checks: all internal targets resolve; all external links use `noopener noreferrer`; the Pi8 product link resolves to the official page; no PDF link or download control is exposed.
- GitHub Pages project-path simulation: `/keanan-wilson-resume/` page, `styles.css?v=20260714-4`, script, Pi8 image, both project logos, and retained PDF asset returned HTTP 200 with the prefix retained.
- Accessibility and contrast: semantic landmarks and H1-H3 hierarchy passed; sampled contrast ratios remain 5.88:1 to 14.73:1; the meaningful Pi8 image has concise alt text while decorative logos retain empty alt attributes beside named headings.
- Reduced motion: `prefers-reduced-motion: reduce` changed smooth scrolling to `auto` and transitions to 0.01ms.
- Print: all eight rendered pages of the Letter PDF 1.4 output were visually inspected with Featured Projects before Professional Experience, black text, hidden navigation/footer controls, and project heroes omitted while project headings and evidence copy remained present.
- Asset provenance: the official Pi8 page and image returned HTTP 200; the WebP-negotiated image response exactly matched the committed file at SHA-256 `a0baf5730f8940b71c54c2bf7fcd7a65c25655016b447b2fbd3b19925177b1db`. The unchanged Polk and Angostura marks retain their recorded verification.

## Known limitations

- The new Pi8 destination returned HTTP 200. Prior automated checks received HTTP 200 from 5 other authoritative destinations and HTTP 403 from 10 brand or Upwork destinations. No checked URL returned 404 or 410; all approved links remain present.
- The Polk wordmark is a high-resolution local asset traced to a third-party logo archive rather than an official media kit; its local and recorded online copies match by SHA-256 and can be replaced if an official press asset becomes available.
- GitHub Pages has not been launched from this feature branch. The project-path behavior is verified locally, but the canonical URL still requires post-merge production verification.
- CU1 remains open until the PR is reviewed and merged, the public URL is confirmed, state files are reconciled on `main`, and Context Projection is completed or explicitly deferred with approval.

## Context Projection

Required and still `pending-launch`. The implementation now establishes the repository and intended public experience, but no cross-repository projection is approved until the reviewed PR is merged and the final GitHub Pages URL is known.
