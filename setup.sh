#!/usr/bin/env bash
#
# antigravity-bmad-config — setup
#
# Installs the pinned BMAD Method (see .bmad-version) with native
# Antigravity targets, then applies the selected language preset to
# the durable team layer (_bmad/custom/ — never touched by the
# BMAD installer).
#
# Usage:
#   ./setup.sh [english|russian] [--yes]
#   PRESET=russian ./setup.sh --yes     # non-interactive (CI)
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BMAD_VERSION="$(tr -d '[:space:]' < "$SCRIPT_DIR/.bmad-version")"
PRESET="${PRESET:-english}"
ASSUME_YES=0

# ── Arguments ─────────────────────────────────────────────────────
for arg in "$@"; do
  case "$arg" in
    english|russian) PRESET="$arg" ;;
    --yes|-y)        ASSUME_YES=1 ;;
    *) echo "Unknown argument: $arg (expected: english|russian|--yes)" >&2; exit 2 ;;
  esac
done

PRESET_SRC="$SCRIPT_DIR/presets/$PRESET"
if [ ! -d "$PRESET_SRC/_bmad/custom" ]; then
  echo "ERROR: preset '$PRESET' not found in presets/" >&2
  exit 2
fi

log()  { printf '\033[1;34m▸\033[0m %s\n' "$*"; }
ok()   { printf '\033[1;32m✓\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m!\033[0m %s\n' "$*"; }

# ── Prerequisites ─────────────────────────────────────────────────
log "Checking prerequisites"
NODE_MAJOR="$(node -v 2>/dev/null | sed -E 's/v([0-9]+)\..*/\1/' || echo 0)"
NODE_MINOR="$(node -v 2>/dev/null | sed -E 's/v[0-9]+\.([0-9]+)\..*/\1/' || echo 0)"
if [ "$NODE_MAJOR" -lt 20 ] || { [ "$NODE_MAJOR" -eq 20 ] && [ "$NODE_MINOR" -lt 12 ]; }; then
  echo "ERROR: Node >= 20.12 required (found: $(node -v 2>/dev/null || 'none'))" >&2
  exit 1
fi
ok "Node $(node -v)"
if ! command -v uv >/dev/null 2>&1; then
  warn "uv not found — BMAD installs, but bmad-build / bmad-build-auto will halt."
  warn "  Install: https://docs.astral.sh/uv/ (needs Python 3.11+)"
else
  ok "uv $(uv --version 2>/dev/null | awk '{print $2}')"
fi

# ── Install pinned BMAD ───────────────────────────────────────────
log "Installing bmad-method@$BMAD_VERSION (modules: bmm; tools: antigravity, antigravity-cli)"
( cd "$SCRIPT_DIR" && npx -y "bmad-method@$BMAD_VERSION" install \
    --yes --modules bmm --tools antigravity,antigravity-cli )
ok "BMAD core installed to _bmad/, skills → .agent/skills/ and .agents/skills/"

# ── Apply preset to the durable team layer ────────────────────────
MARKER="# preset: antigravity-bmad-config/$PRESET"

apply_file() {
  src="$1"; dst="$2"
  name="$(basename "$src")"

  if [ ! -f "$dst" ]; then
    cp "$src" "$dst"; ok "preset → _bmad/custom/$name (created)"; return
  fi

  if grep -qF "preset: antigravity-bmad-config/" "$dst"; then
    if cmp -s "$src" "$dst"; then ok "preset → _bmad/custom/$name (up to date)"; return; fi
    if [ "$ASSUME_YES" -eq 1 ]; then
      cp "$src" "$dst"; ok "preset → _bmad/custom/$name (re-applied)"; return
    fi
    printf '  _bmad/custom/%s was modified since the preset was applied. Overwrite? [y/N] ' "$name"
    read -r answer </dev/tty || answer=n
    case "$answer" in y|Y) cp "$src" "$dst"; ok "preset → _bmad/custom/$name (re-applied)";;
                       *)  warn "skipped _bmad/custom/$name — merge manually from $src";;
    esac
    return
  fi

  if grep -Eq '^[^#[:space:]]' "$dst"; then
    warn "_bmad/custom/$name has custom content — left untouched."
    warn "  Merge manually if needed: $src"
  else
    cp "$src" "$dst"; ok "preset → _bmad/custom/$name (replaced installer starter)"
  fi
}

log "Applying preset '$PRESET' to _bmad/custom/ (team layer, installer-safe)"
find "$PRESET_SRC/_bmad/custom" -name '*.toml' -maxdepth 1 | sort | while read -r f; do
  apply_file "$f" "$SCRIPT_DIR/_bmad/custom/$(basename "$f")"
done

# ── Next steps ────────────────────────────────────────────────────
cat <<EOF

Done. Next steps:

  1. Open this folder in Antigravity (2.0 App, IDE extension, or agy CLI).
  2. Start with  /bmad-orchestrate  (this template's orchestrator skill)
     or  /bmad-help  (upstream orientation skill).
  3. Planning artifacts will land in  _bmad-output/ .

Preset '$PRESET' applied. Pinned BMAD version: $BMAD_VERSION.
To update later:  ./setup.sh $PRESET   (installer detects the existing install)
To change the pin: edit .bmad-version  (see README → Updating).

EOF
