# Handoff Log

## 2026-07-14 - Repository bootstrap

### Completed

- Created the public repository and connected the local clone.
- Added the project README and Codex-facing `AGENTS.md`.
- Defined CU1: Static Resume Landing Page v1.
- Recorded the initial current state and approved next task.
- Prepared an approved resume-content source file and asset locations.

### Decisions

- Use semantic HTML, modern CSS, and minimal vanilla JavaScript.
- Do not use a framework or build system.
- Publish through GitHub Pages from the repository project path.
- Preserve approved resume content exactly unless a specific content change is approved.
- Treat all committed assets as public.
- Context Projection is required after the final public URL and merge are confirmed.

### Pending

- Pull the remote bootstrap commit into the local clone.
- Confirm the downloadable PDF exists at `assets/resume/keanan-wilson-resume.pdf`.
- Add only sanitized, public-safe project assets.
- Run the Codex implementation prompt in `docs/CODEX_BUILD_PROMPT.md`.
- Review the resulting branch and pull request before merge.

### Blockers

No technical blocker. Project screenshots and visual assets can be added during or after the initial layout build.

## 2026-07-14 - CU1 implementation ready for review

### Completed

- Created `feature/resume-landing-page-v1` from `main` at `a1008572389640e933039c904a9fcf1392b2cfe8`.
- Added the complete semantic landing page in `index.html`, responsive and print styling in `styles.css`, and minimal navigation behavior in `script.js`.
- Preserved `source/resume-content.md` and added `scripts/verify-content.mjs` to verify all 111 authoritative fragments and 15 approved links.
- Added the approved four-page resume PDF at `assets/resume/keanan-wilson-resume.pdf` with SHA-256 `e86a5b4d27a6ecad78401426823acd168e21b54defb6b736fb9757cd0e7e46d6`.
- Implemented hero, summary, toolkit, skills, complete experience, featured project evidence, education, Upwork contact path, and PDF downloads.
- Labeled The Skin Element as an unreleased archived Shopify rebuild and stated that the work does not represent the current public site.
- Used the approved premium text-led direction because no public-safe project imagery was supplied.

### Verification

- `git diff --check`, HTML validation, JavaScript syntax checks, and source-content verification passed.
- Port 4173 preview returned HTTP 200 for the page, stylesheet, script, and PDF.
- Playwright 1.61.1 Chromium passed at 1440x1000, 768x1024, and 375x812 with no horizontal overflow, text outside the viewport, console warnings/errors, page errors, or failed local requests.
- Full-page Playwright CLI screenshots were visually reviewed at all three approved widths.
- Keyboard focus, skip-link transfer, mobile menu Escape behavior, internal anchors, external link attributes, and the PDF download event passed.
- Sampled contrast ratios ranged from 5.88:1 to 14.73:1; reduced-motion behavior passed.
- Print media rendered cleanly as eight Letter pages after fixing the final contact-page break.
- A temporary `/keanan-wilson-resume/` project-path server returned HTTP 200 for the page and every local asset while retaining the prefix.
- External-link probing returned 5 HTTP 200 responses and 10 HTTP 403 responses from protected brand or Upwork destinations; none returned 404 or 410.

### Decisions

- Keep the approved resume wording and links unchanged; visual hierarchy may reorganize presentation but not source claims.
- Keep the site dependency-free and use only relative repository paths for local assets.
- Record CU1 as ready for review, not closed. Closure still requires a reviewed merge, live Pages verification, state reconciliation on `main`, and Context Projection completion or approved deferral.

### Pending

- Keanan reviews the open pull request against `main`; do not merge it as part of this handoff.
- After review and merge, verify the live GitHub Pages URL and reconcile the four state files on `main`.
- Complete or explicitly defer Context Projection after the public URL and merged status are final.

### Blockers and limitations

- No implementation blocker remains.
- No approved project imagery was supplied; the intentional text-led v1 contains no placeholder imagery.
- Automated access to 10 authoritative external destinations was blocked with HTTP 403; their exact approved URLs were retained.

## 2026-07-14 - CU1 standardized project heroes ready for review

### Completed

