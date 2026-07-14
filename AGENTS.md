# Keanan Wilson Resume - Agent Guide

This repository follows the LafaYeti Harness Engineering operating standard, adapted for a small static website.

## Mission

Build and maintain a premium, responsive personal resume and project-portfolio landing page for Keanan Wilson, published through GitHub Pages.

## Authority order

Resolve conflicts in this order:

1. verified implementation on `main`;
2. `source/resume-content.md`, the approved downloadable resume, and project-native state files;
3. this repository's `AGENTS.md` and approved Completion Unit;
4. the shared LafaYeti Harness Engineering standard;
5. tool-specific adapters;
6. central memory and chat history.

Lower-authority sources may summarize higher-authority sources but may not override them.

## Startup workflow

Before editing:

1. Read `AGENTS.md`, `README.md`, `docs/completion-unit.json`, `docs/context_current_state.md`, `docs/handoff_log.md`, and `docs/next_task.md`.
2. Confirm the single approved Completion Unit, scope, exclusions, Definition of Done, and Context Projection decision.
3. Inspect the complete repository and recent commits.
4. Run the available baseline verification commands.
5. Do not select or add a different roadmap item.

## Content integrity

- `source/resume-content.md` is the approved textual source of truth.
- Preserve official company names, job titles, dates, metrics, links, and project claims exactly.
- Do not rewrite, shorten, expand, reorganize, or omit approved resume content unless Keanan explicitly approves that specific content change.
- Visual hierarchy may reorganize presentation for the landing page, but the underlying facts and wording must remain intact.
- Do not invent outcomes, client endorsements, project screenshots, technologies, metrics, or responsibilities.
- The Skin Element work must be labeled as an unreleased archived Shopify rebuild. Do not imply ownership of the current public live site.

## Technical constraints

- Use semantic HTML, modern CSS, and minimal vanilla JavaScript.
- Do not add React, Next.js, Vue, Astro, Tailwind, npm dependencies, a bundler, or a build system without explicit approval.
- The site must work from a GitHub Pages project subdirectory.
- Use relative repository paths for local assets.
- No backend, database, contact-form service, analytics, cookies, or paid service without explicit approval.
- No image generation.
- Prefer local assets and system fonts. External font loading requires approval.

## Design direction

- Premium, contemporary, highly legible, and professionally restrained.
- Appropriate for web project management, ecommerce, digital platforms, operations, and AI systems.
- Strong information hierarchy and evidence-led project presentation.
- Avoid generic resume templates, excessive cards, novelty animations, loud gradients, clutter, and decorative effects that reduce credibility.
- Use motion only when it improves orientation; respect `prefers-reduced-motion`.

## Required v1 sections

1. Hero and professional positioning
2. Resume summary
3. Core skills and project-management toolkit
4. Professional experience
5. Featured project evidence drawn only from approved content and supplied assets
6. Education
7. Contact and downloadable resume PDF

## Public-repository safety

- Do not commit secrets, access tokens, private client files, supplier spreadsheets, Shopify exports, private dashboards, confidential contracts, or unsanitized backend screenshots.
- Treat every committed asset as publicly accessible.
- Use only sanitized project imagery approved for public portfolio use.

## Working rules

- One approved Completion Unit at a time.
- Inspect before editing.
- Keep changes focused and reversible.
- Do not silently expand scope.
- Do not weaken verification to make work pass.
- Escalate only genuine content, privacy, legal, cost, ownership, architecture, or public-brand decisions.

## Verification expectations

At minimum, before requesting review:

```bash
git diff --check
python3 -m http.server 4173
```

Also verify:

- desktop at 1440px;
- tablet at 768px;
- mobile at 375px;
- no horizontal overflow;
- no console errors;
- all internal navigation and external links;
- downloadable PDF path;
- keyboard navigation and visible focus states;
- semantic headings and landmark structure;
- image alt text;
- color contrast;
- reduced-motion behavior;
- GitHub Pages project-path compatibility;
- spelling and exact content preservation.

Use Playwright CLI when available. Add only lean, repository-native automated checks that do not introduce a framework or unnecessary dependency.

## Codex prompt format

Begin Codex tasks with:

`Repository: LafaYeti-dev/keanan-wilson-resume`

## Completion rule

Do not claim the Completion Unit is closed from chat alone. Closure requires:

- approved scope implemented;
- verification evidence recorded;
- a reviewed PR merged to `main`;
- `docs/completion-unit.json`, `docs/context_current_state.md`, `docs/handoff_log.md`, and `docs/next_task.md` updated to match the merge;
- Context Projection completed or explicitly deferred with approval.

## End of session

Before ending meaningful work:

1. Re-run verification.
2. Update state and handoff files.
3. Record changed files, checks, blockers, and decisions.
4. State the exact next action.
5. Leave the branch clean and restartable.
