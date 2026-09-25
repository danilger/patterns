# Interceptor

**Область:** Backend / NestJS

**Источники:** NestJS Interceptors

## Смысл паттерна

**Interceptor** оборачивает выполнение handler **до и после**: может изменить вход, результат, поймать ошибку, добавить timing. Cross-cutting concerns без копипасты в каждом controller method.

Типичные задачи: логирование duration, обёртка ответа `{ data, meta }`, timeout, кэширование GET, сериализация class-transformer, map RxJS stream.

По духу — **Decorator** / **AOP** вокруг handler; в Nest interceptors работают и с HTTP, GraphQL, WebSockets, microservices.

## Как устроено демо

Файл `interceptor.js`:

1. **`withInterceptor(interceptor, handler)`** — возвращает функцию, вызывающую `interceptor.intercept(ctx, () => handler(ctx))`.
2. **`LoggingInterceptor`** — замеряет время, после `next()` логирует `METHOD URL Xms`.
3. **`TransformInterceptor`** — оборачивает результат в `{ data }`.
4. Цепочка: Logging снаружи, Transform внутри, handler возвращает `{ id: 1 }`.

Демо: `pipeline({ method: "GET", url: "/users" })` → лог + `{ data: { id: 1 } }`.

В Nest: `@Injectable() class TransformInterceptor implements NestInterceptor` + `next.handle().pipe(map(...))`; `@UseInterceptors` или `APP_INTERCEPTOR`.

## Когда применять

- Единый envelope ответа API (`{ data, errors }`).
- Request/response logging, correlation id.
- ClassSerializerInterceptor для скрытия `@Exclude()` полей.
- TimeoutInterceptor для медленных downstream.
- CacheInterceptor на read-only endpoints.

Не кладите domain-логику в interceptor — только infrastructure/cross-cutting.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Decorator** | Добавляет поведение вокруг handler без изменения его кода. |
| **Chain of Responsibility** | Несколько interceptors выстраиваются в nest. |
| **Exception Filter** | Filter — exceptions; interceptor — успешный path и RxJS errors. |
| **Guard / Pipe** | Порядок: Guard → Interceptor (before) → Pipe → Handler → Interceptor (after). |
| **Thin Controller** | Transform в interceptor, controller отдаёт «сырой» domain object. |

## Краткий итог

Interceptor = обёртка вокруг handler для логов, transform, cache. Один глобальный `TransformInterceptor` вместо `{ data: x }` в каждом методе.