- Added standardized brand-only heroes for The Skin Element, Polk Audio, and Angostura aromatic bitters without changing any authoritative resume wording.
- Sourced public-safe local copies at 480 x 355, 3840 x 2160, and 1492 x 599 respectively; recorded source URLs, dimensions, hashes, and constraints in `assets/projects/README.md`.
- Matched The Skin Element to the logo filename referenced by the archived unreleased Shopify theme and retained the explicit statement that this work does not represent the current public site.
- Added stable IDs for all three featured project articles and decorative image semantics using empty alt attributes inside `aria-hidden` hero containers.
- Kept screenshots, product photography, stock imagery, placeholders, generated imagery, external asset delivery, and new dependencies out of the site.

### Verification

- `node scripts/verify-content.mjs` still passes for all 111 authoritative fragments and 15 links; `source/resume-content.md` remains unchanged.
- `npx --no-install html-validate index.html`, JavaScript syntax checks, and `git diff --check` pass.
- Local port 4173 returns HTTP 200 for the page, PDF, and all three new image assets.
- In-app browser checks at 1440x900, 768x1024, and 375x812 report zero horizontal overflow; all project images load and remain fully contained at every viewport.
- Playwright 1.61.1 CLI screenshots at the three approved widths were visually reviewed after the smooth Evidence anchor settled; no logo clipping, overlap, or copy collision was found.
- Final browser logs contain zero warnings or errors; the DOM has one H1, an ordered H1-H3 hierarchy, and no duplicate IDs.
- A `/keanan-wilson-resume/` project-path simulation returns HTTP 200 for the page, CSS, all three logos, and PDF.
- The three recorded source URLs return HTTP 200 with the same byte sizes as their committed copies; local and online copies were hash-verified where available.
- Print remains an eight-page tagged Letter PDF; project logos are intentionally omitted from print while project headings and evidence copy remain present.

### Decisions

- Treat the newly approved logos and wordmarks as identity visuals only, not as screenshots or evidence that a current public site is Keanan's work.
- Keep one shared hero geometry with brand-specific neutral backgrounds and preserve the adjacent text headings as the accessible brand names.
- Keep CU1 `ready-for-review`; this visual approval does not close, merge, launch, or project the completion unit.

### Pending

- Keanan reviews the updated open pull request against `main`; do not merge it as part of this handoff.
- After review and merge, verify the live GitHub Pages URL and reconcile the state files on `main`.
- Complete or explicitly defer Context Projection after the final public URL and merged status are known.

### Blockers and limitations

- No implementation blocker remains.
- The Polk wordmark is traced to a high-resolution third-party logo archive rather than an official media kit; its local and recorded online copies match by SHA-256 and can be replaced if an official press asset is supplied.
- The feature branch is not merged and GitHub Pages is not launched, so production verification and Context Projection remain pending.

## 2026-07-14 - CU1 Pi8 featured-project revision ready for review

### Completed

- Replaced The Skin Element Featured Project module with `Bowers & Wilkins - Pi8 Earbuds Product Launch` using Keanan's approved claim: `Managed the design and user flow for the Bowers & Wilkins Pi8 Earbuds product launch, from brand review through product launch.`
- Added the approved claim and official Pi8 product-page link to `source/resume-content.md`, preserving that file as the authoritative content record.
- Sourced a 1500 x 1125 Pi8 product visual directly from the official Bowers & Wilkins product page, stored it locally as WebP, and recorded source, dimensions, hash, content negotiation, and usage constraints.
- Renamed the section from `Featured Project Evidence` to `Featured Projects`.
- Removed the obsolete Skin Element hero asset and archived-only Featured Project styles. The unchanged Professional Experience bullet still identifies The Skin Element as a completed, unreleased Shopify ecommerce rebuild.
- Removed both visible PDF download actions at Keanan's request while retaining the approved PDF as an unlinked repository asset.
- Prevented mobile headings from breaking inside words. `PROJECT‑MANAGEMENT` now remains whole and wraps only before `TOOLKIT` at narrow widths.

### Verification

