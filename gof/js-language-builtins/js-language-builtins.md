# Что в JS/TS уже «в языке»

**Область:** Meta / JavaScript  
**Источники:** Addy Osmani — *Learning JavaScript Design Patterns*; Lydia Hallie & Addy Osmani — [patterns.dev](https://www.patterns.dev)

---

## Смысл паттерна

Это не классический GoF-паттерн, а **обзорная заметка**: многие «книжные» паттерны в современном JavaScript и TypeScript **уже встроены в язык, рантайм или фреймворки**. Их не нужно каждый раз реализовывать вручную через иерархии классов.

Идея — учить GoF как **словарь и мышление**, а на практике опираться на идиомы ES modules, прототипы, `Proxy`, декораторы Nest/TC39, DI и middleware-цепочки.

---

## Как устроено демо

Файл `js-language-builtins.js` не содержит исполняемой логики классов — только **таблицу соответствий** в `console.log`:

| Классика GoF / идея | В JS/TS и экосистеме |
|---------------------|----------------------|
| Module | `import`/`export`, Nest `@Module` |
| Singleton | scope модуля (один экземпляр на файл) |
| Observer | `EventTarget`, `EventEmitter`, RxJS, события Nest |
| Iterator | `Symbol.iterator`, `for...of`, async iterators |
| Prototype | `Object.create`, `class extends`, цепочка прототипов |
| Proxy | глобальный `Proxy` |
| Decorator | TC39 decorators, декораторы Nest (метаданные) |
| Factory | функции-фабрики, `useFactory` в провайдерах Nest |
| Strategy | передача функции/класса как зависимости (DI) |
| Chain of Responsibility | Nest: middleware → guards → pipes → interceptor → filter |

Вывод в файле: **patterns.dev** и Osmani описывают сдвиг от «классики GoF» к rendering, performance и framework patterns.

---

## Когда применять

- Выбираете между **ручным GoF-классом** и **встроенной идиомой** — сначала проверьте, не решено ли это языком.
- Объясняете команде, **зачем** паттерн, не копируя Java/C# буквально в JS.
- Проектируете на **Nest, React, Node** — опираетесь на модули, DI, hooks, events.
- Нужен **общий словарь** при code review: «это Observer через EventEmitter».

## Когда не стоит

- Доменная логика **не покрывается** платформенной абстракцией — тогда явный паттерн уместен.
- «Модуль = singleton» **ломает тесты** — нужен явный контейнер/DI, а не слепая вера в idiom.
- Путаете **имя** паттерна с **механизмом** (`Proxy` GoF ≠ `new Proxy()` без понимания задачи).

---

## Связь с другими паттернами

- **GoF creational/structural/behavioral** — теоретическая база; этот файл — **карта мостов** к JS.
- **Dependency Injection** — частая замена Strategy + Factory в приложениях.
- **Compound Components, hooks (frontend/)** — следующий слой после «классики» для UI.

---

## Краткий итог

В JS многие GoF-паттерны **уже есть в платформе** — модули, события, итераторы, `Proxy`, DI. Учите классику для понимания, применяйте **идиомы языка и фреймворка** в коде.
