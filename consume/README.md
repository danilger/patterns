# Consume — артефакты для продуктовых проектов

Пакет для агентов **вне** этой библиотеки: короткое правило + skill планирования + формат аннотаций.

| Артефакт | Файл | Куда в продукте |
|----------|------|-----------------|
| Правило | [AGENTS.snippet.md](./AGENTS.snippet.md) | Вставить в `AGENTS.md` (или `.cursor/rules`) |
| Skill | [skills/compose-from-patterns/](./skills/compose-from-patterns/) | `.cursor/skills/compose-from-patterns/` или `~/.cursor/skills/compose-from-patterns/` |
| Аннотации | [annotation.md](./annotation.md) | Ссылка из snippet / skill; образец для кода |

## GitHub (без локального клона)

- Пакет: https://github.com/danilger/patterns/tree/main/consume
- Правило: https://github.com/danilger/patterns/blob/main/consume/AGENTS.snippet.md
- Skill: https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md
- Аннотации: https://github.com/danilger/patterns/blob/main/consume/annotation.md
- Каталог (индекс имён): https://github.com/danilger/patterns/blob/main/README.md

## Разделение ролей

| Аудитория | Что берёт из библиотеки |
|-----------|-------------------------|
| **Агент** | Только список паттернов из README + URL на `.md` для `@see` в плане и коде |
| **Человек** | `.md` объяснения и `.js` демо — чтобы быстро понять размеченный код |

Агент **не** ходит по демо и не учится по этой репе: паттерны ему уже известны. Цель consume — единый каталог имён и стабильные ссылки для аннотаций.

## Важно

- Skill с `disable-model-invocation: true` — **не** на любой запрос. Только Plan mode / opsx-propose / opsx-explore / явный вызов.
- [../AGENTS.md](../AGENTS.md) в корне — правила **сопровождения каталога**, не путать с `AGENTS.snippet.md`.