- `node scripts/verify-content.mjs` passes for all 114 authoritative fragments and 16 approved links; HTML validation, JavaScript syntax checks, JSON validation, and `git diff --check` pass.
- The official Pi8 page and image returned HTTP 200. With `Accept: image/webp`, the official response matched the committed 121,684-byte file and SHA-256 `a0baf5730f8940b71c54c2bf7fcd7a65c25655016b447b2fbd3b19925177b1db`.
- In-app Playwright and Playwright 1.61.1 CLI passed at 1440x900, 768x1024, and 375x812 with zero horizontal overflow and no image, heading, or project-copy collision.
- The toolkit title preserves whole words at 375px and 320px with zero overflow; the final DOM contains zero PDF links, download attributes, or visible download controls.
- The Pi8 image loads at its 1500 x 1125 intrinsic size with concise alt text; the official external link uses `_blank` plus `noopener noreferrer`; final browser logs contain zero warnings or errors.
- GitHub Pages project-path simulation returned HTTP 200 for the page, CSS, script, Pi8 visual, Polk and Angostura marks, and retained PDF asset.
- Print remains an eight-page Letter PDF 1.4 output with project headings and evidence copy retained while project visuals are omitted.

### Decisions

- Treat Keanan's Pi8 instruction and removal of PDF controls as explicit approved content and interface overrides for CU1.
- Use the official product visual as product identity, not as evidence that Keanan owns the current public Pi8 page.
- Keep CU1 `ready-for-review`; these revisions do not close, merge, launch, or project the completion unit.

### Pending

- Keanan reviews the updated open pull request against `main`; do not merge it as part of this handoff.
- After review and merge, verify the live GitHub Pages URL and reconcile the state files on `main`.
- Complete or explicitly defer Context Projection after the final public URL and merged status are known.

### Blockers and limitations

- No implementation blocker remains.
- The Polk wordmark still traces to a high-resolution third-party logo archive rather than an official media kit; replace it if Polk supplies an approved official press asset.
- The feature branch is not merged and GitHub Pages is not launched, so production verification and Context Projection remain pending.

## 2026-07-14 - CU1 final design and launch authorization

### Completed

- Re-art-directed the site after Keanan's review that the typography still felt cramped and small.
- Replaced Avenir Next as the first-choice body face with the native system sans-serif stack for a more open reading texture and zero external font requests.
- Expanded the desktop shell to 32px page gutters at 1440px and increased the main reading scale to 20px body copy with a 33px line height, 22px project evidence, 34px company/project headings, 58px section headings, and 112px hero type.
- Increased the 1024px tier to 18px body copy and 50px section headings; increased tablet and mobile body copy to 17px and project evidence to 18px.
- Moved Featured Projects before Professional Experience in the DOM, primary navigation, hero index, section numbering, visual sequence, active-navigation behavior, and print sequence.
- Changed the primary hero action to `View projects` and the navigation label from `Evidence` to `Projects`.
- Cache-versioned the stylesheet as `styles.css?v=20260714-4`.

### Verification

- Playwright 1.61.1 Chromium passed at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720 with zero horizontal overflow, out-of-bounds elements, broken images, failed requests, console warnings, and console errors.
- Computed 1440px typography measured 20px/33px body copy, 112px hero type, 58px section headings, 34px company/project headings, and 22px project evidence; 1024px measured 18px, 50px, 30px, and 20px respectively.
- The DOM order is `top`, `summary`, `toolkit`, `skills`, `evidence`, `experience`, `education`, `contact`; one H1 and no duplicate IDs remain.
- Tablet, mobile, and minimum-width menus open, report `aria-expanded=true`, close on Escape, and restore focus to the Menu button.
- The toolkit heading remains one line at desktop widths and wraps only between whole words at 375px and 320px.
- Reduced-motion emulation matches and changes smooth scrolling to `auto` and transitions to 0.01ms.
- Playwright CLI captures of desktop hero, Featured Projects, and Professional Experience plus tablet and mobile Featured Projects were visually reviewed without overlap, clipping, or cramped copy.
- `node scripts/verify-content.mjs` passes for 114 authoritative fragments and 16 links; HTML validation and both JavaScript syntax checks pass.
- GitHub Pages project-path simulation returned HTTP 200 for the page, cache-versioned stylesheet, script, all three project visuals, and retained PDF.
- Headless Chromium produced an eight-page Letter PDF 1.4; all eight rendered pages were visually inspected with Featured Projects before Professional Experience and no clipping or broken glyphs.

