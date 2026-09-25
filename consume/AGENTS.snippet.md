<!-- Вставь этот блок в AGENTS.md продуктового репозитория -->

## Паттерны (danilger/patterns)

Каталог: https://github.com/danilger/patterns  
Пакет для агентов: https://github.com/danilger/patterns/tree/main/consume  
Аннотации: https://github.com/danilger/patterns/blob/main/consume/annotation.md

### Планирование

Перед созданием или пересмотром **плана действий** (Cursor Plan mode, opsx-propose, opsx-explore, `/patterns-plan`) обязательно прочитай и следуй skill:

- локально: `.cursor/skills/compose-from-patterns/SKILL.md` (или `~/.cursor/skills/compose-from-patterns/SKILL.md`)
- иначе: https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md

Skill **не** использовать для обычного кодинга, багфиксов и Q&A.

### Реализация

- Выполняй шаги согласованного плана; границы модулей — по указанным паттернам.
- В коде и PR помечай блоки по [annotation.md](https://github.com/danilger/patterns/blob/main/consume/annotation.md): `@pattern` + `@see` на `.md`, либо `@ad-hoc` + `@why`.
- Не выбирай новые паттерны в обход плана: сначала обнови план, потом код.
- Не строй абстракции «ради ссылки на каталог»; тривиальный glue можно без паттерна и без метки.
