---
name: compose-from-patterns
description: >-
  Maps work onto danilger/patterns catalog names and drafts a plan with
  @see links to pattern .md docs (for human readers) and explicit @ad-hoc gaps.
  Use ONLY when creating or revising an action/implementation plan (Cursor Plan
  mode, opsx-propose, opsx-explore, or explicit /patterns-plan). Do NOT use for
  ordinary coding, bugfixes, or Q&A. Do NOT open pattern demo .js files.
disable-model-invocation: true
---

# Compose from patterns

Draft an **implementation plan** tagged with names from [danilger/patterns](https://github.com/danilger/patterns) and `.md` links for humans. Do not write product code in this skill.

## Catalog role

You already know the patterns. This repo is not a textbook and not a source of demos to copy.

| Agent needs | Agent does not need |
|-------------|---------------------|
| [README](https://github.com/danilger/patterns/blob/main/README.md) — name and path list | `*.js` / `*-class.js` / `*-functional.js` (human demos) |
| URLs like `…/<slug>/<slug>.md` for `@see` in plan and code | Reading `.md` “to recall the pattern” |
| [annotation.md](https://github.com/danilger/patterns/blob/main/consume/annotation.md) — mark format | Cloning or walking `gof/`, `frontend/`, `backend/` |

Open **only the README** (index) and, if needed, `consume/annotation.md`. Explanations (`.md`) and demos (`.js`) are for humans via the annotation link.

## When to apply

Only when the user creates or revises a plan:

- Cursor Plan mode
- opsx-propose / opsx-explore
- explicit invoke (`/patterns-plan`, “follow compose-from-patterns”)

Do not apply for ordinary coding, bugfixes, plan-less refactors, or Q&A.

## Sources (minimal set)

1. Catalog index: https://github.com/danilger/patterns/blob/main/README.md
2. Annotation format: https://github.com/danilger/patterns/blob/main/consume/annotation.md
3. Link template: `https://github.com/danilger/patterns/blob/main/<area>/…/<slug>/<slug>.md`

Take the `.md` path from README tables (Files column → `.md`). Never link to `.js`.

## Procedure

1. Briefly capture the goal and task boundaries.
2. From the README, pick an area: `gof/` | `frontend/react|rendering|performance` | `backend/nest`.
3. For **each major plan step**:
   - pick 1+ pattern names from the README tables (from your knowledge, by task meaning);
   - write the name + URL to the matching `.md` from the README into the step;
   - if nothing fits — `@ad-hoc` + `@why` (one phrase).
4. Most steps come from the catalog; a minority are explicit `@ad-hoc`. Don't count line percentages.
5. Forbidden: a new abstraction layer only for a mark; GoF on trivial glue; opening pattern demo files; copying code from the patterns library into the product.
6. Don't implement code in this pass — plan only (unless the user asks otherwise after approving the plan).

## Plan output template

```markdown
## Plan

| Step | Pattern / exception | Link (for @see in code) |
|------|---------------------|-------------------------|
| 1. … | Repository | https://github.com/danilger/patterns/blob/main/backend/nest/repository/repository.md |
| 2. … | @ad-hoc: … | @why: … |

## Notes
- …
```

Or a numbered list in the same shape: step → pattern URL | `@ad-hoc` + why.

## After the plan is approved

Reminder for the implementer (not part of this skill): put marks in code per `consume/annotation.md` matching the plan table. Humans follow the links; the agent does not “pull” patterns from them.
