# AGENTS.md — repository layout rules

This repo holds a **pattern catalog** plus an **agent pack** (rules / skills / annotations). Agents use [README.md](./README.md) as the index and this file as layout rules when adding or editing content.

Human catalog and links: [README.md](./README.md)  
GitHub root: https://github.com/danilger/patterns

---

## Top-level layout

```text
catalog/     # patterns only (area / subarea / slug)
agent/       # product pack: rules, skills, annotation
AGENTS.md    # THIS file — how to maintain the repo
README.md    # index: Patterns | Rules | Skills
```

| Path | What belongs here |
|------|-------------------|
| [catalog/](./catalog/) | Pattern explanations + demos |
| [agent/rules/](./agent/rules/) | Short always-on policies by area (`catalog/`, `js-ts/`, `workflow/`) for product `AGENTS.md` |
| [agent/skills/](./agent/skills/) | Procedures (`SKILL.md`) for Cursor / Multica |
| [agent/annotation.md](./agent/annotation.md) | `@pattern` / `@see` / `@ad-hoc` mark format |
| [agent/README.md](./agent/README.md) | How to wire the pack into a product |

Do **not** put product rules or skills under `catalog/`. Do **not** put pattern demos under `agent/`.

For **plans and code in other projects**, use the [agent/](./agent/) pack. From the catalog, an agent takes only the name list and `.md` links; it does not read demos.

---

## Goals

- Give **humans** explanations (`.md`) and short demos (`.js`) under `catalog/` to quickly understand annotated code.
- Give **agents** a single name index + stable `.md` URLs for annotations in other repos (not for learning and not for copying demos).
- Ship reusable **rules** and **skills** under `agent/` for product repos.
- Store new patterns in **one layout**, without loose files at the category root.

---

## Pattern directory hierarchy (`catalog/`)

```text
catalog/<area>/<subarea>/<pattern-slug>/
  <pattern-slug>.md              # required: meaning / explanation
  <pattern-slug>.js              # demo (frontend / backend)
  # GoF — two demo variants:
  <pattern-slug>-class.js        # OOP / classes
  <pattern-slug>-functional.js   # functions, closures, plain objects
```

| Level | Examples | Purpose |
|-------|----------|---------|
| Area | `catalog/gof/`, `catalog/frontend/`, `catalog/backend/` | Large domain |
| Subarea | `creational/`, `react/`, `nest/` | Category within the domain |
| Pattern folder | `compound-components/` | One pattern = one folder |
| Files | `compound-components.js`, `compound-components.md` | File base name = folder name (slug) |
| GoF demos | `strategy-class.js`, `strategy-functional.js` | Paradigm suffix in the file name |

### Areas (don't invent new ones without need)

| Area | Subareas |
|------|----------|
| `catalog/gof/` | `creational/`, `structural/`, `behavioral/` |
| `catalog/frontend/` | `react/`, `rendering/`, `performance/` |
| `catalog/backend/` | `nest/` |

Create a new subarea only if the pattern clearly fits none of the existing ones.

---

## Naming (patterns)

- **Slug:** `kebab-case`, Latin letters, no spaces or parentheses: `compound-components`, `factory-method`, `list-virtualization`.
- **Folder** name and **file** base name match: `…/compound-components/compound-components.{js,md}`.
- Don't put multiple patterns in one folder.
- Don't leave bare `.js` / `.md` files directly in a subarea for **new** patterns.

### Canonical layout

```text
catalog/frontend/react/compound-components/
  compound-components.js
  compound-components.md

catalog/gof/behavioral/strategy/
  strategy-class.js
  strategy-functional.js
  strategy.md
```

Link for code / PR (prefer `.md`):

```text
https://github.com/danilger/patterns/blob/main/catalog/frontend/react/compound-components/compound-components.md
```

---

## Rules and skills (`agent/`)

### Add a rule

1. Pick an area under `agent/rules/` (`catalog/`, `js-ts/`, `workflow/`) or add a new area folder if none fits.
2. Create `agent/rules/<area>/<slug>.md` (short policy; no long CLI how-to). Do not leave bare rule files next to `agent/rules/README.md`.
3. Add a row to [agent/rules/README.md](./agent/rules/README.md).
4. Mention it from [agent/README.md](./agent/README.md) / root [README.md](./README.md) if it is a primary pack item.

### Add a skill

1. Create `agent/skills/<slug>/SKILL.md` (YAML frontmatter + body).
2. Link it from [agent/README.md](./agent/README.md) and root README Skills table.
3. If a short always-on policy is needed, put that in `agent/rules/<area>/` and point at the skill for how-to.

---

## File contents (patterns)

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

1. Pick area and subarea from the table above (under `catalog/`).
2. Create folder `catalog/<area>/<subarea>/<slug>/`.
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

## Don't

- Don't create a pattern without a folder (for new material).
- Don't name the folder differently from the base slug of files inside.
- Don't ship only `.js` without `.md` for new patterns.
- Don't duplicate one pattern in two areas — pick a primary; the `.md` may briefly mention another area.
- Don't blow demos into mini-apps: the demo illustrates the idea; explanation lives in `.md`.
- Don't mix `catalog/` and `agent/` concerns in one folder.
