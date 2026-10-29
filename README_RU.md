![Antigravity × BMad Method](assets/banner.jpg)

# Antigravity × BMad Method — шаблон конфигурации

Язык: русский • `README.md` (English)

Готовый к клонированию шаблон, который подключает **BMad Method** к
**Google Antigravity** нативным способом: **пиннированная** установка
BMAD с Antigravity-таргетами для скиллов, плагин-оркестратор и
языковые/командные пресеты — включая русскоязычный.

> **v2 (октябрь 2026).** Подход v1 (slash-команды `.agent/workflows` +
> транспонирование `.bmad-core`) выведен из эксплуатации: Antigravity
> отключил workflows **19.10.2026**, а BMAD ≥ 6 сам умеет ставить
> Antigravity-таргеты. См. [Миграция с v1](#миграция-с-v1).

## Что вы получаете

| Слой | Что | Где |
|---|---|---|
| **Пиннированная установка BMAD** | одна команда ставит `bmad-method` 6.12.4 со скиллами для обоих таргетов Antigravity (IDE/App `.agent/skills/`, CLI `.agents/skills/`) | `setup.sh` + `.bmad-version` |
| **Плагин-оркестратор** | скилл `/bmad-orchestrate` + два правила: маршрутизирует работу по персонам BMad (Clarify → Plan → Build → Learn), определяет состояние по артефактам, защищает рантайм | `.agents/plugins/antigravity-bmad/` |
| **Пресеты** | durable-конфиг командного слоя (`_bmad/custom/` — переживает обновления BMAD): английский (по умолчанию) и русский (общение на русском / артефакты на английском) | `presets/` |

## Требования

- **Antigravity**: приложение 2.0, IDE-расширения (VS Code/JetBrains/…) или CLI `agy`
- **Node ≥ 20.12**
- **uv + Python 3.11** — только для `bmad-build` / `bmad-build-auto` (setup предупредит и продолжит)

## Быстрый старт

```bash
git clone https://github.com/salacoste/antigravity-bmad-config.git my-project
cd my-project && rm -rf .git && git init
./setup.sh            # или: ./setup.sh russian
```

Затем откройте папку в Antigravity и запустите:

- `/bmad-orchestrate` — точка входа шаблона («начать проект»,
  «что дальше», передача работы между фазами)
- `/bmad-help` — навигационный скилл из upstream

Артефакты планирования (PRD, архитектура, эпики, стори) появляются в
`_bmad-output/`. Всё, что генерирует установщик,_gitignored; команда
`./setup.sh` повторно восстанавливает/обновляет состояние в любой момент.

## Скиллы BMad (что ставится)

**Персоны** — `/bmad-agent-analyst` (Mary), `/bmad-agent-pm` (John),
`/bmad-agent-ux-designer` (Sally), `/bmad-agent-architect` (Winston),
`/bmad-agent-dev` (Amelia).

**Планирование** — `bmad-product-brief`, `bmad-prfaq`, `bmad-prd`,
`bmad-ux`, `bmad-architecture`, `bmad-spec`, `bmad-create-epics-and-stories`,
`bmad-sprint-planning`, `bmad-project-context`, `bmad-brainstorming`,
`bmad-forge-idea`.

**Разработка** — `bmad-build`, `bmad-build-auto`, `bmad-code-review`,
`bmad-correct-course`, `bmad-qa-generate-e2e-tests`, `bmad-retrospective`,
`bmad-walkthrough`.

**Ядро** — `bmad-help`, `bmad-review`, `bmad-deep-recon`,
`bmad-advanced-elicitation`, `bmad-customize`, `bmad-party-mode`.

Полная документация: [bmadcode.com](https://bmadcode.com) •
[docs.bmad-method.org](https://docs.bmad-method.org)

## Добавить в существующий проект (без шаблона)

Скопируйте `.agents/plugins/antigravity-bmad/` в `.agents/plugins/` вашего
проекта и выполните пиннированную установку:

```bash
npx bmad-method@6.12.4 install --yes --modules bmm --tools antigravity,antigravity-cli
```

Копируйте плагин из **последнего release-тега** репозитория — так плагин
и пин останутся синхронными.

## Обновление и смена пина

```bash
make update                 # повторный setup (установщик видит существующую установку)
make verify-pin             # npm всё ещё отдаёт пиннированную версию?
make smoke-test             # симуляция свежего клона + проверка раскладки
```

Переход на новую версию BMAD: измените `.bmad-version`, запустите
`make smoke-test`, поправьте поломки. CI гоняет те же проверки на каждый
push и еженедельно.

## Миграция с v1

1. Со стороны Antigravity: workflows → skills — официальный
   [гайд миграции](https://antigravity.google/docs/migration/workflows-to-skills/).
2. Со стороны BMAD: v4 `.bmad-core` → v6 `_bmad/` — установщик сам
   обнаружит остатки v4 и предложит забэкапить; документы планирования
   переезжают в `_bmad-output/planning-artifacts/` (см. официальный
   [upgrade-to-v6 гайд](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/fr/how-to/upgrade-to-v6.md)).
3. Удалите остатки v1: `.agent/workflows/`, `.bmad-core/`,
   `.claude/commands/BMad/`, `.cursor/rules/bmad/`, `.gemini/commands/BMad/`,
   `transpose_bmad.py` и сгенерированный `AGENTS.md`.

## Структура репозитория

```
setup.sh / Makefile / .bmad-version / scripts/smoke-test.sh
presets/{english,russian}/            # исходники пресетов командного слоя
.agents/plugins/antigravity-bmad/     # скилл-оркестратор + правила (плагин)
.github/workflows/ci.yml              # проверка пина + smoke-тест
assets/                               # изображения
AGENTS.md                             # ориентация для кодинг-агентов (этот репо)
```

## Участие и лицензия

См. `CONTRIBUTING.md`. MIT — см. `LICENSE`. Сам BMad Method — отдельный
MIT-проект ([bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD));
этот репозиторий лишь пиннирует его и добавляет конфигурацию/обвязку.
