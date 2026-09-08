# Current State

## Status

CU1 - Static Resume Landing Page v1 is live at `https://lafayeti-dev.github.io/keanan-wilson-resume/`. The Lead Technical Project Manager content revision is deployed, with Good to Great Schools Australia first in Professional Experience and its company-context links removed. Keanan's approved portrait is integrated into the responsive hero. CU1 is not claimed closed because required Context Projection remains pending.

A separate dark V2 working copy is ready for design review on `codex/resume-dark-logo-v2` under `v2/`. It does not replace or alter the production page at the repository root.

## Verified repository state

- Repository: `LafaYeti-dev/keanan-wilson-resume`
- Base branch and current content production commit: `main` at `007f7f324e7d044377a4482b973deccac7041357`
- Working branch: `main`
- Intended hosting: GitHub Pages project URL
- Stack: semantic HTML, modern CSS, and minimal vanilla JavaScript
- Build system and runtime dependencies: none
- Local preview: `http://127.0.0.1:4173/`
- Public URL: `https://lafayeti-dev.github.io/keanan-wilson-resume/`
- V2 local preview: `http://127.0.0.1:4173/v2/`

## V2 design working copy

- Charcoal and navy editorial theme with a larger portrait-led hero, visible next-section cue, restrained cool-blue accents, and no gradients or external fonts.
- Standardized local logo presentation for all 18 approved Tools & Platforms entries.
- Professional Experience includes seven verified employer marks plus a typographic Eagle Rocket name treatment because no verified public logo was found.
- Existing source wording, all 141 authoritative content fragments, and all 16 approved links remain intact.
- The root production files remain unchanged; V2 is isolated to `v2/`, `assets/brands/`, and two lean verification scripts.
- Browser QA passed at 1440x1000, 768x1024, and 375x812 with no overflow, broken images, out-of-bounds elements, browser errors, invalid internal targets, or unsafe new-tab links.
- Mobile navigation, focus visibility, Escape behavior, heading order, reduced motion, and the absence of any PDF link were verified.
- Brand provenance and the Eagle Rocket limitation are recorded in `assets/brands/README.md`.

## Implemented experience

- Premium text-led hero and professional positioning
- Responsive hero portrait with a restrained 6px radius, square desktop framing, and landscape mobile framing
- Exact proportional text revision: every non-hero font size is 75% of its prior value and every hero-name size is 50% of its prior value
- Revised 1440px scale: 15px body copy, 56px hero name, 43.5px section headings, 25.5px company/project headings, and 16.5px project evidence
- Revised 1024px scale: 13.5px body copy, 48px hero name, 37.5px section headings, 22.5px company/project headings, and 15px project evidence
- System sans-serif body typography for a more open, legible reading texture without external font requests
- Approved Lead Technical Project Manager summary, 18-item Tools & Platforms list, and 20-item Core Expertise list
- Good to Great Schools Australia appears first in Professional Experience with the approved title, dates, and seven achievement bullets; the subsequently removed company-context block and its three links are absent
- Complete professional experience with every approved company, title, date, bullet, metric, and link
- Featured Projects for the Bowers & Wilkins Pi8 Earbuds product launch, Polk Audio, and Angostura Bitters, positioned before Professional Experience in navigation, DOM, visual, and print order
- Standardized project heroes using an official Pi8 product visual plus brand marks for Polk Audio and Angostura
- The Skin Element remains in Professional Experience and is explicitly identified there as a completed, unreleased Shopify rebuild; it is not presented as a current-site project
- Education and an Upwork contact path with no visible PDF download option
- Responsive navigation, skip link, focus states, reduced-motion handling, metadata, and print styles
- Lean source-integrity verification in `scripts/verify-content.mjs`

## Authoritative content and assets

- `source/resume-content.md` remains authoritative and contains Keanan's approved Lead Technical Project Manager content revision and Pi8 Featured Project update.
- `node scripts/verify-content.mjs` found all 141 authoritative content fragments and all 16 approved source links in `index.html` after the company-context removal.
- `assets/resume/keanan-wilson-resume.pdf` is present as a four-page PDF 1.4 document.
- `assets/profile/keanan-wilson-portrait.jpg` is an approved, metadata-free 1600 x 1600 progressive JPEG optimized to 329,495 bytes; provenance and hash are recorded in `assets/profile/README.md`.
- PDF SHA-256: `e86a5b4d27a6ecad78401426823acd168e21b54defb6b736fb9757cd0e7e46d6`
- Approved project visuals are limited to one official Pi8 product image and two brand marks; no screenshots, stock imagery, placeholders, or generated imagery are present.
- The Skin Element project hero and logo asset were removed. Its original Professional Experience wording remains unchanged and does not link to or imply ownership of the current public site.
- Asset dimensions, source URLs, SHA-256 hashes, and usage constraints are recorded in `assets/projects/README.md`.

## Verification evidence

