# agent_rules — каталог правил для агентов

Готовые блоки правил, которые копируются в продукт и подключаются из
`AGENTS.md` проекта (или из `.cursor/rules`).

Это **не** правила сопровождения самого каталога паттернов — для них
см. корневой [../AGENTS.md](../AGENTS.md). Паттерны и annotation — в
[../consume/](../consume/).

## Файлы

| Файл | О чём | Когда подключать |
|------|--------|------------------|
| [js_file_structure.md](./js_file_structure.md) | Export-first, секции `HELPERS` / `TYPES` / …, порог ~100 строк | JS/TS-проекты, где нужна единая форма модуля |
| [js_file_naming.md](./js_file_naming.md) | `kebab-case` + постфикс роли (`.hook`, `.store`, `.<pattern>`, …) | JS/TS-проекты с хуками, сторами и pattern-модулями |
| [pr-inline-review-comments.md](./pr-inline-review-comments.md) | Inline review comments на diff после open/update PR/MR | Любой продукт, где агенты сами открывают PR/MR |

## Как встроить в проект

1. Скопируй нужные `.md` в репозиторий продукта, например:
   ```text
   docs/agent_rules/js_file_structure.md
   docs/agent_rules/js_file_naming.md
   docs/agent_rules/pr-inline-review-comments.md
   ```
   или рядом с `AGENTS.md` / в `.cursor/rules/` (как текст правила).
2. В `AGENTS.md` проекта добавь ссылки или короткие включения:

   ```markdown
   ## Структура файлов
   См. docs/agent_rules/js_file_structure.md

   ## Именование
   См. docs/agent_rules/js_file_naming.md

   ## PR/MR inline comments
   См. docs/agent_rules/pr-inline-review-comments.md
   ```

3. Не смешивай эти правила с пакетом паттернов: для Patterns + planning
   используй [../consume/AGENTS.snippet.md](../consume/AGENTS.snippet.md).

## GitHub

- Каталог: https://github.com/danilger/patterns/tree/main/agent_rules
- Структура: https://github.com/danilger/patterns/blob/main/agent_rules/js_file_structure.md
- Именование: https://github.com/danilger/patterns/blob/main/agent_rules/js_file_naming.md
- PR/MR inline: https://github.com/danilger/patterns/blob/main/agent_rules/pr-inline-review-comments.md