### Decisions

- Treat Keanan's instruction to launch as explicit authorization to merge the reviewed PR and enable GitHub Pages.
- Preserve every authoritative resume claim while changing only hierarchy, interface labels, typography, spacing, and section order.
- Keep CU1 open through deployment reconciliation; launch authorization does not by itself satisfy the Context Projection completion rule.

### Pending

- Commit and push this final design revision, update and merge the open pull request, and enable GitHub Pages from `main`.
- Verify the live public URL and critical asset paths, then reconcile the state files on `main` with production evidence.
- Complete Context Projection or explicitly defer it with approval before claiming CU1 closed.

### Blockers and limitations

- No implementation blocker remains.
- GitHub Pages is currently disabled and must be enabled after merge.
- The Polk wordmark still traces to a high-resolution third-party logo archive rather than an official media kit; replace it if Polk supplies an approved official press asset.

## 2026-07-14 - CU1 launched and production-verified

### Completed

- Merged reviewed PR #1 to `main` as `bcbe5c676db47abb64b954dff9a2552dba0302a7` after Keanan explicitly requested launch.
- Enabled GitHub Pages from the repository root on `main` with HTTPS enforced.
- GitHub Pages build `1095169114` completed with status `built`, no error, and the confirmed public URL `https://lafayeti-dev.github.io/keanan-wilson-resume/`.
- Updated `README.md` and the four repository state files on `main` with the confirmed launch evidence.

### Verification

- The live page, `styles.css?v=20260714-4`, script, Pi8 visual, Polk logo, Angostura logo, and retained PDF each returned HTTPS 200 from GitHub Pages.
- Live Playwright 1.61.1 Chromium passed at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720.
- Production computed styles matched the approved local design at every viewport, including 20px/33px desktop body copy, 58px section headings, 34px company/project headings, and 22px project evidence at 1440px.
- The production DOM retained Featured Projects before Professional Experience, one H1, no duplicate IDs, no PDF controls, no external-link rel issues, and no broken images.
- Every live viewport reported zero horizontal overflow, out-of-bounds elements, failed requests, console warnings, and console errors.
- Tablet, mobile, and minimum-width menu interactions and reduced-motion behavior passed on the public site.
- A 1440x1000 production screenshot was visually reviewed and matched the final local hero, navigation, typography, and page gutters.

### Decisions

- Treat the confirmed GitHub Pages URL as the canonical public project URL recorded by this repository.
- Keep CU1 `launched-awaiting-context-projection`; merge and production verification satisfy the launch requirement but not the separate Context Projection completion rule.

### Pending

- Complete the required cross-repository Context Projection for the project registry, public site URL, project status, and repository URL, or explicitly approve deferral.
- After projection is completed or deferred with approval, reconcile the four state files and close CU1 if every completion rule is satisfied.

### Blockers and limitations

- No implementation or production blocker remains.
- Context Projection is the only remaining CU1 governance item.
- The Polk wordmark still traces to a high-resolution third-party logo archive rather than an official media kit; replace it if Polk supplies an approved official press asset.

## 2026-07-14 - CU1 proportional type-scale revision ready

### Completed

- Reduced every CSS `font-size` declaration to exactly 75% of its prior value at every screen and print breakpoint.
- Reduced every `.hero h1` font-size declaration to exactly 50% of its prior value, including desktop, tablet, mobile, and print rules.
- Kept layout spacing, page gutters, content order, assets, links, colors, focus states, and motion behavior unchanged.
- Cache-versioned the stylesheet as `styles.css?v=20260714-5`.

### Verification

- Playwright 1.61.1 Chromium passed at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720 with zero overflow, out-of-bounds elements, broken images, failed requests, console warnings, or console errors.
- At 1440px, computed body/project/section/company/hero sizes are 15px, 16.5px, 43.5px, 25.5px, and 56px respectively, exactly matching the requested ratios.
- At 1024px, computed body/project/section/company/hero sizes are 13.5px, 15px, 37.5px, 22.5px, and 48px respectively.
- Desktop and mobile screenshots were visually reviewed with intact hierarchy, stable controls, and no overlap.
- Mobile menu open, Escape-close, and focus restoration behavior passed at 768px, 375px, and 320px.
- The toolkit heading remains contained and unbroken internally at every viewport.
- `node scripts/verify-content.mjs`, HTML validation, JavaScript syntax checks, reduced-motion emulation, and `git diff --check` pass.
- GitHub Pages project-prefix simulation returned HTTP 200 for the page, `styles.css?v=20260714-5`, and script.
- The revised print output is a six-page Letter PDF 1.4; all six rendered pages were visually inspected with no clipping, overlap, or broken glyphs.

