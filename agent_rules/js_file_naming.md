# Именование JS/TS-файлов

Правило для агентов: файл = `kebab-case` + строгий постфикс роли.

## Принцип

Имя файла: **домен в kebab-case** + **один постфикс** + расширение.
Не используй camelCase в имени файла (`useUserSession.ts` — нельзя).
Не используй общие корзины без домена (`utils.ts`, `helpers.ts`, `types.ts`, `store.ts`).

Формат: `<domain>.<role>.ts` (или `.tsx`).

| Роль | Постфикс | Пример файла |
|------|----------|--------------|
| Хук | `.hook` | `user-session.hook.ts` |
| Store | `.store` | `user-session.store.ts` |
| Модуль под паттерн | `.<pattern>` | `user-session.adapter.ts` |
| Только типы | `.types` | `user-display.types.ts` |
| Только константы | `.constants` | `request-status.constants.ts` |

## Уточнения

- Постфикс обязателен и один: не `user-session-hook.ts`, не `userSession.hook.ts`.
- Если файл = один паттерн — постфикс = slug паттерна (`adapter`, `facade`, …).
- Экспорт внутри файла может быть camelCase по принятому API
  (`useUserSession` из `user-session.hook.ts`, `userSessionStore` из
  `user-session.store.ts`) — это не отменяет правило имени файла.
- Предпочитай именование комментариям, когда достаточно любого из двух.
- Не делай массовый rename существующих файлов; правило применяется к новым
  и к тем, которые уже трогаешь в задаче.
