/**
 * chrome.js — the single source of truth for site shell wiring.
 *
 * Nav links and footer data are array-typed props of the tk-* shell
 * components (attributes can't carry them), so they are set here once for
 * all six pages. Page copy lives in each page's HTML, never here.
 * Relative hrefs only — the site is served from a GitHub Pages subpath.
 */
const REPO = 'https://github.com/salacoste/antigravity-bmad-config';

const NAV_LINKS = [
  { value: 'home', label: 'Home', href: './index.html' },
  { value: 'quick-start', label: 'Quick Start', href: './quick-start.html' },
  { value: 'components', label: 'Components', href: './components.html' },
  { value: 'migration', label: 'Migration', href: './migration.html' },
  { value: 'presets', label: 'Presets', href: './presets.html' },
  { value: 'about', label: 'About', href: './about.html' },
];

const FOOTER_COLUMNS = [
  {
    title: 'Project',
    links: [
      { label: 'Repository', href: REPO },
      { label: 'Issues', href: `${REPO}/issues` },
      { label: 'Discussions', href: `${REPO}/discussions` },
      { label: 'Contributing', href: `${REPO}/blob/main/CONTRIBUTING.md` },
      { label: 'Security', href: `${REPO}/blob/main/SECURITY.md` },
    ],
  },
  {
    title: 'Upstream docs',
    links: [
      { label: 'BMad Method docs', href: 'https://docs.bmad-method.org' },
      { label: 'BMad on GitHub', href: 'https://github.com/bmad-code-org/BMAD-METHOD' },
      { label: 'Antigravity docs', href: 'https://antigravity.google/docs/' },
      { label: 'Workflows → skills', href: 'https://antigravity.google/docs/migration/workflows-to-skills/' },
    ],
  },
];

const FOOTER_QUICK_LINKS = [
  { label: 'Quick Start', href: './quick-start.html' },
  { label: 'Components', href: './components.html' },
  { label: 'Migration', href: './migration.html' },
  { label: 'Presets', href: './presets.html' },
  { label: 'About', href: './about.html' },
];

const page = document.body.dataset.page || '';

customElements.whenDefined('tk-navbar').then(() => {
  const nav = document.querySelector('.site-navbar');
  if (nav) {
    nav.links = NAV_LINKS;
    nav.activeValue = page;
  }
});

customElements.whenDefined('tk-footer').then(() => {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;
  footer.columns = FOOTER_COLUMNS;
  footer.quickLinks = FOOTER_QUICK_LINKS;

  const legal = document.createElement('p');
  legal.className = 'footer-legal';
  legal.innerHTML =
    'MIT license · BMad Method by its upstream authors · ' +
    'Built with <a href="https://github.com/salacoste/protect-auto-ui-kit" rel="noopener">protect-auto-ui-kit</a>';
  footer.append(legal);
});
