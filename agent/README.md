# agent — pack for product projects

Artifacts for agents **outside** this library: rules, skills, and annotation format.

| Kind | Path | Where in the product |
|------|------|----------------------|
| **Rules** | [rules/](./rules/) | Paste / link from product `AGENTS.md` (or `.cursor/rules`) |
| **Skills** | [skills/](./skills/) | `.cursor/skills/<name>/` or Multica skill import |
| **Annotations** | [annotation.md](./annotation.md) | Follow when marking up code / PRs |

## GitHub (no local clone)

- Pack: https://github.com/danilger/patterns/tree/main/agent
- Rules: https://github.com/danilger/patterns/tree/main/agent/rules
- Patterns-catalog rule: https://github.com/danilger/patterns/blob/main/agent/rules/patterns-catalog.md
- Skill: https://github.com/danilger/patterns/blob/main/agent/skills/compose-from-patterns/SKILL.md
- Annotations: https://github.com/danilger/patterns/blob/main/agent/annotation.md
- Pattern index: https://github.com/danilger/patterns/blob/main/README.md

## Role split

| Audience | What they take from the library |
|----------|----------------------------------|
| **Agent** | Pattern **names** from README + `.md` URLs under `catalog/` for `@see`; product rules from `agent/rules/`; skills when needed |
| **Human** | `catalog/**/*.md` explanations and `.js` demos — to quickly understand annotated code |

The agent does **not** walk demos or relearn from `catalog/`: it already knows the patterns. This pack exists for shared conventions, a name catalog, and stable annotation links.

## Rules vs skills

| | **Rule** (`agent/rules/`) | **Skill** (`agent/skills/`) |
|--|---------------------------|-----------------------------|
| Purpose | Short always-on policy | Procedure / how-to |
| Wire-up | Product `AGENTS.md` | Cursor skills / Multica import |
| Length | Keep short | Can include CLI examples |

## Important

- `compose-from-patterns` has `disable-model-invocation: true` — **only** Plan mode / opsx-propose / opsx-explore / explicit invoke.
- Root [../AGENTS.md](../AGENTS.md) — rules for **maintaining this repository**, not the same as product rules in `agent/rules/`.
- Pattern files live only under [../catalog/](../catalog/).
