# CQRS (lite)

**Область:** Backend / NestJS

**Источники:** @nestjs/cqrs; разделение команд и запросов

## Смысл паттерна

**CQRS** (Command Query Responsibility Segregation) разделяет операции, которые **меняют состояние** (commands), и операции, которые **только читают** (queries).

Команды: `CreateOrder`, `CancelSubscription`. Запросы: `GetOrder`, `ListOrders`. Разные модели, хендлеры и оптимизации для write и read path. В Nest — пакет `@nestjs/cqrs` с `CommandBus`, `QueryBus`, `@CommandHandler`, `@QueryHandler`.

«Lite» в демо — упрощённая шина без event sourcing и проекций; достаточно показать разделение шин и регистрацию обработчиков.

## Как устроено демо

Файл `cqrs-lite.js`:

1. **`CommandBus`** — `register(type, handler)` + `execute(command)`. Команда — объект `{ type, payload }`.
2. **`QueryBus`** — та же схема для чтения.
3. In-memory **`db.orders`** (`Map`) как хранилище.
4. Хендлер **`CreateOrder`** — генерирует id, сохраняет заказ, возвращает `{ id }`.
5. Хендлер **`GetOrder`** — читает по `payload.id`, иначе `null`.

Демо: `commands.execute({ type: "CreateOrder", payload: { total: 42 } })`, затем `queries.execute({ type: "GetOrder", payload: { id } })` — создали и прочитали через разные шины.

## Когда применять

- Сложный домен с разными read-моделями (отчёты, дашборды vs транзакционная запись).
- Высокая нагрузка на **чтение** — read replica, кэш, отдельные проекции.
- Нужны явные use-case классы (`CreateOrderHandler`) вместо «божественного» CRUD-сервиса.
- Event sourcing или saga на базе `@nestjs/cqrs`.

**Не применять** для простого CRUD: один серvice + repository часто достаточен. CQRS «для галочки» добавляет церемонию без выгоды.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Command** (GoF) | Команда инкапсулирует запрос как объект; здесь — буквально `CreateOrder`. |
| **Mediator** | Bus делегирует команду/запрос нужному handler. |
| **Domain Events** | После команды часто публикуют события (`OrderCreated`). |
| **Thin Controller** | Controller шлёт команду в bus, не содержит логику. |
| **Repository** | Write-side handler пишет через repository; read-side может читать из другой модели. |

## Краткий итог

Пишем и читаем разными путями. Команды меняют состояние, запросы — нет. В Nest это `@nestjs/cqrs`; для CRUD не обязательно.