- `git diff --check`: passed with no output.
- Portrait QA: Playwright 1.62.1 Chromium passed at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720 with the 1600 x 1600 portrait loaded, 6px radius applied, meaningful alt text present, and zero overflow, broken assets, failed requests, console warnings, or console errors.
- Portrait visual review: desktop, tablet, and mobile hero captures confirmed balanced sizing and natural face framing; print media intentionally hides the portrait while preserving the existing resume output.
- Portrait production verification: GitHub Pages built `007f7f324e7d044377a4482b973deccac7041357` without error; an external Bangkok probe returned HTTP 200 for both the page and the 329,495-byte JPEG and confirmed the deployed page references the portrait.
- Content revision QA: Good to Great Schools Australia remains first with all seven bullets; the company-context block and its three links are absent from source and page markup.
- Playwright 1.62.1 Chromium at 1440x1000, 768x1024, and 375x812: zero horizontal overflow, out-of-bounds elements, failed requests, console warnings, or console errors after the context removal.
- GitHub Pages build for `e6023611759d5412239f5552771328dd17bad4b9` completed with status `built` and no error; an external Bangkok probe returned HTTP 200 with a matching deployment timestamp and no company-context text.
- `npx --no-install html-validate index.html`: passed with 0 errors and 0 warnings.
- `node --check script.js` and `node --check scripts/verify-content.mjs`: passed.
- Local server on port 4173: index, stylesheet, script, and PDF returned HTTP 200.
- Playwright 1.61.1 Chromium at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720: every viewport reported zero horizontal overflow, out-of-bounds elements, broken images, failed requests, console warnings, and console errors.
- Typography checks: the 1440px, 1024px, 768px, 375px, and 320px computed sizes match the requested 75% global and 50% hero ratios exactly.
- Playwright 1.61.1 CLI screenshots: desktop hero, Featured Projects, and Professional Experience views at 1440x1000 plus Featured Projects at 768x1024 and 375x812 were visually reviewed with no clipping, overlap, or copy collision.
- Browser geometry checks: the Pi8 visual loaded at its 1500 x 1125 intrinsic size. The toolkit title stays on one line at 1440px and 1024px, and preserves whole words with zero overflow at 375px and the 320px minimum.
- Keyboard: skip link receives first focus and transfers focus to Summary; sampled focus outlines are solid and 3px; mobile menu opens, closes on Escape, and returns focus to its control.
- Link checks: all internal targets resolve; all external links use `noopener noreferrer`; the Pi8 product link resolves to the official page; no PDF link or download control is exposed.
- GitHub Pages project-path simulation: `/keanan-wilson-resume/` page, `styles.css?v=20260714-5`, script, Pi8 image, both project logos, and retained PDF asset returned HTTP 200 with the prefix retained.
- Accessibility and contrast: semantic landmarks and H1-H3 hierarchy passed; sampled contrast ratios remain 5.88:1 to 14.73:1; the meaningful Pi8 image has concise alt text while decorative logos retain empty alt attributes beside named headings.
- Reduced motion: `prefers-reduced-motion: reduce` changed smooth scrolling to `auto` and transitions to 0.01ms.
- Print: all six rendered pages of the revised Letter PDF 1.4 output were visually inspected with Featured Projects before Professional Experience, black text, hidden navigation/footer controls, and no clipping or broken glyphs.
- Asset provenance: the official Pi8 page and image returned HTTP 200; the WebP-negotiated image response exactly matched the committed file at SHA-256 `a0baf5730f8940b71c54c2bf7fcd7a65c25655016b447b2fbd3b19925177b1db`. The unchanged Polk and Angostura marks retain their recorded verification.
- Production: PR #2 merged the proportional type scale as `4b2863ef84d7b37e447fd89215ee19b884cfdb2b`; GitHub Pages build `1095220710` completed with status `built` and no error.
- Live HTTPS checks: page, `styles.css?v=20260714-5`, script, Pi8 visual, Polk and Angostura marks, and retained PDF returned HTTP 200 from GitHub Pages.
- Live type-scale checks: all five approved viewports reproduced the requested 75% global and 50% hero multipliers exactly.
- Live Playwright: all five approved viewports reproduced the verified computed typography and project-first section order with zero overflow, broken images, failed requests, console warnings, or console errors.
- Live visual review: a 1440x1000 production capture matched the final local hero, navigation, page gutters, and typography.

## Known limitations

- The new Pi8 destination returned HTTP 200. Prior automated checks received HTTP 200 from 5 other authoritative destinations and HTTP 403 from 10 brand or Upwork destinations. No checked URL returned 404 or 410; all approved links remain present.
- The Polk wordmark is a high-resolution local asset traced to a third-party logo archive rather than an official media kit; its local and recorded online copies match by SHA-256 and can be replaced if an official press asset becomes available.
- Headless Chromium's print PDF is untagged; the semantic HTML remains the accessible source experience.
- CU1 remains open only until Context Projection is completed or explicitly deferred with approval.

## Context Projection

Required and now `launch-verified-projection-pending`. The reviewed PR is merged and the public URL is known, but no cross-repository projection has been completed or explicitly deferred with approval.
