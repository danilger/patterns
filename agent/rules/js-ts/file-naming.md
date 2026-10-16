# JS/TS file naming

Rule for agents: a file name is `kebab-case` plus a strict role postfix.

## Principle

File name: **domain in kebab-case** + **one postfix** + extension.
Do not use camelCase in the file name (`useUserSession.ts` — forbidden).
Do not use generic buckets without a domain (`utils.ts`, `helpers.ts`, `types.ts`, `store.ts`).

Format: `<domain>.<role>.ts` (or `.tsx`).

| Role | Postfix | Example file |
|------|---------|--------------|
| Hook | `.hook` | `user-session.hook.ts` |
| Store | `.store` | `user-session.store.ts` |
| Pattern module | `.<pattern>` | `user-session.adapter.ts` |
| Types only | `.types` | `user-display.types.ts` |
| Constants only | `.constants` | `request-status.constants.ts` |

## Clarifications

- The postfix is required and singular: not `user-session-hook.ts`, not `userSession.hook.ts`.
- If the file is one pattern — the postfix is the pattern slug (`adapter`, `facade`, …).
- Exports inside the file may be camelCase per the usual API
  (`useUserSession` from `user-session.hook.ts`, `userSessionStore` from
  `user-session.store.ts`) — that does not lift the file-name rule.
- Prefer naming over comments when either would suffice.
- Do not mass-rename existing files; the rule applies to new files
  and to ones you already touch in the task.
