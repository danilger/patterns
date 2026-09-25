# Thin Controller / Application Service (Facade)

**Область:** Backend / NestJS

**Источники:** Nest best practices — controllers HTTP-only, services = use-cases

## Смысл паттерна

**Thin controller** — controller только **HTTP-граница**: маршрут, status code, headers, mapping DTO in/out. Вся **orchestration** use-case — в **application service**: валидация доменных правил, вызов repository, mailer, events.

Controller не содержит `if (total <= 0)`, не ходит в БД, не шлёт почту. Один вызов `this.ordersService.create(dto)` — и возврат `{ status: 201, body }`.

«Facade» здесь — **application facade / use-case layer**, не GoF Facade над legacy subsystem. Service фасадит repo + mailer + bus для одного сценария.

## Как устроено демо

Файл `thin-controller.js`:

1. **`OrdersRepository`** — `save(order)` → `{ id: 1, ...order }`.
2. **`Mailer`** — `send(to, text)` логирует письмо.
3. **`OrdersService.create({ userEmail, total })`** — проверка `total > 0`, save, mail «Order created».
4. **`OrdersController.create(body)`** — только делегирует service и формирует `{ status: 201, body: order }`.

Демо: `controller.create({ userEmail: "a@b.c", total: 20 })` — mail в лог, order в ответе.

В Nest: `@Post() @HttpCode(201) create(@Body() dto: CreateOrderDto) { return this.ordersService.create(dto); }`.

## Когда применять

- **Всегда** в Nest beyond trivial demos.
- Несколько entry points (REST + CLI + queue consumer) переиспользуют один service.
- Unit-тесты business logic без HTTP layer.
- Controller остаётся тонким при росте use-case (service может split на handlers при CQRS).

Антипаттерн: «fat controller» на 200 строк с SQL и email templates.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Facade (application)** | Service координирует подсистемы для одного сценария. |
| **Repository / Adapter** | Service inject dependencies, controller — нет. |
| **DTO + Validation** | Controller принимает DTO; service — domain types. |
| **Domain Events** | Service emit после create; controller не знает про listeners. |
| **CQRS** | Controller → CommandBus вместо fat method в controller. |
| **Guard / Interceptor** | HTTP concerns снаружи; service — transport-agnostic. |

## Краткий итог

Controller = HTTP, Service = use-case. Бизнес-логика живёт в `@Injectable()` service; controller маппит request/response и status codes.
