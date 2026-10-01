# Patterns

A library of design patterns and practical techniques, organized **by application area**.

This README is a **catalog of names and links**. Demos (`.js`) and detailed `.md` docs are primarily for **humans** (to quickly understand annotated code). Agents already know these patterns: they only need the list + `.md` URLs for annotations.

## For agents

### Do / don't

| Do | Don't |
|----|-------|
| Take pattern **names** from the tables below | Open / copy demos (`*.js`, `*-class.js`, `*-functional.js`) |
| Put `@see` on **`.md`** in code and plans | Relearn patterns from this repo |
| Wire the [consume/](./consume/) pack into the product | Walk the folder tree “just in case” |

### Add to your project

Pack: **[consume/](./consume/)** · https://github.com/danilger/patterns/tree/main/consume

| What | Where to get it | Where to put it |
|------|-----------------|-----------------|
| **Rule** | [consume/AGENTS.snippet.md](./consume/AGENTS.snippet.md) | Paste into the product `AGENTS.md` |
| **Skill** (plans only) | [consume/skills/compose-from-patterns/](./consume/skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` or `~/.cursor/skills/…` |
| **Annotations** | [consume/annotation.md](./consume/annotation.md) | Follow when marking up code / PRs |

```text
https://github.com/danilger/patterns/blob/main/consume/AGENTS.snippet.md
https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md
https://github.com/danilger/patterns/blob/main/consume/annotation.md
```

- Skill with `disable-model-invocation: true` — **only** Plan mode / opsx-propose / opsx-explore / explicit invoke.
- Root [AGENTS.md](./AGENTS.md) — rules for **maintaining this catalog**, not the product snippet.

### Annotation link

From the tables below, take the `.md` path (not `.js`):

```text
https://github.com/danilger/patterns/blob/main/frontend/react/compound-components/compound-components.md
```

## Structure

Each pattern is a `<slug>/` folder with a `<slug>.md` explanation and a JS demo.

In **GoF**, each pattern has two demos: `<slug>-class.js` (OOP) and `<slug>-functional.js` (functions / closures).

```text
patterns/
├── AGENTS.md                 # layout rules for THIS library
├── README.md                 # this index
├── consume/                  # rule + skill for product repos
├── gof/
│   ├── creational/<slug>/    # *-class.js + *-functional.js + .md
│   ├── structural/<slug>/
│   ├── behavioral/<slug>/
│   └── js-language-builtins/
├── frontend/
│   ├── react/<slug>/
│   ├── rendering/<slug>/
│   └── performance/<slug>/
└── backend/
    └── nest/<slug>/
```

---

## GoF — creational (`gof/creational/`)

| Pattern | Files |
|---------|-------|
| Abstract Factory | [`class`](gof/creational/abstract-factory/abstract-factory-class.js) · [`functional`](gof/creational/abstract-factory/abstract-factory-functional.js) · [`.md`](gof/creational/abstract-factory/abstract-factory.md) |
| Builder | [`class`](gof/creational/builder/builder-class.js) · [`functional`](gof/creational/builder/builder-functional.js) · [`.md`](gof/creational/builder/builder.md) |
| Factory Method | [`class`](gof/creational/factory-method/factory-method-class.js) · [`functional`](gof/creational/factory-method/factory-method-functional.js) · [`.md`](gof/creational/factory-method/factory-method.md) |
| Prototype | [`class`](gof/creational/prototype/prototype-class.js) · [`functional`](gof/creational/prototype/prototype-functional.js) · [`.md`](gof/creational/prototype/prototype.md) |
| Singleton | [`class`](gof/creational/singleton/singleton-class.js) · [`functional`](gof/creational/singleton/singleton-functional.js) · [`.md`](gof/creational/singleton/singleton.md) |

## GoF — structural (`gof/structural/`)

| Pattern | Files |
|---------|-------|
| Adapter | [`class`](gof/structural/adapter/adapter-class.js) · [`functional`](gof/structural/adapter/adapter-functional.js) · [`.md`](gof/structural/adapter/adapter.md) |
| Bridge | [`class`](gof/structural/bridge/bridge-class.js) · [`functional`](gof/structural/bridge/bridge-functional.js) · [`.md`](gof/structural/bridge/bridge.md) |
| Composite | [`class`](gof/structural/composite/composite-class.js) · [`functional`](gof/structural/composite/composite-functional.js) · [`.md`](gof/structural/composite/composite.md) |
| Decorator | [`class`](gof/structural/decorator/decorator-class.js) · [`functional`](gof/structural/decorator/decorator-functional.js) · [`.md`](gof/structural/decorator/decorator.md) |
| Facade | [`class`](gof/structural/facade/facade-class.js) · [`functional`](gof/structural/facade/facade-functional.js) · [`.md`](gof/structural/facade/facade.md) |
| Flyweight | [`class`](gof/structural/flyweight/flyweight-class.js) · [`functional`](gof/structural/flyweight/flyweight-functional.js) · [`.md`](gof/structural/flyweight/flyweight.md) |
| Proxy | [`class`](gof/structural/proxy/proxy-class.js) · [`functional`](gof/structural/proxy/proxy-functional.js) · [`.md`](gof/structural/proxy/proxy.md) |

## GoF — behavioral (`gof/behavioral/`)

| Pattern | Files |
|---------|-------|
| Chain of Responsibility | [`class`](gof/behavioral/chain-of-responsibility/chain-of-responsibility-class.js) · [`functional`](gof/behavioral/chain-of-responsibility/chain-of-responsibility-functional.js) · [`.md`](gof/behavioral/chain-of-responsibility/chain-of-responsibility.md) |
| Command | [`class`](gof/behavioral/command/command-class.js) · [`functional`](gof/behavioral/command/command-functional.js) · [`.md`](gof/behavioral/command/command.md) |
| Interpreter | [`class`](gof/behavioral/interpreter/interpreter-class.js) · [`functional`](gof/behavioral/interpreter/interpreter-functional.js) · [`.md`](gof/behavioral/interpreter/interpreter.md) |
| Iterator | [`class`](gof/behavioral/iterator/iterator-class.js) · [`functional`](gof/behavioral/iterator/iterator-functional.js) · [`.md`](gof/behavioral/iterator/iterator.md) |
| Mediator | [`class`](gof/behavioral/mediator/mediator-class.js) · [`functional`](gof/behavioral/mediator/mediator-functional.js) · [`.md`](gof/behavioral/mediator/mediator.md) |
| Memento | [`class`](gof/behavioral/memento/memento-class.js) · [`functional`](gof/behavioral/memento/memento-functional.js) · [`.md`](gof/behavioral/memento/memento.md) |
| Observer | [`class`](gof/behavioral/observer/observer-class.js) · [`functional`](gof/behavioral/observer/observer-functional.js) · [`.md`](gof/behavioral/observer/observer.md) |
| State | [`class`](gof/behavioral/state/state-class.js) · [`functional`](gof/behavioral/state/state-functional.js) · [`.md`](gof/behavioral/state/state.md) |
| Strategy | [`class`](gof/behavioral/strategy/strategy-class.js) · [`functional`](gof/behavioral/strategy/strategy-functional.js) · [`.md`](gof/behavioral/strategy/strategy.md) |
| Template Method | [`class`](gof/behavioral/template-method/template-method-class.js) · [`functional`](gof/behavioral/template-method/template-method-functional.js) · [`.md`](gof/behavioral/template-method/template-method.md) |
| Visitor | [`class`](gof/behavioral/visitor/visitor-class.js) · [`functional`](gof/behavioral/visitor/visitor-functional.js) · [`.md`](gof/behavioral/visitor/visitor.md) |

Also: [`js-language-builtins`](gof/js-language-builtins/js-language-builtins.md) — how GoF ideas show up in built-in JS constructs.

---

## Frontend — React (`frontend/react/`)

Patterns for **UI composition and state APIs**. Rendering (CSR/SSR/…) lives in [`frontend/rendering/`](#frontend--rendering-frontendrendering); loading and perf in [`frontend/performance/`](#frontend--performance-frontendperformance).

| Pattern | Files |
|---------|-------|
| Compound Components | [`.js`](frontend/react/compound-components/compound-components.js) · [`.md`](frontend/react/compound-components/compound-components.md) |
| Container / Presentational | [`.js`](frontend/react/container-presentational/container-presentational.js) · [`.md`](frontend/react/container-presentational/container-presentational.md) |
| Control Props | [`.js`](frontend/react/control-props/control-props.js) · [`.md`](frontend/react/control-props/control-props.md) |
| Controlled / Uncontrolled Components | [`.js`](frontend/react/controlled-uncontrolled/controlled-uncontrolled.js) · [`.md`](frontend/react/controlled-uncontrolled/controlled-uncontrolled.md) |
| Custom Hooks | [`.js`](frontend/react/custom-hooks/custom-hooks.js) · [`.md`](frontend/react/custom-hooks/custom-hooks.md) |
| Error Boundary | [`.js`](frontend/react/error-boundary/error-boundary.js) · [`.md`](frontend/react/error-boundary/error-boundary.md) |
| Higher-Order Component (HOC) | [`.js`](frontend/react/hoc/hoc.js) · [`.md`](frontend/react/hoc/hoc.md) |
| Hooks | [`.js`](frontend/react/hooks/hooks.js) · [`.md`](frontend/react/hooks/hooks.md) |
| Lifting State Up | [`.js`](frontend/react/lifting-state/lifting-state.js) · [`.md`](frontend/react/lifting-state/lifting-state.md) |
| Portal | [`.js`](frontend/react/portal/portal.js) · [`.md`](frontend/react/portal/portal.md) |
| Props Getters / Prop Collections | [`.js`](frontend/react/props-getters/props-getters.js) · [`.md`](frontend/react/props-getters/props-getters.md) |
| Provider (Context) | [`.js`](frontend/react/provider/provider.js) · [`.md`](frontend/react/provider/provider.md) |
| Render Props | [`.js`](frontend/react/render-props/render-props.js) · [`.md`](frontend/react/render-props/render-props.md) |
| State Reducer | [`.js`](frontend/react/state-reducer/state-reducer.js) · [`.md`](frontend/react/state-reducer/state-reducer.md) |
| Suspense Boundary | [`.js`](frontend/react/suspense/suspense.js) · [`.md`](frontend/react/suspense/suspense.md) |

## Frontend — rendering (`frontend/rendering/`)

| Pattern | Files |
|---------|-------|
| Client-Side Rendering (CSR) | [`.js`](frontend/rendering/client-side-rendering/client-side-rendering.js) · [`.md`](frontend/rendering/client-side-rendering/client-side-rendering.md) |
| Incremental Static Regeneration (ISR) | [`.js`](frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.js) · [`.md`](frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.md) |
| Islands Architecture | [`.js`](frontend/rendering/islands-architecture/islands-architecture.js) · [`.md`](frontend/rendering/islands-architecture/islands-architecture.md) |
| Server-Side Rendering (SSR) | [`.js`](frontend/rendering/server-side-rendering/server-side-rendering.js) · [`.md`](frontend/rendering/server-side-rendering/server-side-rendering.md) |
| Static Rendering (SSG) | [`.js`](frontend/rendering/static-rendering/static-rendering.js) · [`.md`](frontend/rendering/static-rendering/static-rendering.md) |
| Streaming SSR | [`.js`](frontend/rendering/streaming-ssr/streaming-ssr.js) · [`.md`](frontend/rendering/streaming-ssr/streaming-ssr.md) |

## Frontend — performance (`frontend/performance/`)

| Pattern | Files |
|---------|-------|
| Code Splitting / Dynamic Import | [`.js`](frontend/performance/code-splitting/code-splitting.js) · [`.md`](frontend/performance/code-splitting/code-splitting.md) |
| Import on Interaction | [`.js`](frontend/performance/import-on-interaction/import-on-interaction.js) · [`.md`](frontend/performance/import-on-interaction/import-on-interaction.md) |
| Import on Visibility | [`.js`](frontend/performance/import-on-visibility/import-on-visibility.js) · [`.md`](frontend/performance/import-on-visibility/import-on-visibility.md) |
| Lazy Loading | [`.js`](frontend/performance/lazy-loading/lazy-loading.js) · [`.md`](frontend/performance/lazy-loading/lazy-loading.md) |
| List Virtualization (Windowing) | [`.js`](frontend/performance/list-virtualization/list-virtualization.js) · [`.md`](frontend/performance/list-virtualization/list-virtualization.md) |

---

## Backend — NestJS (`backend/nest/`)

| Pattern | Files |
|---------|-------|
| Adapter (External services) | [`.js`](backend/nest/adapter-external/adapter-external.js) · [`.md`](backend/nest/adapter-external/adapter-external.md) |
| Config Module | [`.js`](backend/nest/config-module/config-module.js) · [`.md`](backend/nest/config-module/config-module.md) |
| CQRS (lite) | [`.js`](backend/nest/cqrs-lite/cqrs-lite.js) · [`.md`](backend/nest/cqrs-lite/cqrs-lite.md) |
| Dependency Injection (IoC) | [`.js`](backend/nest/dependency-injection/dependency-injection.js) · [`.md`](backend/nest/dependency-injection/dependency-injection.md) |
| Domain Events (Observer) | [`.js`](backend/nest/domain-events/domain-events.js) · [`.md`](backend/nest/domain-events/domain-events.md) |
| DTO + Validation (Pipe) | [`.js`](backend/nest/dto-validation/dto-validation.js) · [`.md`](backend/nest/dto-validation/dto-validation.md) |
| Exception Filter | [`.js`](backend/nest/exception-filter/exception-filter.js) · [`.md`](backend/nest/exception-filter/exception-filter.md) |
| Feature Module | [`.js`](backend/nest/feature-module/feature-module.js) · [`.md`](backend/nest/feature-module/feature-module.md) |
| Guard | [`.js`](backend/nest/guard/guard.js) · [`.md`](backend/nest/guard/guard.md) |
| Interceptor | [`.js`](backend/nest/interceptor/interceptor.js) · [`.md`](backend/nest/interceptor/interceptor.md) |
| Repository | [`.js`](backend/nest/repository/repository.js) · [`.md`](backend/nest/repository/repository.md) |
| Strategy (Auth / Passport) | [`.js`](backend/nest/strategy-auth/strategy-auth.js) · [`.md`](backend/nest/strategy-auth/strategy-auth.md) |
| Thin Controller / Application Service (Facade) | [`.js`](backend/nest/thin-controller/thin-controller.js) · [`.md`](backend/nest/thin-controller/thin-controller.md) |

---

## Conventions

Full rules: [AGENTS.md](./AGENTS.md). Short version:

- One pattern = one `<slug>/` folder with `<slug>.md` and a JS demo.
- GoF: `<slug>-class.js` + `<slug>-functional.js` (two paradigms, one scenario).
- Other areas: usually `<slug>.js` + `<slug>.md`.
- JS header: `@pattern`, `@area` / `@category`, `@variant` (GoF), `@description`, `@when`.
- Prefer `.md` for links from code.
- Demos stay minimal; meaning lives in `.md`.
