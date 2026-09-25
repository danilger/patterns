# Adapter (External services)

**Область:** Backend / NestJS

**Источники:** Hexagonal / Ports & Adapters; Nest providers

## Смысл паттерна

Домен и application-слой не должны знать детали Stripe, S3, SendGrid или легаси HTTP API. Вместо этого они зависят от **порта** — минимального контракта (интерфейса), который описывает, *что* нужно сделать, а не *как*.

**Адаптер** реализует этот порт для конкретного провайдера. Смена Stripe на Adyen, SendGrid на SES или in-memory fake для тестов сводится к подмене адаптера в DI-контейнере, без правок use-case и бизнес-логики.

В NestJS это обычно custom provider с `useClass` / `useFactory` и injection token (`Symbol` или строка).

## Как устроено демо

Файл `adapter-external.js` моделирует hexagonal-границу без фреймворка:

1. **`CheckoutService`** — application-сервис. В конструктор получает объект `payments` с методом `charge`. Не знает про Stripe.
2. **`StripeAdapter`** — реальный адаптер: `charge({ orderId, amount, currency })` возвращает строку вида `stripe: charged …`.
3. **`FakePaymentsAdapter`** — тестовый/локальный адаптер с тем же контрактом, но другой реализацией.

Демо создаёт два экземпляра `CheckoutService` — с разными адаптерами — и вызывает `pay("o1", 10)` / `pay("o2", 10)`. Один и тот же use-case, разные «внешние системы».

В комментарии `@example NestJS` показана регистрация через `@Module`: `CheckoutService` + `{ provide: PAYMENTS, useClass: StripePaymentsAdapter }`.

## Когда применять

- Платежи, почта, object storage, push-уведомления, CRM, ERP.
- **Anti-corruption layer** к чужому или легаси API — адаптер переводит «их» модель в «нашу».
- Нужны unit-тесты без реальных HTTP-вызовов (fake/in-memory адаптер).
- Планируется смена вендора или несколько провайдеров в разных окружениях.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **GoF Adapter** | Классический адаптер: приводит чужой интерфейс к ожидаемому порту. |
| **Hexagonal / Ports & Adapters** | Явное разделение «ядро» ↔ «инфраструктура». |
| **Dependency Injection** | Адаптер регистрируется как provider; сервис получает порт через конструктор. |
| **Repository** | Repository — адаптер к БД; external adapter — к внешнему сервису. |
| **Strategy** | Оба дают взаимозаменяемые реализации, но Adapter чаще про *интеграцию*, Strategy — про *алгоритм* внутри домена. |

## Краткий итог

Application зависит от порта, а не от SDK. Новый провайдер = новый адаптер + одна строка в модуле. Бизнес-код остаётся стабильным при смене инфраструктуры.
