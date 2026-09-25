---
name: compose-from-patterns
description: >-
  Maps work onto danilger/patterns and drafts an implementation plan with
  pattern links and explicit @ad-hoc gaps. Use ONLY when creating or revising
  an action/implementation plan (Cursor Plan mode, opsx-propose, opsx-explore,
  or explicit /patterns-plan). Do NOT use for ordinary coding, bugfixes, or Q&A.
disable-model-invocation: true
---

# Compose from patterns

Собери **план реализации** из кирпичей каталога [danilger/patterns](https://github.com/danilger/patterns), а не пиши код в этом skill.

## Когда применять

Только если пользователь создаёт или пересматривает план:

- Cursor Plan mode
- opsx-propose / opsx-explore
- явный вызов (`/patterns-plan`, «следуй compose-from-patterns»)

Не применять на обычный кодинг, багфиксы, рефакторинг без плана, вопросы.

## Источники

1. Индекс: https://github.com/danilger/patterns/blob/main/README.md
2. Аннотации: https://github.com/danilger/patterns/blob/main/consume/annotation.md
3. Объяснение паттерна: `https://github.com/danilger/patterns/blob/main/<область>/…/<slug>/<slug>.md`

При необходимости открой README, выбери область, затем нужный `.md`.

## Процедура

1. Кратко зафиксируй цель и границы задачи.
2. Выбери область каталога: `gof/` | `frontend/react|rendering|performance` | `backend/nest`.
3. Для **каждого крупного шага** плана:
   - подбери 1+ паттерн из README;
   - прочитай `.md` (смысл + когда не применять);
   - в шаг плана запиши имя + URL на `.md`;
   - если ничего не подходит — `@ad-hoc` + `@why` (одна фраза).
4. Большинство шагов — из каталога; меньшинство — явные `@ad-hoc`. Не считай проценты строк.
5. Запрещено: новый слой абстракции только ради метки; GoF на тривиальный glue.
6. Не реализуй код в этом проходе — только план (если пользователь не попросил иное после утверждения плана).

## Шаблон выхода плана

```markdown
## План

| Шаг | Паттерн / исключение | Ссылка |
|-----|----------------------|--------|
| 1. … | Repository | https://github.com/danilger/patterns/blob/main/backend/nest/repository/repository.md |
| 2. … | @ad-hoc: … | @why: … |

## Замечания
- …
```

Либо нумерованный список в том же формате: шаг → pattern URL | `@ad-hoc` + why.

## После утверждения плана

Напоминание исполнителю (не часть этого skill): в коде ставить метки по `consume/annotation.md` в соответствии с таблицей плана.
