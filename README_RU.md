![Antigravity × BMad Method](assets/banner.jpg)

# Antigravity × BMad Method — шаблон конфигурации

Этот репозиторий — готовый **шаблон**, который подключает **BMad Method** (роли, задачи, чеклисты и handoff’ы Agile/Scrum) к окружению **Antigravity** через нативные **slash-команды**.

Подходит, если вы хотите воспроизводимый поток: **PRD → Архитектура → Истории → Разработка → QA gate**.

Это удобный проектный шаблон для автоматизации agentic workflow: роли PM/Architect/Dev/QA запускаются командами (`/pm`, `/architect`, `/dev`, `/qa`) и следуют конвенциям **BMAD-METHOD**.

## Зачем этот репозиторий

- Быстро стартовать: `/pm` → структура и артефакты без “пустого листа”.
- Единый процесс: роли (`/po`, `/architect`, `/dev`, `/qa`) и явные handoff’ы.
- Повторяемость: задачи и чеклисты живут в markdown, а не в разрозненных промтах.

![Ценность: скорость, консистентность, повторяемость](assets/value.jpg)

## Что внутри

- **Workflows Antigravity** в `.agent/workflows/` (например, `/pm`, `/dev`, `/qa`) — запускают роли BMad.
- **Agent memory для Codex** в `AGENTS.md` (генерируется BMAD-METHOD; полезно для Codex CLI/Web).
- **Генератор workflows**: `.gemini/transpose_bmad.py` — (пере)генерация `.agent/workflows` из `.bmad-core`.

> Важно: workflows ссылаются на `.bmad-core/...` (agents/tasks/templates). Если `.bmad-core` отсутствует — установите/подключите его (см. Quick start).

## Как это устроено

![Как это устроено](assets/diagram.jpg)

## Slash-команды (агенты)

| Команда | Роль | Результат |
| :--- | :--- | :--- |
| `/pm` | Product Manager | PRD, требования, фрейминг user stories |
| `/architect` | System Architect | архитектура, технический план, решения |
| `/po` | Product Owner | бэклог, качество историй, acceptance criteria |
| `/dev` | Developer | реализация историй, итерации, рефакторинг |
| `/qa` | Test Architect | тест-стратегия, QA gate, риск-профиль |
| `/ux` | UX Expert | UX-флоу, UI-спеки, copy/IA |
| `/analyst` | Analyst | ресёрч, конкурентный анализ |
| `/sm` | Scrum Master | процесс, готовность истории, next steps |
| `/master` | BMad Master | универсальный помощник |
| `/orchestrator` | Orchestrator | координация ролей |

## Quick start

1. **Используйте как шаблон**
   ```bash
   git clone https://github.com/salacoste/antigravity-bmad-config.git my-project
   cd my-project
   rm -rf .git
   git init
   ```

2. **Убедитесь, что `.bmad-core` существует**

   Workflows ожидают BMad core в `.bmad-core/`.

   - Вариант A: установка/обновление через BMAD-METHOD
     ```bash
     npx bmad-method install -f
     ```
     Примеры с пресетами под IDE (опционально):
     ```bash
     npx bmad-method install -f -i codex
     npx bmad-method install -f -i cursor claude-code
     ```
   - Вариант B: “вендорните” `.bmad-core` в этот репозиторий (и закоммитьте для воспроизводимости).

3. **Стартуйте в Antigravity**
   - Запустите `/pm`, чтобы начать с требований и PRD.
   - Дальше агент подскажет следующий логичный шаг (например, `/architect`).

## Обслуживание (обновление workflows)

Если вы меняли `.bmad-core` (agents/tasks), перегенерируйте workflows:

```bash
python3 .gemini/transpose_bmad.py
```

## Структура репозитория

- `.agent/workflows/` — workflows Antigravity (`/pm`, `/dev`, `/qa`, ...)
- `.bmad-core/` — BMad core (agents/tasks/templates); нужен для workflows
- `AGENTS.md` — agent memory для Codex (генерируется BMAD-METHOD)
- `.gemini/transpose_bmad.py` — генерация workflows из `.bmad-core`
