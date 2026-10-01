# Patterns

Библиотека паттернов проектирования и прикладных приёмов, разложенных **по областям применения**.

Этот README — **каталог имён и ссылок**. Демо (`.js`) и подробные `.md` — в первую очередь для **людей** (быстро разобрать размеченный код). Агенты паттерны уже знают: им нужен список + URL на `.md` для аннотаций.

## Для агентов

### Что делать / чего не делать

| Делать | Не делать |
|--------|-----------|
| Брать **имена** паттернов из таблиц ниже | Открывать / копировать демо (`*.js`, `*-class.js`, `*-functional.js`) |
| В коде и плане ставить `@see` на **`.md`** | Учиться паттернам по этой репе |
| Подключать пакет [consume/](./consume/) в продукт | Обходить дерево папок «на всякий случай» |

### Подключить в свой проект

Пакет: **[consume/](./consume/)** · https://github.com/danilger/patterns/tree/main/consume

| Что | Где забрать | Куда положить |
|-----|-------------|---------------|
| **Правило** | [consume/AGENTS.snippet.md](./consume/AGENTS.snippet.md) | Вставить в `AGENTS.md` продукта |
| **Skill** (только планы) | [consume/skills/compose-from-patterns/](./consume/skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` или `~/.cursor/skills/…` |
| **Аннотации** | [consume/annotation.md](./consume/annotation.md) | Следовать при разметке кода / PR |

```text
https://github.com/danilger/patterns/blob/main/consume/AGENTS.snippet.md
https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md
https://github.com/danilger/patterns/blob/main/consume/annotation.md
```

- Skill с `disable-model-invocation: true` — **только** Plan mode / opsx-propose / opsx-explore / явно.
- [AGENTS.md](./AGENTS.md) в корне — правила **сопровождения каталога**, не путать со snippet для продуктов.

### Ссылка для аннотации

Из таблицы ниже бери путь к `.md` (не к `.js`):

```text
https://github.com/danilger/patterns/blob/main/frontend/react/compound-components/compound-components.md
```

## Структура

Каждый паттерн — папка `<slug>/` с объяснением `<slug>.md` и демо на JS.

В **GoF** у каждого паттерна два демо: `<slug>-class.js` (ООП) и `<slug>-functional.js` (функции / замыкания).

```text
patterns/
├── AGENTS.md                 # раскладка файлов ЭТОЙ библиотеки
├── README.md                 # этот индекс
├── consume/                  # правило + skill для продуктовых репо
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

## GoF — порождающие (`gof/creational/`)

| Паттерн | Файлы |
|---------|-------|
| Abstract Factory (Абстрактная фабрика) | [`class`](gof/creational/abstract-factory/abstract-factory-class.js) · [`functional`](gof/creational/abstract-factory/abstract-factory-functional.js) · [`.md`](gof/creational/abstract-factory/abstract-factory.md) |
| Builder (Строитель) | [`class`](gof/creational/builder/builder-class.js) · [`functional`](gof/creational/builder/builder-functional.js) · [`.md`](gof/creational/builder/builder.md) |
| Factory Method (Фабричный метод) | [`class`](gof/creational/factory-method/factory-method-class.js) · [`functional`](gof/creational/factory-method/factory-method-functional.js) · [`.md`](gof/creational/factory-method/factory-method.md) |
| Prototype (Прототип) | [`class`](gof/creational/prototype/prototype-class.js) · [`functional`](gof/creational/prototype/prototype-functional.js) · [`.md`](gof/creational/prototype/prototype.md) |
| Singleton (Одиночка) | [`class`](gof/creational/singleton/singleton-class.js) · [`functional`](gof/creational/singleton/singleton-functional.js) · [`.md`](gof/creational/singleton/singleton.md) |

## GoF — структурные (`gof/structural/`)

| Паттерн | Файлы |
|---------|-------|
| Adapter (Адаптер) | [`class`](gof/structural/adapter/adapter-class.js) · [`functional`](gof/structural/adapter/adapter-functional.js) · [`.md`](gof/structural/adapter/adapter.md) |
| Bridge (Мост) | [`class`](gof/structural/bridge/bridge-class.js) · [`functional`](gof/structural/bridge/bridge-functional.js) · [`.md`](gof/structural/bridge/bridge.md) |
| Composite (Компоновщик) | [`class`](gof/structural/composite/composite-class.js) · [`functional`](gof/structural/composite/composite-functional.js) · [`.md`](gof/structural/composite/composite.md) |
| Decorator (Декоратор) | [`class`](gof/structural/decorator/decorator-class.js) · [`functional`](gof/structural/decorator/decorator-functional.js) · [`.md`](gof/structural/decorator/decorator.md) |
| Facade (Фасад) | [`class`](gof/structural/facade/facade-class.js) · [`functional`](gof/structural/facade/facade-functional.js) · [`.md`](gof/structural/facade/facade.md) |
| Flyweight (Приспособленец) | [`class`](gof/structural/flyweight/flyweight-class.js) · [`functional`](gof/structural/flyweight/flyweight-functional.js) · [`.md`](gof/structural/flyweight/flyweight.md) |
| Proxy (Заместитель) | [`class`](gof/structural/proxy/proxy-class.js) · [`functional`](gof/structural/proxy/proxy-functional.js) · [`.md`](gof/structural/proxy/proxy.md) |

## GoF — поведенческие (`gof/behavioral/`)

| Паттерн | Файлы |
|---------|-------|
| Chain of Responsibility (Цепочка обязанностей) | [`class`](gof/behavioral/chain-of-responsibility/chain-of-responsibility-class.js) · [`functional`](gof/behavioral/chain-of-responsibility/chain-of-responsibility-functional.js) · [`.md`](gof/behavioral/chain-of-responsibility/chain-of-responsibility.md) |
| Command (Команда) | [`class`](gof/behavioral/command/command-class.js) · [`functional`](gof/behavioral/command/command-functional.js) · [`.md`](gof/behavioral/command/command.md) |
| Interpreter (Интерпретатор) | [`class`](gof/behavioral/interpreter/interpreter-class.js) · [`functional`](gof/behavioral/interpreter/interpreter-functional.js) · [`.md`](gof/behavioral/interpreter/interpreter.md) |
| Iterator (Итератор) | [`class`](gof/behavioral/iterator/iterator-class.js) · [`functional`](gof/behavioral/iterator/iterator-functional.js) · [`.md`](gof/behavioral/iterator/iterator.md) |
| Mediator (Посредник) | [`class`](gof/behavioral/mediator/mediator-class.js) · [`functional`](gof/behavioral/mediator/mediator-functional.js) · [`.md`](gof/behavioral/mediator/mediator.md) |
| Memento (Хранитель) | [`class`](gof/behavioral/memento/memento-class.js) · [`functional`](gof/behavioral/memento/memento-functional.js) · [`.md`](gof/behavioral/memento/memento.md) |
| Observer (Наблюдатель) | [`class`](gof/behavioral/observer/observer-class.js) · [`functional`](gof/behavioral/observer/observer-functional.js) · [`.md`](gof/behavioral/observer/observer.md) |
| State (Состояние) | [`class`](gof/behavioral/state/state-class.js) · [`functional`](gof/behavioral/state/state-functional.js) · [`.md`](gof/behavioral/state/state.md) |
| Strategy (Стратегия) | [`class`](gof/behavioral/strategy/strategy-class.js) · [`functional`](gof/behavioral/strategy/strategy-functional.js) · [`.md`](gof/behavioral/strategy/strategy.md) |
| Template Method (Шаблонный метод) | [`class`](gof/behavioral/template-method/template-method-class.js) · [`functional`](gof/behavioral/template-method/template-method-functional.js) · [`.md`](gof/behavioral/template-method/template-method.md) |
| Visitor (Посетитель) | [`class`](gof/behavioral/visitor/visitor-class.js) · [`functional`](gof/behavioral/visitor/visitor-functional.js) · [`.md`](gof/behavioral/visitor/visitor.md) |

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

- Один паттерн = одна папка `<slug>/` с `<slug>.md` и демо на JS.
- GoF: `<slug>-class.js` + `<slug>-functional.js` (две парадигмы, один сценарий).
- Остальные области: обычно `<slug>.js` + `<slug>.md`.
- В шапке `.js`: `@pattern`, `@area` / `@category`, `@variant` (для GoF), `@description`, `@when`.
- Для ссылок из кода используй `.md`.
- Демо в `.js` — минимальное; смысл паттерна — в `.md`.
