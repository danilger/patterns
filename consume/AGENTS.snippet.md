<!-- Paste this block into the product repository AGENTS.md -->

## Patterns (danilger/patterns)

Catalog index: https://github.com/danilger/patterns/blob/main/README.md  
Agent pack: https://github.com/danilger/patterns/tree/main/consume  
Annotations: https://github.com/danilger/patterns/blob/main/consume/annotation.md

### Why the catalog exists for agents

The [danilger/patterns](https://github.com/danilger/patterns) repo is a **human reference**. Demos (`.js`) and explanation texts (`.md`) help a person review annotated code quickly.

The agent **already knows** the patterns. From the catalog it only needs:

1. **Name list** (what exists) — from the [README](https://github.com/danilger/patterns/blob/main/README.md).
2. **`.md` URLs** — so code / PRs can put `@see` pointing at the human-facing description.

Do not clone the library, do not open `*-class.js` / `*-functional.js` / other demos, and do not relearn patterns from this repo.

### Planning

Before creating or revising an **action plan** (Cursor Plan mode, opsx-propose, opsx-explore, `/patterns-plan`), read and follow the skill:

- locally: `.cursor/skills/compose-from-patterns/SKILL.md` (or `~/.cursor/skills/compose-from-patterns/SKILL.md`)
- otherwise: https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md

Do **not** use the skill for ordinary coding, bugfixes, or Q&A.

### Implementation

- Follow the agreed plan steps; module boundaries follow the named patterns.
- In code and PRs, mark blocks per [annotation.md](https://github.com/danilger/patterns/blob/main/consume/annotation.md): `@pattern` + `@see` on `.md`, or `@ad-hoc` + `@why`.
- The `@see` link is for the **code reader**, not for the agent to relearn.
- Don't pick new patterns outside the plan: update the plan first, then the code.
- Don't invent abstractions “just for a catalog link”; trivial glue needs neither a pattern nor a mark.
