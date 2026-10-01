<!-- Вставь этот блок в AGENTS.md продуктового репозитория -->

## Паттерны (danilger/patterns)

Каталог-индекс: https://github.com/danilger/patterns/blob/main/README.md  
Пакет для агентов: https://github.com/danilger/patterns/tree/main/consume  
Аннотации: https://github.com/danilger/patterns/blob/main/consume/annotation.md

### Зачем каталог агенту

Репозиторий [danilger/patterns](https://github.com/danilger/patterns) — **справочник для людей**. Демо (`.js`) и тексты объяснений (`.md`) нужны человеку, чтобы быстро разобрать код на ревью.

Агент паттерны **уже знает**. Из каталога нужно только:

1. **Список имён** (что есть в библиотеке) — из [README](https://github.com/danilger/patterns/blob/main/README.md).
2. **URL на `.md`** — чтобы в коде / PR поставить `@see` на описание для человека.

Не клонируй библиотеку, не открывай `*-class.js` / `*-functional.js` / прочие демо, не изучай паттерны «заново» по этой репе.

### Планирование

Перед созданием или пересмотром **плана действий** (Cursor Plan mode, opsx-propose, opsx-explore, `/patterns-plan`) обязательно прочитай и следуй skill:

- локально: `.cursor/skills/compose-from-patterns/SKILL.md` (или `~/.cursor/skills/compose-from-patterns/SKILL.md`)
- иначе: https://github.com/danilger/patterns/blob/main/consume/skills/compose-from-patterns/SKILL.md

Skill **не** использовать для обычного кодинга, багфиксов и Q&A.

### Реализация

- Выполняй шаги согласованного плана; границы модулей — по указанным паттернам.
- В коде и PR помечай блоки по [annotation.md](https://github.com/danilger/patterns/blob/main/consume/annotation.md): `@pattern` + `@see` на `.md`, либо `@ad-hoc` + `@why`.
- Ссылка `@see` — для **читателя кода**, не для самообучения агента.
- Не выбирай новые паттерны в обход плана: сначала обнови план, потом код.
- Не строй абстракции «ради ссылки на каталог»; тривиальный glue можно без паттерна и без метки.
