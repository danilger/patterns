# Exception Filter

**Область:** Backend / NestJS

**Источники:** NestJS Exception Filters

## Смысл паттерна

В REST API ошибки должны возвращаться в **едином формате**: `statusCode`, `message`, опционально `path`, `timestamp`, код ошибки. Если каждый controller ловит `try/catch` — формат разъезжается, логика дублируется.

**Exception Filter** перехватывает thrown exceptions **после** handler (и других слоёв), маппит их в HTTP-ответ. Бизнес-код кидает `NotFoundException`, доменные ошибки или кастомные классы — filter решает, что отдать клиенту и что залогировать.

## Как устроено демо

Файл `exception-filter.js`:

1. **`HttpError`** — ошибка со свойством `status` (404, 500…).
2. **`exceptionFilter(handler)`** — higher-order function: оборачивает async handler в try/catch.
3. При успехе — возвращает результат handler.
4. При ошибке — `{ status, body: { statusCode, message, path } }` из `ctx.url`.

Демо (async IIFE):

- `ok` handler → `{ status: 200, body: { ok: true } }`.
- `fail` handler бросает `HttpError(404, "User not found")` → JSON 404 с path `/users/9`.

В Nest: `@Catch()` class implements `ExceptionFilter`, метод `catch(exception, host)` → `host.switchToHttp().getResponse().status().json(...)`.

## Когда применять

- Единый формат ошибок для фронта и мобильных клиентов.
- Маппинг доменных исключений (`UserNotFound`) → 404 vs 409.
- Централизованное логирование и скрытие stack trace в production.
- Не хотите `try/catch` в каждом методе controller.

Комбинируйте с встроенными `HttpException` и `@nestjs/common` exceptions.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Chain of Responsibility** | Filter — последнее звено обработки исключений в pipeline. |
| **Interceptor** | Interceptor может ловить RxJS errors; filter — thrown exceptions. |
| **DTO + Validation** | `BadRequestException` от ValidationPipe попадает в filter. |
| **Guard** | 403 часто из guard; filter унифицирует и прочие коды. |
| **Thin Controller** | Controller кидает исключение, не формирует JSON ошибки сам. |

Близко к **Aspect-Oriented** cross-cutting concern — один раз настроил, работает везде.

## Краткий итог

Бросайте исключения в бизнес-слое — filter превратит их в стабильный HTTP JSON. Один `@Catch()` вместо сотни try/catch в controllers.
