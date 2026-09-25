# Config Module

**Область:** Backend / NestJS

**Источники:** @nestjs/config best practices

## Смысл паттерна

Конфигурация приложения (порты, URL БД, секреты JWT, feature flags) должна быть **централизована**, **типизирована** и **проверена при старте**, а не размазана по `process.env` в десятках файлов.

`ConfigModule` из `@nestjs/config` загружает `.env`, маппит переменные в объект конфигурации и (рекомендуется) валидирует схему через Joi или Zod. Ошибка «забыли JWT_SECRET» обнаруживается до первого запроса, а не в production под нагрузкой.

## Как устроено демо

Файл `config-module.js` имитирует load + validate без Nest:

1. **`loadConfig(env)`** читает `PORT`, `DATABASE_URL`, `JWT_SECRET` из переданного объекта (аналог `process.env`).
2. Приводит `port` к числу, подставляет дефолт `3000`.
3. **Валидирует обязательные поля**: если нет `dbUrl` или `jwtSecret` — бросает `Error` с понятным сообщением.
4. Возвращает **`Object.freeze(config)`** — конфиг неизменяем после загрузки.

Демо сначала вызывает `loadConfig({})` — ловит ошибку и печатает `fail: DATABASE_URL required`. Затем успешный вызов с заполненными переменными.

В `@example NestJS` — `ConfigModule.forRoot({ isGlobal: true, validationSchema: Joi.object({...}) })`.

## Когда применять

- Любое **production** Nest-приложение.
- Несколько окружений (dev/staging/prod) с разными `.env`.
- Нужна единая точка для секретов и feature toggles.
- Команда хочет автодополнение и типы через `ConfigService` + custom `registerAs`.

Не нужен отдельный «config service» на каждый модуль — достаточно глобального `ConfigModule` и именованных конфиг-фабрик.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Singleton** | Конфиг загружается один раз при bootstrap. |
| **Feature Module** | Модули импортируют `ConfigModule` или используют `isGlobal: true`. |
| **Dependency Injection** | `ConfigService` инжектится в сервисы вместо прямого чтения env. |
| **DTO + Validation** | Схема конфига на старте — та же идея «проверить на границе», только граница = boot. |
| **Adapter** | Config может поставлять URL/credentials адаптерам внешних сервисов. |

GoF-прямого аналога нет; это **архитектурная практика** Nest-экосистемы.

## Краткий итог

Один модуль, одна схема, fail-fast при старте. Сервисы получают типизированный конфиг через DI, а не лезут в `process.env` сами.
