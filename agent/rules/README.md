# agent/rules — reusable agent rules

Ready-made rule blocks to copy into a product and wire from that project's
`AGENTS.md` (or `.cursor/rules`).

These are **not** rules for maintaining this repository — see root
[../../AGENTS.md](../../AGENTS.md). How to wire the whole pack:
[../README.md](../README.md).

## Files

| File | About | When to attach |
|------|--------|----------------|
| [patterns-catalog.md](./patterns-catalog.md) | How agents use danilger/patterns (names + `.md` `@see`, planning skill) | Any product that annotates code with catalog patterns |
| [js_file_structure.md](./js_file_structure.md) | Export-first, `HELPERS` / `TYPES` / …, ~100-line threshold | JS/TS projects that want a shared module shape |
| [js_file_naming.md](./js_file_naming.md) | `kebab-case` + role postfix (`.hook`, `.store`, `.<pattern>`, …) | JS/TS projects with hooks, stores, pattern modules |
| [pr-inline-review-comments.md](./pr-inline-review-comments.md) | PR/MR body: summary + suggested review order; inline comments on the diff | Products where agents open PR/MR themselves |

## How to wire into a product

1. Copy the needed `.md` files, for example:
   ```text
   docs/agent_rules/patterns-catalog.md
   docs/agent_rules/js_file_structure.md
   docs/agent_rules/js_file_naming.md
   docs/agent_rules/pr-inline-review-comments.md
   ```
   or keep them next to `AGENTS.md` / in `.cursor/rules/`.
2. In the product `AGENTS.md`, add links or short includes:

   ```markdown
   ## Patterns catalog
   See docs/agent_rules/patterns-catalog.md

   ## File structure
   See docs/agent_rules/js_file_structure.md

   ## Naming
   See docs/agent_rules/js_file_naming.md

   ## PR/MR inline comments
   See docs/agent_rules/pr-inline-review-comments.md
   ```

## GitHub

- Rules dir: https://github.com/danilger/patterns/tree/main/agent/rules
- Patterns catalog: https://github.com/danilger/patterns/blob/main/agent/rules/patterns-catalog.md
- Structure: https://github.com/danilger/patterns/blob/main/agent/rules/js_file_structure.md
- Naming: https://github.com/danilger/patterns/blob/main/agent/rules/js_file_naming.md
- PR/MR inline: https://github.com/danilger/patterns/blob/main/agent/rules/pr-inline-review-comments.md
