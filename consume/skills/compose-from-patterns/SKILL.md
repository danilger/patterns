---
name: compose-from-patterns
description: >-
  Maps work onto danilger/patterns catalog names and drafts a plan with
  @see links to pattern .md docs (for human readers) and explicit @ad-hoc gaps.
  Use ONLY when creating or revising an action/implementation plan (Cursor Plan
  mode, opsx-propose, opsx-explore, or explicit /patterns-plan). Do NOT use for
  ordinary coding, bugfixes, or Q&A. Do NOT open pattern demo .js files.
disable-model-invocation: true
---

# Compose from patterns

Собери **план реализации**, размеченный именами из каталога [danilger/patterns](https://github.com/danilger/patterns) и ссылками на `.md` для людей. Код в этом skill не пиши.

## Роль каталога

Паттерны тебе уже знакомы. Репозиторий — не учебник и не источник демо для копирования.

| Нужно агенту | Не нужно агенту |
|--------------|-----------------|
| [README](https://github.com/danilger/patterns/blob/main/README.md) — список имён и путей | Файлы `*.js` / `*-class.js` / `*-functional.js` (демо для людей) |
| URL вида `…/<slug>/<slug>.md` для `@see` в плане и коде | Читать `.md` «чтобы вспомнить паттерн» |
| [annotation.md](https://github.com/danilger/patterns/blob/main/consume/annotation.md) — формат меток | Клонировать или обходить дерево `gof/`, `frontend/`, `backend/` |

Открывай **только README** (индекс) и при необходимости `consume/annotation.md`. Объяснения `.md` и демо `.js` — для человека по ссылке из аннотации.

## Когда применять

Только если пользователь создаёт или пересматривает план:

- Cursor Plan mode
- opsx-propose / opsx-explore
- явный вызов (`/patterns-plan`, «следуй compose-from-patterns»)

Не применять на обычный кодинг, багфиксы, рефакторинг без плана, вопросы.

## Источники (минимальный набор)

1. Индекс-каталог: https://github.com/danilger/patterns/blob/main/README.md
2. Формат аннотаций: https://github.com/danilger/patterns/blob/main/consume/annotation.md
3. Шаблон ссылки: `https://github.com/danilger/patterns/blob/main/<область>/…/<slug>/<slug>.md`

Путь к `.md` бери из таблиц README (колонка «Файлы» → `.md`). Не подставляй ссылки на `.js`.

## Процедура

1. Кратко зафиксируй цель и границы задачи.
2. По README выбери область: `gof/` | `frontend/react|rendering|performance` | `backend/nest`.
3. Для **каждого крупного шага** плана:
   - подбери 1+ имя паттерна из таблиц README (по смыслу задачи — из своих знаний);
   - в шаг запиши имя + URL на соответствующий `.md` из README;
   - если ничего не подходит — `@ad-hoc` + `@why` (одна фраза).
4. Большинство шагов — из каталога; меньшинство — явные `@ad-hoc`. Не считай проценты строк.
5. Запрещено: новый слой абстракции только ради метки; GoF на тривиальный glue; открытие демо-файлов паттернов; копирование кода из библиотеки паттернов в продукт.
6. Не реализуй код в этом проходе — только план (если пользователь не попросил иное после утверждения плана).

## Шаблон выхода плана

```markdown
## План

| Шаг | Паттерн / исключение | Ссылка (для @see в коде) |
|-----|----------------------|--------------------------|
| 1. … | Repository | https://github.com/danilger/patterns/blob/main/backend/nest/repository/repository.md |
| 2. … | @ad-hoc: … | @why: … |

## Замечания
- …
```

Либо нумерованный список в том же формате: шаг → pattern URL | `@ad-hoc` + why.

## После утверждения плана

Напоминание исполнителю (не часть этого skill): в коде ставить метки по `consume/annotation.md` в соответствии с таблицей плана. Ссылки читает человек; агент по ним паттерны не «подтягивает».
