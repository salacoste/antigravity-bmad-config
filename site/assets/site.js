/**
 * site.js — site-local behavior (§E kit gaps).
 *
 * Copy buttons for code blocks: event-delegated, clipboard API with a
 * legacy fallback, and an aria-live status so the "Copied" state is
 * announced. No framework, no dependencies.
 */
const COPY_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
  '<rect x="5" y="5" width="8" height="8" rx="1.5"/>' +
  '<path d="M11 5V4a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 2 4v6A1.5 1.5 0 0 0 3.5 11.5H4"/></svg>';
const CHECK_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M3 8.5 6.5 12 13 4.5"/></svg>';

function setCopied(btn, copied) {
  btn.dataset.state = copied ? 'copied' : '';
  btn.innerHTML = (copied ? CHECK_ICON : COPY_ICON) + `<span>${copied ? 'Copied' : 'Copy'}</span>`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API unavailable (http:, older browsers) — execCommand fallback.
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;left:-9999px';
    document.body.append(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const block = btn.closest('.code-block');
  const code = block?.querySelector('code');
  if (!code) return;
  copyText(code.textContent).then((ok) => {
    if (!ok) return;
    setCopied(btn, true);
    setTimeout(() => setCopied(btn, false), 1600);
  });
});

// Initialize button markup (icons + label) once DOM is ready.
const init = () =>
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    if (!btn.querySelector('span')) setCopied(btn, false);
  });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
