#!/usr/bin/env bash
#
# Smoke test: reproduce what a fresh user gets after cloning this template.
# Copies the repo into a scratch dir (without git/runtime dirs), runs
# setup.sh there, asserts the resulting layout.
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/abm-smoke.XXXXXX")"
trap 'rm -rf "$TMP"' EXIT

echo "── copying template into $TMP"
# cp + explicit removals: tar/rsync --exclude patterns match path components
# anywhere (would also drop presets/*/_bmad), so keep the copy deterministic.
cp -R "$SCRIPT_DIR/." "$TMP/"
rm -rf "$TMP/.git" "$TMP/_bmad" "$TMP/_bmad-output" \
       "$TMP/.agent" "$TMP/.agents/skills" "$TMP/.omc" "$TMP/.claude"

echo "── running setup.sh (non-interactive, russian preset — also covers preset apply)"
( cd "$TMP" && PRESET=russian ./setup.sh --yes ) >"$TMP/setup.log" 2>&1 || {
  echo "setup.sh FAILED — tail of log:"; tail -30 "$TMP/setup.log"; exit 1; }
tail -5 "$TMP/setup.log"

fail=0
check() { # check <description> <path>
  if [ -e "$2" ]; then echo "  ✓ $1"; else echo "  ✗ MISSING: $1 ($2)"; fail=1; fi
}

echo "── asserting layout"
check "BMAD core config"          "$TMP/_bmad/config.toml"
check "antigravity skills target" "$TMP/.agent/skills/bmad-help/SKILL.md"
check "antigravity-cli skills"    "$TMP/.agents/skills/bmad-help/SKILL.md"
check "persona skill (PM=John)"   "$TMP/.agent/skills/bmad-agent-pm/SKILL.md"
check "preset: team config"       "$TMP/_bmad/custom/config.toml"
check "preset: PM persona RU"     "$TMP/_bmad/custom/bmad-agent-pm.toml"
check "plugin manifest"           "$TMP/.agents/plugins/antigravity-bmad/plugin.json"
check "orchestrator skill"        "$TMP/.agents/plugins/antigravity-bmad/skills/bmad-orchestrate/SKILL.md"

if ! grep -q 'communication_language = "Russian"' "$TMP/_bmad/custom/config.toml"; then
  echo "  ✗ preset marker/values not applied"; fail=1
else
  echo "  ✓ preset values applied"
fi

[ "$fail" -eq 0 ] && echo "SMOKE TEST PASSED" || { echo "SMOKE TEST FAILED"; exit 1; }
