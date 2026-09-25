# Patterns

Библиотека паттернов проектирования и прикладных приёмов, разложенных **по областям применения**.

Репозиторий — ориентир для агентов и разработчиков: какие паттерны есть, где их уместно применять, и куда ссылаться из кода / `AGENTS.md`.

## Для агентов

1. Сначала открой этот README и выбери область (GoF / Frontend / Backend).
2. Перейди к файлу паттерна (`.js` — мини-демо + метаданные; `.md` рядом — развёрнутое объяснение, если есть).
3. В коде и ревью оставляй ссылку на конкретный файл:

```text
https://github.com/danilger/patterns/blob/main/<путь-к-файлу>
```

Пример:

```text
https://github.com/danilger/patterns/blob/main/frontend/react/compound-components.md
```

В `AGENTS.md` целевого проекта достаточно указать корень библиотеки:

```text
Паттерны: https://github.com/danilger/patterns
Каталог по областям — в README. Ссылку на объяснение конкретного паттерна оставляй в комментарии/PR.
```

## Структура

```text
patterns/
├── gof/                 # классика Gang of Four
│   ├── creational/
│   ├── structural/
│   └── behavioral/
├── frontend/
│   ├── react/           # паттерны React / UI composition
│   ├── rendering/       # CSR, SSR, SSG, streaming…
│   └── performance/     # lazy load, splitting, virtualization
└── backend/
    └── nest/            # NestJS / серверный слой
```

---

## GoF — порождающие (`gof/creational/`)

| Паттерн | Файл |
|---------|------|
| Singleton (Одиночка) | [singleton.js](gof/creational/singleton.js) |
| Factory Method (Фабричный метод) | [factory-method.js](gof/creational/factory-method.js) |
| Abstract Factory (Абстрактная фабрика) | [abstract-factory.js](gof/creational/abstract-factory.js) |
| Builder (Строитель) | [builder.js](gof/creational/builder.js) |
| Prototype (Прототип) | [prototype.js](gof/creational/prototype.js) |

## GoF — структурные (`gof/structural/`)

| Паттерн | Файл |
|---------|------|
| Adapter (Адаптер) | [adapter.js](gof/structural/adapter.js) |
| Bridge (Мост) | [bridge.js](gof/structural/bridge.js) |
| Composite (Компоновщик) | [composite.js](gof/structural/composite.js) |
| Decorator (Декоратор) | [decorator.js](gof/structural/decorator.js) |
| Facade (Фасад) | [facade.js](gof/structural/facade.js) |
| Flyweight (Приспособленец) | [flyweight.js](gof/structural/flyweight.js) |
| Proxy (Заместитель) | [proxy.js](gof/structural/proxy.js) |

## GoF — поведенческие (`gof/behavioral/`)

| Паттерн | Файл |
|---------|------|
| Chain of Responsibility | [chain-of-responsibility.js](gof/behavioral/chain-of-responsibility.js) |
| Command (Команда) | [command.js](gof/behavioral/command.js) |
| Interpreter (Интерпретатор) | [interpreter.js](gof/behavioral/interpreter.js) |
| Iterator (Итератор) | [iterator.js](gof/behavioral/iterator.js) |
| Mediator (Посредник) | [mediator.js](gof/behavioral/mediator.js) |
| Memento (Хранитель) | [memento.js](gof/behavioral/memento.js) |
| Observer (Наблюдатель) | [observer.js](gof/behavioral/observer.js) |
| State (Состояние) | [state.js](gof/behavioral/state.js) |
| Strategy (Стратегия) | [strategy.js](gof/behavioral/strategy.js) |
| Template Method | [template-method.js](gof/behavioral/template-method.js) |
| Visitor (Посетитель) | [visitor.js](gof/behavioral/visitor.js) |

Дополнительно: [gof/js-language-builtins.js](gof/js-language-builtins.js) — как идеи GoF проявляются во встроенных конструкциях JS.

---

