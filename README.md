# Patterns

Библиотека паттернов проектирования и прикладных приёмов, разложенных **по областям применения**.

Репозиторий — ориентир для агентов и разработчиков: какие паттерны есть, где их уместно применять, и куда ссылаться из кода / `AGENTS.md`.

## Для агентов

### Подключить в свой проект

Пакет для продуктовых репо: **[consume/](./consume/)**  
(GitHub: https://github.com/danilger/patterns/tree/main/consume)

| Что | Где забрать | Куда положить |
|-----|-------------|---------------|
| **Правило** | [consume/AGENTS.snippet.md](./consume/AGENTS.snippet.md) | Вставить в `AGENTS.md` продукта |
| **Skill** (только планы) | [consume/skills/compose-from-patterns/](./consume/skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` или `~/.cursor/skills/compose-from-patterns/` |
| **Аннотации** | [consume/annotation.md](./consume/annotation.md) | Следовать при разметке кода / PR |

Прямые ссылки:

```text
https://github.com/danilger/patterns/blob/main/consume/AGENTS.snippet.md
https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md
https://github.com/danilger/patterns/blob/main/consume/annotation.md
```

- Skill с `disable-model-invocation: true` — вызывать **только** в Plan mode / opsx-propose / opsx-explore / явно.
- [AGENTS.md](./AGENTS.md) в корне этого репо — правила **сопровождения каталога**, не путать со snippet для продуктов.

### Как пользоваться каталогом

1. Открой этот README и выбери область (GoF / Frontend / Backend).
2. Перейди к папке паттерна (`.js` — демо; `.md` — объяснение).
3. В коде и ревью оставляй ссылку на `.md`:

```text
https://github.com/danilger/patterns/blob/main/<путь-к-файлу>
```

Пример:

```text
https://github.com/danilger/patterns/blob/main/frontend/react/compound-components/compound-components.md
```

## Структура

Каждый паттерн — папка `<slug>/` с парой `<slug>.js` + `<slug>.md`.

```text
patterns/
├── AGENTS.md                 # раскладка файлов ЭТОЙ библиотеки
├── README.md                 # этот индекс
├── consume/                  # правило + skill для продуктовых репо
├── gof/
│   ├── creational/<slug>/
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

## GoF — порождающие (`gof/creational/`)

| Паттерн | Файлы |
|---------|-------|
| Abstract Factory (Абстрактная фабрика) | [`.js`](gof/creational/abstract-factory/abstract-factory.js) · [`.md`](gof/creational/abstract-factory/abstract-factory.md) |
| Builder (Строитель) | [`.js`](gof/creational/builder/builder.js) · [`.md`](gof/creational/builder/builder.md) |
| Factory Method (Фабричный метод) | [`.js`](gof/creational/factory-method/factory-method.js) · [`.md`](gof/creational/factory-method/factory-method.md) |
| Prototype (Прототип) | [`.js`](gof/creational/prototype/prototype.js) · [`.md`](gof/creational/prototype/prototype.md) |
| Singleton (Одиночка) | [`.js`](gof/creational/singleton/singleton.js) · [`.md`](gof/creational/singleton/singleton.md) |

## GoF — структурные (`gof/structural/`)

| Паттерн | Файлы |
|---------|-------|
| Adapter (Адаптер) | [`.js`](gof/structural/adapter/adapter.js) · [`.md`](gof/structural/adapter/adapter.md) |
| Bridge (Мост) | [`.js`](gof/structural/bridge/bridge.js) · [`.md`](gof/structural/bridge/bridge.md) |
| Composite (Компоновщик) | [`.js`](gof/structural/composite/composite.js) · [`.md`](gof/structural/composite/composite.md) |
| Decorator (Декоратор) | [`.js`](gof/structural/decorator/decorator.js) · [`.md`](gof/structural/decorator/decorator.md) |
| Facade (Фасад) | [`.js`](gof/structural/facade/facade.js) · [`.md`](gof/structural/facade/facade.md) |
| Flyweight (Приспособленец) | [`.js`](gof/structural/flyweight/flyweight.js) · [`.md`](gof/structural/flyweight/flyweight.md) |
| Proxy (Заместитель) | [`.js`](gof/structural/proxy/proxy.js) · [`.md`](gof/structural/proxy/proxy.md) |

## GoF — поведенческие (`gof/behavioral/`)

| Паттерн | Файлы |
|---------|-------|
| Chain of Responsibility (Цепочка обязанностей) | [`.js`](gof/behavioral/chain-of-responsibility/chain-of-responsibility.js) · [`.md`](gof/behavioral/chain-of-responsibility/chain-of-responsibility.md) |
| Command (Команда) | [`.js`](gof/behavioral/command/command.js) · [`.md`](gof/behavioral/command/command.md) |
| Interpreter (Интерпретатор) | [`.js`](gof/behavioral/interpreter/interpreter.js) · [`.md`](gof/behavioral/interpreter/interpreter.md) |
| Iterator (Итератор) | [`.js`](gof/behavioral/iterator/iterator.js) · [`.md`](gof/behavioral/iterator/iterator.md) |
| Mediator (Посредник) | [`.js`](gof/behavioral/mediator/mediator.js) · [`.md`](gof/behavioral/mediator/mediator.md) |
| Memento (Хранитель) | [`.js`](gof/behavioral/memento/memento.js) · [`.md`](gof/behavioral/memento/memento.md) |
| Observer (Наблюдатель) | [`.js`](gof/behavioral/observer/observer.js) · [`.md`](gof/behavioral/observer/observer.md) |
| State (Состояние) | [`.js`](gof/behavioral/state/state.js) · [`.md`](gof/behavioral/state/state.md) |
| Strategy (Стратегия) | [`.js`](gof/behavioral/strategy/strategy.js) · [`.md`](gof/behavioral/strategy/strategy.md) |
| Template Method (Шаблонный метод) | [`.js`](gof/behavioral/template-method/template-method.js) · [`.md`](gof/behavioral/template-method/template-method.md) |
| Visitor (Посетитель) | [`.js`](gof/behavioral/visitor/visitor.js) · [`.md`](gof/behavioral/visitor/visitor.md) |

Дополнительно: [`js-language-builtins`](gof/js-language-builtins/js-language-builtins.md) — как идеи GoF проявляются во встроенных конструкциях JS.

---

## Frontend — React (`frontend/react/`)

Паттерны **композиции UI и state API**. Рендеринг (CSR/SSR/…) — в [`frontend/rendering/`](#frontend--рендеринг-frontendrendering); загрузка и perf — в [`frontend/performance/`](#frontend--производительность-frontendperformance).

| Паттерн | Файлы |
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

## Frontend — рендеринг (`frontend/rendering/`)

| Паттерн | Файлы |
|---------|-------|
| Client-Side Rendering (CSR) | [`.js`](frontend/rendering/client-side-rendering/client-side-rendering.js) · [`.md`](frontend/rendering/client-side-rendering/client-side-rendering.md) |
| Incremental Static Regeneration (ISR) | [`.js`](frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.js) · [`.md`](frontend/rendering/incremental-static-regeneration/incremental-static-regeneration.md) |
| Islands Architecture | [`.js`](frontend/rendering/islands-architecture/islands-architecture.js) · [`.md`](frontend/rendering/islands-architecture/islands-architecture.md) |
| Server-Side Rendering (SSR) | [`.js`](frontend/rendering/server-side-rendering/server-side-rendering.js) · [`.md`](frontend/rendering/server-side-rendering/server-side-rendering.md) |
| Static Rendering (SSG) | [`.js`](frontend/rendering/static-rendering/static-rendering.js) · [`.md`](frontend/rendering/static-rendering/static-rendering.md) |
| Streaming SSR | [`.js`](frontend/rendering/streaming-ssr/streaming-ssr.js) · [`.md`](frontend/rendering/streaming-ssr/streaming-ssr.md) |

## Frontend — производительность (`frontend/performance/`)

| Паттерн | Файлы |
|---------|-------|
| Code Splitting / Dynamic Import | [`.js`](frontend/performance/code-splitting/code-splitting.js) · [`.md`](frontend/performance/code-splitting/code-splitting.md) |
| Import on Interaction | [`.js`](frontend/performance/import-on-interaction/import-on-interaction.js) · [`.md`](frontend/performance/import-on-interaction/import-on-interaction.md) |
| Import on Visibility | [`.js`](frontend/performance/import-on-visibility/import-on-visibility.js) · [`.md`](frontend/performance/import-on-visibility/import-on-visibility.md) |
| Lazy Loading | [`.js`](frontend/performance/lazy-loading/lazy-loading.js) · [`.md`](frontend/performance/lazy-loading/lazy-loading.md) |
| List Virtualization (Windowing) | [`.js`](frontend/performance/list-virtualization/list-virtualization.js) · [`.md`](frontend/performance/list-virtualization/list-virtualization.md) |

---

## Backend — NestJS (`backend/nest/`)

| Паттерн | Файлы |
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

## Соглашения

Полные правила — в [AGENTS.md](./AGENTS.md). Кратко:

- Один паттерн = одна папка `<slug>/` с `<slug>.js` + `<slug>.md`.
- В шапке `.js`: `@pattern`, `@area` / `@category`, `@description`, `@when`.
- Для ссылок из кода используй `.md`.
- Демо в `.js` — минимальное; смысл паттерна — в `.md`.
