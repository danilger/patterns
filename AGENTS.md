# AGENTS.md — pattern library layout rules

This repo is a **patterns catalog by area**. Agents use `README.md` as the index and this file as layout rules when adding or editing patterns.

Human catalog and links: [README.md](./README.md)  
GitHub root: https://github.com/danilger/patterns

---

## Goals

- Give **humans** explanations (`.md`) and short demos (`.js`) to quickly understand annotated code.
- Give **agents** a single name index + stable `.md` URLs for annotations in other repos (not for learning and not for copying demos).
- In product projects, leave a link to the explanation file in this library from code / PRs.
- Store new patterns in **one layout**, without loose files at the category root.

For **plans and code in other projects**, use the [consume/](./consume/) pack (rule + planning skill). From the catalog, an agent takes only the list and links; it does not read demos. Do not mix consume with the catalog layout rules below.

---

## Directory hierarchy

```text
<area>/<subarea>/<pattern-slug>/
  <pattern-slug>.md              # required: meaning / explanation
  <pattern-slug>.js              # demo (frontend / backend)
  # GoF — two demo variants:
  <pattern-slug>-class.js        # OOP / classes
  <pattern-slug>-functional.js   # functions, closures, plain objects
```

| Level | Examples | Purpose |
|-------|----------|---------|
| Area | `gof/`, `frontend/`, `backend/` | Large domain |
| Subarea | `creational/`, `react/`, `nest/` | Category within the domain |
| Pattern folder | `compound-components/` | One pattern = one folder |
| Files | `compound-components.js`, `compound-components.md` | File base name = folder name (slug) |
| GoF demos | `strategy-class.js`, `strategy-functional.js` | Paradigm suffix in the file name |

### Areas (don't invent new ones without need)

| Area | Subareas |
|------|----------|
| `gof/` | `creational/`, `structural/`, `behavioral/` |
| `frontend/` | `react/`, `rendering/`, `performance/` |
| `backend/` | `nest/` |

Create a new subarea only if the pattern clearly fits none of the existing ones.

---

## Naming

- **Slug:** `kebab-case`, Latin letters, no spaces or parentheses: `compound-components`, `factory-method`, `list-virtualization`.
- **Folder** name and **file** base name match: `…/compound-components/compound-components.{js,md}`.
- Don't put multiple patterns in one folder.
- Don't leave bare `.js` / `.md` files directly in a subarea for **new** patterns.

### Canonical layout

```text
frontend/react/compound-components/
  compound-components.js
  compound-components.md

gof/behavioral/strategy/
  strategy-class.js
  strategy-functional.js
  strategy.md
```

Link for code / PR (prefer `.md`):

```text
https://github.com/danilger/patterns/blob/main/frontend/react/compound-components/compound-components.md
```

---

## File contents

### `<slug>.js` / `<slug>-class.js` / `<slug>-functional.js` (demo + metadata)

JSDoc header:

```js
/**
 * @pattern Pattern name (translation optional)
 * @area Frontend / React   // or @category Structural, etc.
 * @variant class           // or functional — for GoF pairs
 * @sources …
 *
 * @description
 * 1–4 sentences: what the pattern is.
 *
 * @when
 * - when to apply it
 */
```

Below that — a short, readable demo (minimal framework noise when possible).

For **GoF**, keep both variants when the idea maps well to functions (almost always in JS). One scenario — two paradigms; don't invent different storylines.

### `<slug>.md` (explanation)

- What the pattern means, why it exists, how it works.
- Tie-in to the neighboring `.js` demo.
- When to use / not use.
- Differences from neighboring patterns (brief).
- Language: English for agent-facing docs in this repo; pattern explanations may stay as authored unless asked otherwise.

For links from other repositories, **always** point at `.md` when it exists.

---

## Checklist: add a pattern

1. Pick area and subarea from the table above.
2. Create folder `<subarea>/<slug>/`.
3. Add `<slug>.md` and demos:
   - GoF: `<slug>-class.js` + `<slug>-functional.js` (where FP fits).
   - Others: `<slug>.js`.
4. Update the catalog in [README.md](./README.md) (row in the right table + current paths).
5. Don't commit secrets; don't change git config.

## Checklist: edit an existing one

1. Don't flatten files into the subarea — keep `.md` and demos inside the pattern folder.
2. On slug rename, update folder name, all files, and the README row.
3. After edits, don't leave duplicates at old paths.

---

## Migration (current state)

- Frontend / Backend: `<slug>/<slug>.js` + `<slug>.md`.
- GoF: `<slug>/<slug>-class.js` + `<slug>-functional.js` + `<slug>.md`.
- New patterns only inside a slug folder; don't add flat files in a subarea.

---

## Don't

- Don't create a pattern without a folder (for new material).
- Don't name the folder differently from the base slug of files inside.
- Don't ship only `.js` without `.md` for new patterns.
- Don't duplicate one pattern in two areas — pick a primary; the `.md` may briefly mention another area.
- Don't blow demos into mini-apps: the demo illustrates the idea; explanation lives in `.md`.
