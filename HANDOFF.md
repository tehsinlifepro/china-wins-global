# HANDOFF — China Wins Global website (Astro)

**Read this first.** Everything below is verified against the filesystem on 2026-07-20, not guesses.
You are taking over a freshly scaffolded bilingual Astro site. It is a **skeleton**: structure only, no styling, no real copy, never deployed, not yet a git repo.

---

## 1. Project facts

- **Root:** `/Users/apple/Documents/Kimi/Workspaces/China Wins Global/site` (path contains a space — quote it)
- **Stack:** Astro **7.1.1** static site, TypeScript strict (`tsconfig.json` extends `astro/tsconfigs/strict`), ESM (`"type": "module"`)
- **Integrations:** `@astrojs/mdx` 7.0.3, `@astrojs/sitemap` 3.7.3 (with i18n locales wired)
- **Node:** `engines: >=22.12.0` (present on this machine — a build succeeded)
- **i18n model:** English at root, Chinese under `/zh/`. `astro.config.mjs` → `i18n: { defaultLocale: 'en', locales: ['en','zh'], routing: { prefixDefaultLocale: false } }`
- **Placeholder domain:** `https://EXAMPLE.com` in exactly 3 places — `astro.config.mjs` (`site`), `src/config.ts` (`SITE.domain`), `public/robots.txt` (Sitemap line). Replace all three when the real domain is decided.
- **No git, no deploy config.** `git init` has never been run here.

## 2. Status

**Done & verified:**

- Full file tree exists (layouts, components, 18 EN pages + 18 ZH twins, 2×2 dynamic routes, 3 content collections with 6 example entries, i18n helpers, central config)
- `npm run build` succeeded once: `dist/` contains every route in both languages, `sitemap-index.xml` + `sitemap-0.xml`, `robots.txt`, root `404.html`
- `astro.config.mjs`, `src/content.config.ts`, `package.json`, all layouts/components/utils read and confirmed sane (details below)

**NOT verified (do these first):**

1. `npm run dev` was never smoke-tested (interrupted before route checks). Boot it, click `/`, `/zh/`, one dynamic route in each language.
2. `npx astro check` never run — build compiles but doesn't surface all strict-TS diagnostics.
3. A stray dev server from the interrupted session may exist: `lsof -ti:4321 | xargs kill` if needed.
4. `dist/` is stale the moment you edit anything — rebuild before trusting it.

## 3. Architecture map

```
src/
  config.ts               SITE object: domain, brand, contact, mailerlite, analytics (all placeholders)
  content.config.ts       blog / courses / caseStudies collections (Astro 7 glob loaders — see gotchas)
  i18n/
    ui.ts                 string dictionary { en: {...}, zh: {...} } — nav/footer/lang-switch labels
    utils.ts              getLangFromUrl(url), t(lang), getAlternatePath(url)
  layouts/
    BaseLayout.astro      <html lang> + Head + Nav + <main><slot/> + Footer. Props: title, description?, lang?
    FunnelLayout.astro    BaseLayout + <section> wrapper (all marketing pages use this)
    ArticleLayout.astro   BaseLayout + <article> with h1 + optional pubDate (blog/courses use this)
  components/
    Head.astro            charset/viewport/title/description/canonical + hreflang en/zh/x-default
    Nav.astro             10 section links from ui.ts keys, lang-prefixed hrefs, includes LangSwitcher
    Footer.astro          5 legal links + copyright (uses SITE.brand)
    LangSwitcher.astro    single <a> to getAlternatePath(Astro.url)
  pages/                  every page is a placeholder: layout + <h1>NAME</h1>
    index, sourcing-agencies, freight-forwarders, software, factories, resources,
    about, case-studies, contact, thank-you, 404
    privacy, terms, cookies, disclaimer, refund-policy
    learn/index.astro     placeholder with HARDCODED example links (not wired to collections yet)
    learn/[...slug].astro           blog EN dynamic route
    learn/courses/[...slug].astro   courses EN dynamic route
    zh/                   twin of EVERY page above, incl. zh/learn/[...slug].astro, zh/learn/courses/[...slug].astro, zh/404.astro
  content/
    blog/en|zh/*.md           example: hello-world.md (translationKey: hello-world)
    courses/en|zh/*.md        example: getting-started.md (access: free)
    caseStudies/en|zh/*.md    example: example-client.md (no dynamic route — index page only)
public/robots.txt
```

**Collection schemas** (`src/content.config.ts`): all include `title`, `lang: 'en'|'zh'`, `translationKey`, `draft` (default false). blog adds `description?`, `pubDate`. courses adds `access: 'free'|'paid'`, `order?`. caseStudies adds `client?`, `industry?`, `pubDate?`.

**Dynamic route pattern** (e.g. EN blog): `getCollection('blog', ({data}) => data.lang === 'en' && !data.draft)`, then `params: { slug: post.id.replace(/^en\//, '') }` — entry ids carry the lang-folder prefix (`en/hello-world`), the route strips it. ZH routes mirror with `zh`. Render via `render(post)` → `<Content />` inside ArticleLayout.

## 4. Gotchas (learned, not guessed)

