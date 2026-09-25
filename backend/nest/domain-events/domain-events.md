# Domain Events (Observer)

**Область:** Backend / NestJS

**Источники:** Nest EventEmitter / @nestjs/cqrs events; GoF Observer

## Смысл паттерна

После успешного бизнес-действия (создан user, оплачен order) часто нужны **побочные эффекты**: welcome-email, аналитика, начисление бонусов, инвалидация кэша. Если вызывать всё из одного сервиса — получается жёсткая связность и «божественный» метод.

**Domain event** — факт из прошлого («UserCreated», «OrderPaid»). Издатель **emit**, подписчики **on** / `@OnEvent` реагируют независимо. Модули не знают друг о друге напрямую.

В Nest: `@nestjs/event-emitter` или события в `@nestjs/cqrs`.

## Как устроено демо

Файл `domain-events.js`:

1. **`EventBus`** — `on(event, handler)` (много подписчиков на одно событие), `emit(event, payload)`.
2. Два обработчика на **`user.created`**: отправка welcome-mail (лог) и analytics track signup.
3. **`createUser(email)`** — создаёт `{ id, email }`, эмитит `user.created`, возвращает user.

Демо: `createUser("ann@example.com")` — в консоли два лога от разных слушателей.

В Nest: `this.eventEmitter.emit('user.created', { id, email })` и `@OnEvent('user.created') handleUserCreated(payload)`.

## Когда применять

- Side-effects после транзакции без раздувания основного use-case.
- Развязка модулей (Billing не импортирует Marketing напрямую).
- Несколько независимых реакций на одно действие.
- Подготовка к async messaging (событие → очередь → worker).

Осторожно: порядок обработчиков, идемпотентность, ошибки в listener не должны откатывать основную транзакцию без явной политики.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Observer** | Subject (bus) уведомляет подписчиков об изменении. |
| **Mediator** | Bus может выступать посредником между модулями. |
| **CQRS** | Команда завершилась → событие → проекции/read models. |
| **Thin Controller / Service** | Service публикует событие; mail/analytics — в listeners. |
| **Interceptor** | Interceptor — cross-cutting на HTTP; events — cross-cutting в домене. |

Не путать с **integration events** между сервисами (Kafka) — domain events чаще in-process, но модель похожа.

## Краткий итог

Один факт — много реакций. Use-case остаётся узким; подписчики добавляются без правки `createUser`. В Nest — EventEmitter + `@OnEvent`.
