# Code annotation format

Goal — on review, a **human** immediately sees whether a block follows a pattern from [danilger/patterns](https://github.com/danilger/patterns) or is an intentional exception. The link points at the library write-up.

The agent already knows the pattern: the annotation is navigation for the code / PR reader, not a cheat sheet for the model.

## Pattern from the catalog

```ts
/**
 * @pattern Repository
 * @see https://github.com/danilger/patterns/blob/main/backend/nest/repository/repository.md
 */
export class OrderRepository { /* ... */ }
```

- `@pattern` — name as in the [README catalog](https://github.com/danilger/patterns/blob/main/README.md) (short form OK).
- `@see` — URL to the **`.md`** explanation (never to `.js` / demos), path like `…/<slug>/<slug>.md` from the README tables.

JSDoc, `//`, or a block comment above a class / function / module are all fine — keep marks next to the block boundary.

## Exception (not from the catalog)

```ts
/**
 * @ad-hoc Stripe webhook signature quirks
 * @why no catalog pattern for provider-specific HMAC + raw body
 */
function verifyStripeSignature(/* ... */) { /* ... */ }
```

- `@ad-hoc` — what the chunk is.
- `@why` — one phrase why the catalog doesn't cover it.

## When not to annotate

- Trivial glue, re-exports, one-line helpers with no architectural role.
- Code already covered by a parent file-level annotation (don't repeat on every line).

## Tie-in to the plan

In the plan, each major step = `@pattern` + URL **or** `@ad-hoc` + why. Code marks must match the plan.

## What the agent must not do

- Don't open pattern demo files (`*.js`, `*-class.js`, `*-functional.js`) or copy them into the product.
- Don't read catalog `.md` files to “learn” a pattern — a README name + `@see` URL is enough.
