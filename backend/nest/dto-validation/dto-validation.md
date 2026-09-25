# DTO + Validation (Pipe)

**Область:** Backend / NestJS

**Источники:** NestJS Pipes + class-validator; API boundary best practices

## Смысл паттерна

**DTO** (Data Transfer Object) — контракт данных на **границе API**: что клиент может прислать и что вернёт сервер. Отдельно от **Entity** (модель БД с relations, lazy fields).

**ValidationPipe** + **class-validator** проверяют DTO до попадания в сервис: email формат, длина пароля, whitelist полей. Мусор отсекается на входе — сервис работает с уже валидными объектами.

Pipe в Nest — звено **Chain of Responsibility** в HTTP pipeline (после guards, до handler).

## Как устроено демо

Файл `dto-validation.js`:

1. **`validateCreateUser(input)`** — ручная валидация (аналог Pipe + decorators).
2. Проверки: `email` содержит `@`; `password` минимум 8 символов.
3. При ошибках — `Error` с `status: 400` и списком сообщений.
4. При успехе — нормализованный `{ email, password }`.

Демо: невалидный `{ email: "bad", password: "123" }` → `400 email invalid, password min 8`. Валидный `{ email: "a@b.c", password: "secret123" }` → объект проходит.

В Nest: `CreateUserDto` с `@IsEmail()`, `@MinLength(8)`, `@Post() create(@Body() dto: CreateUserDto)`, глобально `ValidationPipe({ whitelist: true })`.

## Когда применять

- **Все публичные endpoints** — body, query, params.
- Разделение API-контракта и доменной модели (не отдавайте entity с password hash).
- OpenAPI/Swagger генерируется из DTO-классов.
- Защита от mass assignment (`whitelist: true` убирает лишние поля).

Антипаттерн: `@Body() body: any` и проверки внутри сервиса — дублирование и пропуск route-level ошибок.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Chain of Responsibility** | Pipes идут цепочкой до handler. |
| **Guard** | Guard — «можно ли»; Pipe — «корректны ли данные». |
| **Thin Controller** | Controller принимает DTO, передаёт в service уже типизированно. |
| **Exception Filter** | Ошибки валидации мапятся в единый JSON 400. |
| **Config Module** | Env тоже валидируют схемой — та же идея на другой границе. |

DTO — не GoF; это **API boundary pattern** из enterprise-практик.

## Краткий итог

DTO = контракт, Pipe = проверка на границе. Сервис не парсит сырой body. `ValidationPipe` + class-validator — стандарт Nest для REST.
