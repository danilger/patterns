# Dependency Injection (IoC)

**Область:** Backend / NestJS

**Источники:** NestJS core; GoF «не new внутри, а инъекция»

## Смысл паттерна

**Dependency Injection (DI)** и **Inversion of Control (IoC)** означают: класс не создаёт зависимости сам (`new Mailer()`), а **получает их извне** — через конструктор или property injection.

NestJS поднимает **IoC-контейнер**: регистрирует providers (`@Injectable()`), разрешает граф зависимостей, управляет scope (singleton/request/transient). Это основа тестируемости: в тесте подменяете `MailerService` на mock одной строкой в `TestingModule`.

В «голом» JavaScript DI нет — демо показывает минимальный контейнер, чтобы понять, *зачем* Nest.

## Как устроено демо

Файл `dependency-injection.js`:

1. **`Container`** — регистрирует классы по token (`register`), при `get` создаёт singleton (кэш в `singletons`).
2. Конструктор получает `container` и сам вызывает `container.get("Mailer")` — упрощённая схема; в Nest это делает фреймворк.
3. **`Mailer`** — зависимость с методом `send(to, body)`.
4. **`UsersService`** — в конструкторе резолвит `Mailer`, метод `welcome(email)` шлёт приветствие.

Демо: `c.register("Mailer", Mailer)`, `c.register("UsersService", UsersService)`, `c.get("UsersService").welcome("a@b.c")`.

В Nest: `@Injectable() export class UsersService { constructor(private readonly mailer: MailerService) {} }`.

## Когда применять

- **Всегда** в Nest — не инстанцируйте repository/mailer внутри сервиса.
- Unit/integration тесты с подменой завайдеров.
- Разные реализации в dev/prod (fake mailer vs SMTP).
- Явный граф зависимостей и lifecycle (onModuleInit, request-scoped providers).

Антипаттерн: `Service Locator` с глобальным `get()` по всему коду — предпочитайте constructor injection.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **IoC** | Контроль создания объектов у контейнера, не у потребителя. |
| **Feature Module** | Модуль объявляет, *какие* providers доступны модулю и экспорту. |
| **Adapter / Repository** | Реализации портов регистрируются в DI и подставляются в сервисы. |
| **Strategy (Auth)** | JwtStrategy, LocalStrategy — injectable providers для Passport. |
| **Factory** | `useFactory` в module для сложной инициализации с ConfigService. |

GoF «Dependency Injection» как отдельный паттерн не выделяет; это принцип **Composition over inheritance** + контейнер.

## Краткий итог

Nest создаёт и связывает объекты за вас. Объявляйте зависимости в конструкторе — получите тестируемый, сменяемый код без `new` в бизнес-слое.
