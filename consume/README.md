# Consume — artifacts for product projects

Pack for agents **outside** this library: a short rule + planning skill + annotation format.

| Artifact | File | Where in the product |
|----------|------|----------------------|
| Rule | [AGENTS.snippet.md](./AGENTS.snippet.md) | Paste into `AGENTS.md` (or `.cursor/rules`) |
| Skill | [skills/compose-from-patterns/](./skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` or `~/.cursor/skills/compose-from-patterns/` |
| Annotations | [annotation.md](./annotation.md) | Linked from snippet / skill; sample for code |

## GitHub (no local clone)

- Pack: https://github.com/danilger/patterns/tree/main/consume
- Rule: https://github.com/danilger/patterns/blob/main/consume/AGENTS.snippet.md
- Skill: https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md
- Annotations: https://github.com/danilger/patterns/blob/main/consume/annotation.md
- Catalog (name index): https://github.com/danilger/patterns/blob/main/README.md

## Role split

| Audience | What they take from the library |
|----------|----------------------------------|
| **Agent** | Only the pattern list from README + `.md` URLs for `@see` in plans and code |
| **Human** | `.md` explanations and `.js` demos — to quickly understand annotated code |

The agent does **not** walk demos or relearn from this repo: it already knows the patterns. Consume exists for a shared name catalog and stable annotation links.

## Important

- Skill with `disable-model-invocation: true` — **not** for every request. Only Plan mode / opsx-propose / opsx-explore / explicit invoke.
- Root [../AGENTS.md](../AGENTS.md) — rules for **maintaining this catalog**, not the same as `AGENTS.snippet.md`.