### Decisions

- Interpret `Keanan Wilson` at the top as the large hero H1; the smaller sticky-header brand follows the global 25% reduction.
- Preserve spacing exactly because Keanan requested text-size changes, not a layout-density change.
- Keep CU1 open; this visual revision does not resolve Context Projection.

### Pending

- Merge and deploy the verified proportional type-scale revision.
- Re-run five-viewport assertions against the public URL after GitHub Pages rebuilds.
- Return Context Projection to the exact next action after production verification.

### Blockers and limitations

- No implementation blocker remains.
- The public URL still serves the prior scale until this revision is merged and Pages rebuilds.

## 2026-07-14 - CU1 desktop scale QA ready for review

### Completed

- Rebalanced the desktop layout after review feedback that the page read too small, without changing authoritative resume content or the established mobile composition.
- Added a 1440px presentation tier with a 1280px content shell, 18px body copy, 100px hero name, 48px section headings, and 29px company and project headings.
- Added a moderate 1024px tier with 17px body copy and 44px section headings while keeping tablet and mobile copy at 16px.
- Stacked the Toolkit and Skills headings above their desktop grids so the enlarged headings remain intact and do not force internal word breaks.
- Versioned the relative stylesheet URL to `styles.css?v=20260714-3` so a running local or GitHub Pages preview cannot silently retain the earlier small-scale CSS.

### Verification

- In-app Playwright passed at 1440x1000, 1024x900, 768x1024, 375x812, and 320x720 with zero horizontal overflow or out-of-bounds elements and no console warnings or errors.
- At 1440px, computed typography measured 18px body copy, 100px hero type, 48px section headings, and 29px company headings; at 1024px, body copy measured 17px and section headings 44px.
- Playwright 1.61.1 CLI screenshots of the desktop hero, experience, and toolkit at 1440x1000 plus tablet Featured Projects and the mobile toolkit were visually reviewed without clipping, overlap, or copy collision.
- The toolkit heading remains one line at 1440px and 1024px. At 375px and 320px it wraps only between `PROJECT‑MANAGEMENT` and `TOOLKIT`, with no internal word breaks or horizontal overflow.
- The mobile menu opens, reports `aria-expanded=true`, closes on Escape, restores focus to its control, and produces no browser console output.
- All local project images loaded at their recorded intrinsic dimensions; no PDF links or download controls are present; external new-tab links retain `noopener noreferrer`.
- `node scripts/verify-content.mjs` still passes for 114 authoritative fragments and 16 links; HTML validation, JavaScript syntax checks, JSON validation, and `git diff --check` pass.
- The `/keanan-wilson-resume/` project-path simulation returned HTTP 200 for the cache-versioned stylesheet, script, project assets, and retained PDF.
- All eight rendered Letter print pages were visually inspected; headings and evidence remain present with no clipping or collisions.

### Decisions

- Increase scale only at desktop breakpoints; preserve the approved tablet and mobile rhythm and content order.
- Keep the enlarged Toolkit and Skills headings as full-width section labels above their grids for stable whole-word rendering.
- Keep CU1 `ready-for-review`; this QA revision does not close, merge, launch, or project the completion unit.

### Pending

- Keanan reviews the enlarged desktop experience in the open pull request; do not merge it as part of this handoff.
- After review and merge, verify the live GitHub Pages URL and reconcile the state files on `main`.
- Complete or explicitly defer Context Projection after the final public URL and merged status are known.

### Blockers and limitations

- No implementation blocker remains.
- The Polk wordmark still traces to a high-resolution third-party logo archive rather than an official media kit; replace it if Polk supplies an approved official press asset.
- The feature branch is not merged and GitHub Pages is not launched, so production verification and Context Projection remain pending.
