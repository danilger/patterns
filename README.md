# Patterns

A library of design patterns and practical techniques, organized **by application area**.

This README is a **catalog of names and links**. Demos (`.js`) and detailed `.md` docs are primarily for **humans** (to quickly understand annotated code). Agents already know these patterns: they only need the list + `.md` URLs for annotations.

## For agents

### Repo map

| Path | What |
|------|------|
| [catalog/](./catalog/) | Patterns (explanations + demos) |
| [agent/](./agent/) | Product pack: [rules](./agent/rules/), [skills](./agent/skills/), [annotation](./agent/annotation.md) |
| [AGENTS.md](./AGENTS.md) | How to maintain **this** repository |

### Do / don't

| Do | Don't |
|----|-------|
| Take pattern **names** from the tables below | Open / copy demos (`*.js`, `*-class.js`, `*-functional.js`) |
| Put `@see` on **`.md`** under `catalog/` in code and plans | Relearn patterns from this repo |
| Wire the [agent/](./agent/) pack into the product | Walk the folder tree “just in case” |

### Add to your project

Pack: **[agent/](./agent/)** · https://github.com/danilger/patterns/tree/main/agent

| What | Where to get it | Where to put it |
|------|-----------------|-----------------|
| **Rules** | [agent/rules/](./agent/rules/) | Paste / link from product `AGENTS.md` |
| **Patterns-catalog rule** | [agent/rules/patterns-catalog.md](./agent/rules/patterns-catalog.md) | Product `AGENTS.md` |
| **Skill** (plans only) | [agent/skills/compose-from-patterns/](./agent/skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` or Multica import |
| **Annotations** | [agent/annotation.md](./agent/annotation.md) | Follow when marking up code / PRs |

```text
https://github.com/danilger/patterns/blob/main/agent/rules/patterns-catalog.md
https://github.com/danilger/patterns/blob/main/agent/skills/compose-from-patterns/SKILL.md
https://github.com/danilger/patterns/blob/main/agent/annotation.md
```

- Skill with `disable-model-invocation: true` — **only** Plan mode / opsx-propose / opsx-explore / explicit invoke.
- Root [AGENTS.md](./AGENTS.md) — rules for **maintaining this repository**, not the product pack.

### Annotation link

From the tables below, take the `.md` path (not `.js`):

```text
https://github.com/danilger/patterns/blob/main/catalog/frontend/react/compound-components/compound-components.md
```

## Structure

```text
patterns/
├── AGENTS.md                 # layout rules for THIS repository
├── README.md                 # this index (Patterns | Rules | Skills)
├── catalog/                  # patterns only
│   ├── gof/
│   │   ├── creational/<slug>/    # *-class.js + *-functional.js + .md
│   │   ├── structural/<slug>/
│   │   ├── behavioral/<slug>/
│   │   └── js-language-builtins/
│   ├── frontend/
│   │   ├── react/<slug>/
│   │   ├── rendering/<slug>/
│   │   └── performance/<slug>/
│   └── backend/
│       └── nest/<slug>/
└── agent/                    # product pack
    ├── README.md
    ├── annotation.md
    ├── rules/                # always-on policies
    └── skills/               # SKILL.md procedures
```

Each pattern is `catalog/<area>/<subarea>/<slug>/` with `<slug>.md` and a JS demo.

In **GoF**, each pattern has two demos: `<slug>-class.js` (OOP) and `<slug>-functional.js` (functions / closures).

## Rules (`agent/rules/`)

| Rule | File |
|------|------|
| Patterns catalog (wire into product) | [patterns-catalog.md](./agent/rules/patterns-catalog.md) |
| JS/TS file structure | [js_file_structure.md](./agent/rules/js_file_structure.md) |
| JS/TS file naming | [js_file_naming.md](./agent/rules/js_file_naming.md) |
| PR/MR inline review comments | [pr-inline-review-comments.md](./agent/rules/pr-inline-review-comments.md) |

Full index: [agent/rules/README.md](./agent/rules/README.md).

## Skills (`agent/skills/`)

| Skill | When | File |
|-------|------|------|
| compose-from-patterns | Plan mode / opsx / explicit only | [SKILL.md](./agent/skills/compose-from-patterns/SKILL.md) |

---

## GoF — creational (`catalog/gof/creational/`)

| Pattern | Files |
|---------|-------|
| Abstract Factory | [`class`](catalog/gof/creational/abstract-factory/abstract-factory-class.js) · [`functional`](catalog/gof/creational/abstract-factory/abstract-factory-functional.js) · [`.md`](catalog/gof/creational/abstract-factory/abstract-factory.md) |
| Builder | [`class`](catalog/gof/creational/builder/builder-class.js) · [`functional`](catalog/gof/creational/builder/builder-functional.js) · [`.md`](catalog/gof/creational/builder/builder.md) |
| Factory Method | [`class`](catalog/gof/creational/factory-method/factory-method-class.js) · [`functional`](catalog/gof/creational/factory-method/factory-method-functional.js) · [`.md`](catalog/gof/creational/factory-method/factory-method.md) |
| Prototype | [`class`](catalog/gof/creational/prototype/prototype-class.js) · [`functional`](catalog/gof/creational/prototype/prototype-functional.js) · [`.md`](catalog/gof/creational/prototype/prototype.md) |
| Singleton | [`class`](catalog/gof/creational/singleton/singleton-class.js) · [`functional`](catalog/gof/creational/singleton/singleton-functional.js) · [`.md`](catalog/gof/creational/singleton/singleton.md) |

## GoF — structural (`catalog/gof/structural/`)

| Pattern | Files |
|---------|-------|
| Adapter | [`class`](catalog/gof/structural/adapter/adapter-class.js) · [`functional`](catalog/gof/structural/adapter/adapter-functional.js) · [`.md`](catalog/gof/structural/adapter/adapter.md) |
| Bridge | [`class`](catalog/gof/structural/bridge/bridge-class.js) · [`functional`](catalog/gof/structural/bridge/bridge-functional.js) · [`.md`](catalog/gof/structural/bridge/bridge.md) |
| Composite | [`class`](catalog/gof/structural/composite/composite-class.js) · [`functional`](catalog/gof/structural/composite/composite-functional.js) · [`.md`](catalog/gof/structural/composite/composite.md) |
| Decorator | [`class`](catalog/gof/structural/decorator/decorator-class.js) · [`functional`](catalog/gof/structural/decorator/decorator-functional.js) · [`.md`](catalog/gof/structural/decorator/decorator.md) |
| Facade | [`class`](catalog/gof/structural/facade/facade-class.js) · [`functional`](catalog/gof/structural/facade/facade-functional.js) · [`.md`](catalog/gof/structural/facade/facade.md) |
| Flyweight | [`class`](catalog/gof/structural/flyweight/flyweight-class.js) · [`functional`](catalog/gof/structural/flyweight/flyweight-functional.js) · [`.md`](catalog/gof/structural/flyweight/flyweight.md) |
| Proxy | [`class`](catalog/gof/structural/proxy/proxy-class.js) · [`functional`](catalog/gof/structural/proxy/proxy-functional.js) · [`.md`](catalog/gof/structural/proxy/proxy.md) |

## GoF — behavioral (`catalog/gof/behavioral/`)

| Pattern | Files |
|---------|-------|
| Chain of Responsibility | [`class`](catalog/gof/behavioral/chain-of-responsibility/chain-of-responsibility-class.js) · [`functional`](catalog/gof/behavioral/chain-of-responsibility/chain-of-responsibility-functional.js) · [`.md`](catalog/gof/behavioral/chain-of-responsibility/chain-of-responsibility.md) |
| Command | [`class`](catalog/gof/behavioral/command/command-class.js) · [`functional`](catalog/gof/behavioral/command/command-functional.js) · [`.md`](catalog/gof/behavioral/command/command.md) |
| Interpreter | [`class`](catalog/gof/behavioral/interpreter/interpreter-class.js) · [`functional`](catalog/gof/behavioral/interpreter/interpreter-functional.js) · [`.md`](catalog/gof/behavioral/interpreter/interpreter.md) |
| Iterator | [`class`](catalog/gof/behavioral/iterator/iterator-class.js) · [`functional`](catalog/gof/behavioral/iterator/iterator-functional.js) · [`.md`](catalog/gof/behavioral/iterator/iterator.md) |
| Mediator | [`class`](catalog/gof/behavioral/mediator/mediator-class.js) · [`functional`](catalog/gof/behavioral/mediator/mediator-functional.js) · [`.md`](catalog/gof/behavioral/mediator/mediator.md) |
| Memento | [`class`](catalog/gof/behavioral/memento/memento-class.js) · [`functional`](catalog/gof/behavioral/memento/memento-functional.js) · [`.md`](catalog/gof/behavioral/memento/memento.md) |
| Observer | [`class`](catalog/gof/behavioral/observer/observer-class.js) · [`functional`](catalog/gof/behavioral/observer/observer-functional.js) · [`.md`](catalog/gof/behavioral/observer/observer.md) |
| State | [`class`](catalog/gof/behavioral/state/state-class.js) · [`functional`](catalog/gof/behavioral/state/state-functional.js) · [`.md`](catalog/gof/behavioral/state/state.md) |
| Strategy | [`class`](catalog/gof/behavioral/strategy/strategy-class.js) · [`functional`](catalog/gof/behavioral/strategy/strategy-functional.js) · [`.md`](catalog/gof/behavioral/strategy/strategy.md) |
| Template Method | [`class`](catalog/gof/behavioral/template-method/template-method-class.js) · [`functional`](catalog/gof/behavioral/template-method/template-method-functional.js) · [`.md`](catalog/gof/behavioral/template-method/template-method.md) |
| Visitor | [`class`](catalog/gof/behavioral/visitor/visitor-class.js) · [`functional`](catalog/gof/behavioral/visitor/visitor-functional.js) · [`.md`](catalog/gof/behavioral/visitor/visitor.md) |

Also: [`js-language-builtins`](catalog/gof/js-language-builtins/js-language-builtins.md) — how GoF ideas show up in built-in JS constructs.

---

## Frontend — React (`catalog/frontend/react/`)

Patterns for **UI composition and state APIs**. Rendering (CSR/SSR/…) lives in [`catalog/frontend/rendering/`](./catalog/frontend/rendering/); loading and perf in [`catalog/frontend/performance/`](./catalog/frontend/performance/).

| Pattern | Files |
|---------|-------|
| Compound Components | [`.js`](catalog/frontend/react/compound-components/compound-components.js) · [`.md`](catalog/frontend/react/compound-components/compound-components.md) |
| Container / Presentational | [`.js`](catalog/frontend/react/container-presentational/container-presentational.js) · [`.md`](catalog/frontend/react/container-presentational/container-presentational.md) |
| Control Props | [`.js`](catalog/frontend/react/control-props/control-props.js) · [`.md`](catalog/frontend/react/control-props/control-props.md) |
| Controlled / Uncontrolled Components | [`.js`](catalog/frontend/react/controlled-uncontrolled/controlled-uncontrolled.js) · [`.md`](catalog/frontend/react/controlled-uncontrolled/controlled-uncontrolled.md) |
| Custom Hooks | [`.js`](catalog/frontend/react/custom-hooks/custom-hooks.js) · [`.md`](catalog/frontend/react/custom-hooks/custom-hooks.md) |
| Error Boundary | [`.js`](catalog/frontend/react/error-boundary/error-boundary.js) · [`.md`](catalog/frontend/react/error-boundary/error-boundary.md) |
| Higher-Order Component (HOC) | [`.js`](catalog/frontend/react/hoc/hoc.js) · [`.md`](catalog/frontend/react/hoc/hoc.md) |
| Hooks | [`.js`](catalog/frontend/react/hooks/hooks.js) · [`.md`](catalog/frontend/react/hooks/hooks.md) |
| Lifting State Up | [`.js`](catalog/frontend/react/lifting-state/lifting-state.js) · [`.md`](catalog/frontend/react/lifting-state/lifting-state.md) |
| Portal | [`.js`](catalog/frontend/react/portal/portal.js) · [`.md`](catalog/frontend/react/portal/portal.md) |
| Props Getters / Prop Collections | [`.js`](catalog/frontend/react/props-getters/props-getters.js) · [`.md`](catalog/frontend/react/props-getters/props-getters.md) |
| Provider (Context) | [`.js`](catalog/frontend/react/provider/provider.js) · [`.md`](catalog/frontend/react/provider/provider.md) |
| Render Props | [`.js`](catalog/frontend/react/render-props/render-props.js) · [`.md`](catalog/frontend/react/render-props/render-props.md) |
| State Reducer | [`.js`](catalog/frontend/react/state-reducer/state-reducer.js) · [`.md`](catalog/frontend/react/state-reducer/state-reducer.md) |
| Suspense Boundary | [`.js`](catalog/frontend/react/suspense/suspense.js) · [`.md`](catalog/frontend/react/suspense/suspense.md) |

## Frontend — rendering (`catalog/frontend/rendering/`)

| Pattern | Files |
|---------|-------|
| Client-Side Rendering (CSR) | [`.js`](catalog/frontend/rendering/client-side-rendering/client-side-rendering.js) · [`.md`](catalog/frontend/rendering/client-side-rendering/client-side-rendering.md) |
| Incremental Static Regeneration (ISR) | [`.js`](catalog/frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.js) · [`.md`](catalog/frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.md) |
| Islands Architecture | [`.js`](catalog/frontend/rendering/islands-architecture/islands-architecture.js) · [`.md`](catalog/frontend/rendering/islands-architecture/islands-architecture.md) |
| Server-Side Rendering (SSR) | [`.js`](catalog/frontend/rendering/server-side-rendering/server-side-rendering.js) · [`.md`](catalog/frontend/rendering/server-side-rendering/server-side-rendering.md) |
| Static Rendering (SSG) | [`.js`](catalog/frontend/rendering/static-rendering/static-rendering.js) · [`.md`](catalog/frontend/rendering/static-rendering/static-rendering.md) |
| Streaming SSR | [`.js`](catalog/frontend/rendering/streaming-ssr/streaming-ssr.js) · [`.md`](catalog/frontend/rendering/streaming-ssr/streaming-ssr.md) |

## Frontend — performance (`catalog/frontend/performance/`)

| Pattern | Files |
|---------|-------|
| Code Splitting / Dynamic Import | [`.js`](catalog/frontend/performance/code-splitting/code-splitting.js) · [`.md`](catalog/frontend/performance/code-splitting/code-splitting.md) |
| Import on Interaction | [`.js`](catalog/frontend/performance/import-on-interaction/import-on-interaction.js) · [`.md`](catalog/frontend/performance/import-on-interaction/import-on-interaction.md) |
| Import on Visibility | [`.js`](catalog/frontend/performance/import-on-visibility/import-on-visibility.js) · [`.md`](catalog/frontend/performance/import-on-visibility/import-on-visibility.md) |
| Lazy Loading | [`.js`](catalog/frontend/performance/lazy-loading/lazy-loading.js) · [`.md`](catalog/frontend/performance/lazy-loading/lazy-loading.md) |
| List Virtualization (Windowing) | [`.js`](catalog/frontend/performance/list-virtualization/list-virtualization.js) · [`.md`](catalog/frontend/performance/list-virtualization/list-virtualization.md) |

---

## Backend — NestJS (`catalog/backend/nest/`)

| Pattern | Files |
|---------|-------|
| Adapter (External services) | [`.js`](catalog/backend/nest/adapter-external/adapter-external.js) · [`.md`](catalog/backend/nest/adapter-external/adapter-external.md) |
| Config Module | [`.js`](catalog/backend/nest/config-module/config-module.js) · [`.md`](catalog/backend/nest/config-module/config-module.md) |
| CQRS (lite) | [`.js`](catalog/backend/nest/cqrs-lite/cqrs-lite.js) · [`.md`](catalog/backend/nest/cqrs-lite/cqrs-lite.md) |
| Dependency Injection (IoC) | [`.js`](catalog/backend/nest/dependency-injection/dependency-injection.js) · [`.md`](catalog/backend/nest/dependency-injection/dependency-injection.md) |
| Domain Events (Observer) | [`.js`](catalog/backend/nest/domain-events/domain-events.js) · [`.md`](catalog/backend/nest/domain-events/domain-events.md) |
| DTO + Validation (Pipe) | [`.js`](catalog/backend/nest/dto-validation/dto-validation.js) · [`.md`](catalog/backend/nest/dto-validation/dto-validation.md) |
| Exception Filter | [`.js`](catalog/backend/nest/exception-filter/exception-filter.js) · [`.md`](catalog/backend/nest/exception-filter/exception-filter.md) |
| Feature Module | [`.js`](catalog/backend/nest/feature-module/feature-module.js) · [`.md`](catalog/backend/nest/feature-module/feature-module.md) |
| Guard | [`.js`](catalog/backend/nest/guard/guard.js) · [`.md`](catalog/backend/nest/guard/guard.md) |
| Interceptor | [`.js`](catalog/backend/nest/interceptor/interceptor.js) · [`.md`](catalog/backend/nest/interceptor/interceptor.md) |
| Repository | [`.js`](catalog/backend/nest/repository/repository.js) · [`.md`](catalog/backend/nest/repository/repository.md) |
| Strategy (Auth / Passport) | [`.js`](catalog/backend/nest/strategy-auth/strategy-auth.js) · [`.md`](catalog/backend/nest/strategy-auth/strategy-auth.md) |
| Thin Controller / Application Service (Facade) | [`.js`](catalog/backend/nest/thin-controller/thin-controller.js) · [`.md`](catalog/backend/nest/thin-controller/thin-controller.md) |

---

## Conventions

Full rules: [AGENTS.md](./AGENTS.md). Short version for patterns:

- One pattern = one `catalog/…/<slug>/` folder with `<slug>.md` and a JS demo.
- GoF: `<slug>-class.js` + `<slug>-functional.js` (two paradigms, one scenario).
- Other areas: usually `<slug>.js` + `<slug>.md`.
- JS header: `@pattern`, `@area` / `@category`, `@variant` (GoF), `@description`, `@when`.
- Prefer `.md` for links from code.
- Demos stay minimal; meaning lives in `.md`.
