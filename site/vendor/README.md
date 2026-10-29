# Vendored kit assets

This directory holds the **built** substrates this site ships, vendored from
the private [protect-auto-ui-kit] repo so the public repository builds and
deploys with zero access to it (PRD A-4 — vendoring, not submodule/npm).

**Never edit files here by hand.** Re-vendor instead (commands below).

[protect-auto-ui-kit]: https://github.com/salacoste/protect-auto-ui-kit

## What's here

| File | Origin in the kit | What it is |
|---|---|---|
| `pillkit-tokens/tokens.css` | `packages/tokens/src/tokens.css` | Generated token layers: light on `:root`, dark overrides on `[data-theme="dark"]`. Imported once, document-level — never inside a shadow root. |
| `pillkit-components/tk-components.js` | built from `packages/components/src/site-bundle.ts` | Single minified ES module: the 12-element subset below + Lit 3, no external imports. Loaded as `<script type="module">`. |
| `LICENSE` | kit root `LICENSE` | MIT — attribution for everything in this directory. |

Component subset (PRD addendum §E — the components the 6 pages use):
`tk-article-card`, `tk-badge`, `tk-button`, `tk-data-table`, `tk-feature-card`,
`tk-footer`, `tk-link`, `tk-navbar`, `tk-promo-card`, `tk-service-card`,
`tk-stepper`, `tk-tabs`.

## Re-vendor procedure

Run in a checkout of the private kit repo:

```sh
# 1. tokens — copy the generated layer (do NOT regenerate unless DESIGN.md changed)
cp packages/tokens/src/tokens.css <site-repo>/site/vendor/pillkit-tokens/tokens.css

# 2. components — rebuild the single-file bundle (lit bundled in, minified)
node_modules/.bin/vite build -c vite.site.config.ts
cp dist-site/tk-components.js <site-repo>/site/vendor/pillkit-components/tk-components.js

# 3. license — refresh if the kit's copyright year/holder changed
cp LICENSE <site-repo>/site/vendor/LICENSE
```

`packages/components/src/site-bundle.ts` and `vite.site.config.ts` in the kit
repo are the vendor tooling for step 2 — commit them there if not already.

## Exclusion list (license hygiene — PRD FR-1.4, addendum §D)

The kit contains non-redistributable assets that must **never** be copied
into this directory or anywhere else in the public repo:

- `packages/docs/public/brand/` — Protect Auto brand logos/imagery (all of it).
- `packages/tokens/fonts/` — Daytona fonts (personal licenses; renamed
  Neue Haas Unica W1G + Pragmatica). The site uses the Inter system stack.
- `transitions/t-*.css` — the transitions.dev collection (no redistribution).
  Any transition effect on the site is re-implemented in `site/assets/site.css`
  from `--tk-motion-*` tokens with `prefers-reduced-motion` preserved.

After every re-vendor, verify:

```sh
grep -riE "daytona|brand/|t-[0-9]+-" site/vendor/ && echo "VIOLATION — see exclusion list" || echo "clean"
```

## Provenance

| Asset | Kit commit |
|---|---|
| Current vendor pass | `88870fb` (2026-09-27) + uncommitted `site-bundle.ts` / `vite.site.config.ts` vendor tooling |

Update this row on every re-vendor.