## Frontend — React (`frontend/react/`)

| Паттерн | Файл |
|---------|------|
| Hooks | [hooks.js](frontend/react/hooks.js) |
| Custom Hooks | [custom-hooks.js](frontend/react/custom-hooks.js) |
| Higher-Order Component (HOC) | [hoc.js](frontend/react/hoc.js) |
| Render Props | [render-props.js](frontend/react/render-props.js) |
| Provider (Context) | [provider.js](frontend/react/provider.js) |
| Compound Components | [compound-components.js](frontend/react/compound-components.js) · [compound-components.md](frontend/react/compound-components.md) |
| Container / Presentational | [container-presentational.js](frontend/react/container-presentational.js) |
| Lifting State Up | [lifting-state.js](frontend/react/lifting-state.js) |
| Controlled / Uncontrolled | [controlled-uncontrolled.js](frontend/react/controlled-uncontrolled.js) |
| State Reducer | [state-reducer.js](frontend/react/state-reducer.js) |

## Frontend — рендеринг (`frontend/rendering/`)

| Паттерн | Файл |
|---------|------|
| Client-Side Rendering (CSR) | [client-side-rendering.js](frontend/rendering/client-side-rendering.js) |
| Server-Side Rendering (SSR) | [server-side-rendering.js](frontend/rendering/server-side-rendering.js) |
| Static Rendering (SSG) | [static-rendering.js](frontend/rendering/static-rendering.js) |
| Streaming SSR | [streaming-ssr.js](frontend/rendering/streaming-ssr.js) |
| Incremental Static Regeneration (ISR) | [incremental-static-regeneration.js](frontend/rendering/incremental-static-regeneration.js) |
| Islands Architecture | [islands-architecture.js](frontend/rendering/islands-architecture.js) |

## Frontend — производительность (`frontend/performance/`)

| Паттерн | Файл |
|---------|------|
| Code Splitting / Dynamic Import | [code-splitting.js](frontend/performance/code-splitting.js) |
| Lazy Loading | [lazy-loading.js](frontend/performance/lazy-loading.js) |
| Import on Interaction | [import-on-interaction.js](frontend/performance/import-on-interaction.js) |
| Import on Visibility | [import-on-visibility.js](frontend/performance/import-on-visibility.js) |
| List Virtualization (Windowing) | [list-virtualization.js](frontend/performance/list-virtualization.js) |

---

## Backend — NestJS (`backend/nest/`)

| Паттерн | Файл |
|---------|------|
| Dependency Injection (IoC) | [dependency-injection.js](backend/nest/dependency-injection.js) |
| Feature Module | [feature-module.js](backend/nest/feature-module.js) |
| Config Module | [config-module.js](backend/nest/config-module.js) |
| Repository | [repository.js](backend/nest/repository.js) |
| Thin Controller / Application Service | [thin-controller.js](backend/nest/thin-controller.js) |
| DTO + Validation (Pipe) | [dto-validation.js](backend/nest/dto-validation.js) |
| Guard | [guard.js](backend/nest/guard.js) |
| Interceptor | [interceptor.js](backend/nest/interceptor.js) |
| Exception Filter | [exception-filter.js](backend/nest/exception-filter.js) |
| Strategy (Auth / Passport) | [strategy-auth.js](backend/nest/strategy-auth.js) |
| Adapter (External services) | [adapter-external.js](backend/nest/adapter-external.js) |
| Domain Events (Observer) | [domain-events.js](backend/nest/domain-events.js) |
| CQRS (lite) | [cqrs-lite.js](backend/nest/cqrs-lite.js) |

---

## Соглашения

- Один паттерн ≈ один файл (или пара `.js` + `.md`).
- В шапке `.js`: `@pattern`, `@area` / `@category`, `@description`, `@when`.
- Развёрнутое объяснение — в одноимённом `.md` (предпочтительно для ссылок из кода).
- Демо в `.js` — минимальное и читаемое, без фреймворк-шума, где это возможно.
