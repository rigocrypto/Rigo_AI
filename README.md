# RigoCrypto — Stage 1

Founder portfolio and RealSona AI investor gateway. Next.js App Router, React, strict TypeScript and Tailwind CSS. This repository is the canonical source; no legacy Bolt configuration was copied.

## Local development

Use Node.js 22 or newer and npm. On Windows PowerShell, use npm.cmd if local execution policy blocks npm.ps1.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```sh
npm run typecheck
npm run lint
npm run build
npm audit
npm start
```

Typecheck first generates Next route types so it also works on a fresh clone. ESLint runs separately: Next.js 16 does not run ESLint during builds. Do not skip either check. No type or lint error suppression is configured.

## Public URL

Every absolute URL derives from `src/data/site.ts`:

```ts
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
```

No .env file is required. When a public domain is confirmed, set NEXT_PUBLIC_SITE_URL to its HTTPS origin in the build environment and rebuild. Do not include a path or credentials. Local development is noindex and robots disallows crawling. Public indexing is enabled only for a non-loopback HTTPS URL. This foundation does not claim or deploy a production domain.

## Content and architecture

- src/data: all project facts, venture references, founder copy, navigation, SEO copy and interests.
- src/types: project status union, project/venture models and site route types.
- src/components: shared layout, accessible UI, sections, project/venture cards and contact form.
- src/lib: class utilities, metadata factory and typed local contact mock.
- src/styles/tokens.css: semantic design tokens and type scale.
- src/app: eight routes, metadata, sitemap, robots and generated Open Graph artwork.

Routes: /, /realsona, /ventures, /portfolio, /venezuela, /about, /invest, /contact.

Project statuses are supplied descriptions, not independently verified business traction. Architecture is conceptual and capabilities are planned. Portfolio entries awaiting evidence say so. No statistics, customer counts, funding, pricing or endorsements are invented.

## Contact demonstration

The form uses browser validation and a typed submitContactForm mock. It sends no network request and stores no data. The UI labels this before and after submission. Query-string interest links preselect only values from the approved interest list. A real delivery service, consent policy and abuse protection belong to a future stage.

## Accessibility and motion

Semantic landmarks, skip link, visible focus, native labeled form controls and accessible disclosure navigation. Escape closes mobile navigation and returns focus. Framer Motion runs a short, once-only reveal with reduced-motion support; content is visible before hydration. CSS hover movement also respects reduced motion. No third-party fonts or scripts are fetched.

## Scope

No database, authentication, SDK integrations, analytics, GitHub API, financial transactions or live messaging. Stage 1B visual migration has not been performed. Existing LICENSE is preserved. Review changes before staging, committing or publishing.