1. **`src/content.config.ts`, NOT `src/content/config.ts`.** Astro 7 only supports the content-layer API at the project-root location with `glob` loaders. The legacy path doesn't exist here — don't create it.
2. **Glob patterns are `'**/*.md'` only.** Dropping an `.mdx` file into a collection folder will be silently ignored. Change patterns to `'**/*.{md,mdx}'` if MDX entries are wanted (the MDX integration is installed but currently unused).
3. **Two sources of truth for alternate-language paths:** `Head.astro` derives hreflang URLs with its own inline logic; `LangSwitcher` uses `getAlternatePath` from `i18n/utils.ts`. They agree today — if you change one, change both (or refactor Head to use the util).
4. **`getLangFromUrl` only matches the `/zh/` prefix.** Bare `/zh` (no trailing slash) is read as English. Harmless in practice (Astro normalizes to trailing slash), but don't rely on it for bare-`/zh` logic.
5. **LangSwitcher/hreflang point at the twin URL even when no twin exists** (e.g. a blog post published only in EN). No 404 handling — acceptable for a skeleton, needs a policy before launch (hide switcher when `translationKey` pair is missing).
6. **Adding a page = 3 touch points:** EN page in `src/pages/`, ZH twin in `src/pages/zh/`, and any new nav/footer label keys in BOTH languages in `src/i18n/ui.ts` (keys are typed via `UiKey` — TS will complain if a language is missing one).
7. **Adding a content entry:** put it under `<collection>/<lang>/`, set `lang` to match the folder, and give the EN/ZH pair the same `translationKey`. `draft: true` excludes it from `getStaticPaths`.
8. **GitHub Pages base-path trap:** if this deploys to a project page (`user.github.io/repo/`), Astro needs `base: '/repo'` in `astro.config.mjs`, and the raw-pathname i18n helpers (`getLangFromUrl`, `getAlternatePath`, Head hreflang) will then be wrong unless they account for the base. Cleanest options: custom domain, or a `user.github.io`-type repo. Decide BEFORE deploying.
9. **`/zh/404/` is built but GitHub Pages only auto-serves the root `/404.html`** for unknown URLs. The ZH 404 is cosmetic unless you add hosting-level rules.
10. **Conventions from the machine:** network is flaky — retry SSL failures 2–3× before believing them. Never leave a dev server running when done (no `nohup`, no trailing `&`).

## 5. Commands

```bash
cd "/Users/apple/Documents/Kimi/Workspaces/China Wins Global/site"
npm run dev        # dev server, default :4321
npm run build      # static output → dist/ (includes sitemap)
npm run preview    # serve dist/ locally
npx astro check    # strict TS diagnostics (not yet run)
```

## 6. Business context (the "why")

This site is the future full website for **China Wins Global** — a LinkedIn lead-generation service ("Sourcing Pipeline Engine") helping Chinese sourcing agencies / freight forwarders / factories win Western Amazon-seller clients. Bilingual EN/ZH. Primary conversion: free-audit email capture (MailerLite). Secondary: book a call / WeChat.

**Existing live asset this site will eventually replace/consolidate:**

- Old static landing: `/Users/apple/Documents/kimi/workspace/sourcing-pipeline-landing` (separate project, plain HTML/GSAP, repo `tehsinlifepro/sourcing-pipeline-landing` on GitHub Pages, live at `https://tehsinlifepro.github.io/sourcing-pipeline-landing/`). Has its own HANDOFF.md.
- **Real MailerLite values (verified working, 2 active subscribers):** POST endpoint `https://assets.mailerlite.com/jsonp/2518242/forms/193374527848187512/subscribe` with fields `fields[email]`, `ml-submit=1`, `anticsrf=true` via fetch + URLSearchParams (no redirect). Port these into `src/config.ts`.
- **WeChat QR image:** `assets/wechat-qr.jpg` in the old project (original: `/Users/apple/Downloads/Wechat.jpg`).
- **Brand palette:** cream `#F7F3EC`, ink `#1A1512`, muted `#6B5F55`, red `#C13B2A`, red-soft `#E39B8B`.
- Old Systeme page (`chinawinsglobal.com/12b42762`) still handles pricing CTAs + call booking; slated for retirement.

**Open scope decisions the owner hasn't answered yet** (ask before building beyond the skeleton):

1. Domain — custom domain vs GitHub project page (see gotcha #8)
2. Booking — stay on Systeme or move on-site (Calendly/Cal.com)
3. Pricing CTAs — Systeme checkout vs native on-site flow
4. Scope ceiling — pure SPE funnel vs full company site (the sitemap here already assumes full site: 4 audience pages, resources, learn, case studies)

## 7. Suggested first moves

1. Kill any stray server (`lsof -ti:4321`), `npm run dev`, click every route in both languages; run `npx astro check`.
2. Decide domain + base path (gotcha #8), then `git init`, first commit, create GitHub repo, add Pages deploy (GitHub Actions `withastro/action` is the standard path).
3. Replace `EXAMPLE.com` placeholders (3 spots).
4. Wire `learn/index.astro` to the collections instead of hardcoded links.
5. Only then: design system + real copy, starting with the home page funnel (port the proven copy/MailerLite form from the old landing).
