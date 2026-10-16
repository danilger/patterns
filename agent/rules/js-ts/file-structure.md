# JS/TS file structure

Rule for agents: module shape and decomposition threshold.

## Export first

In a module the main runtime export comes **immediately after imports**
(with JSDoc if it is a component, hook, or public API).

Everything else sits **below** in labeled sections or in separate files:

1. Imports
2. Main export zone — runtime exports only
   (`export function` / `export const` / `export class`, …)
3. `// HELPERS` — local functions / schemas used by the export
4. `// TYPES` — `type` / `interface` (including props and result types)
5. As needed: `// CONSTANTS`, `// STYLES`

Rules:

- Put a section marker only when the section has content.
- In the main export zone do not keep helpers, types, or other
  non-exported declarations.
- Prefer keeping helpers/types in same-file sections first;
  extract to a sibling or `model/` domain-named file if the section hurts
  reading the export, has grown large, or a second consumer appears.

## Size

A file longer than **~100 lines** is a signal to decompose (extract helpers/types,
split UI sections, or move orchestration into a hook) — not a reason to split
“just in case”. One screen / one hook / one store in one file is
fine even if slightly over, while there is no second responsibility.
Prefer fewer clear modules over many tiny ones.
