// Theme toggle (JS interactivity)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(mode) {
  if (mode === 'light') {
    root.classList.add('light');
    themeToggle.setAttribute('aria-pressed', 'true');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.remove('light');
    themeToggle.setAttribute('aria-pressed', 'false');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

// Init theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const next = root.classList.contains('light') ? 'dark' : 'light';
  setTheme(next);
});

// Mobile menu
const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');
menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// Projects filtering
const filterSelect = document.getElementById('filterSelect');
const projectsGrid = document.getElementById('projectsGrid');

filterSelect?.addEventListener('change', () => {
  const val = filterSelect.value;
  const cards = projectsGrid.querySelectorAll('.project');
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags') || '';
    const show = (val === 'all') || tags.split(' ').includes(val);
    card.style.display = show ? 'flex' : 'none';
  });
});

// Contact form (fake client-side validation/demo)
const form = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please complete all fields.';
    statusEl.style.color = '#ff7675';
    return;
  }
  statusEl.textContent = 'Message sent! (Demo)';
  statusEl.style.color = 'var(--accent-2)';
  form.reset();
});

// Back to top
const backToTop = document.getElementById('backToTop');
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
