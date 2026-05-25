const translations = window.translations || {};
let currentLang = localStorage.getItem('dc_lang') || 'es';
let currentTheme = localStorage.getItem('dc_theme') || 'light';

function t(key) {
  const langData = translations[currentLang] || translations['es'] || {};
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), langData);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  const mapping = [
    { attr: 'data-i18n', prop: 'textContent' },
    { attr: 'data-i18n-html', prop: 'innerHTML' },
    { attr: 'data-i18n-placeholder', prop: 'placeholder' },
    { attr: 'data-i18n-title', prop: 'title' },
    { attr: 'data-i18n-src', prop: 'src' }
  ];

  mapping.forEach(({ attr, prop }) => {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      const val = t(el.getAttribute(attr));
      if (val !== null) el[prop] = val;
    });
  });

  // Soporte para accesibilidad (aria-label)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = t(el.dataset.i18nAria);
    if (val !== null) el.setAttribute('aria-label', val);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (!translations[lang] || lang === currentLang) return;
  
  // Agregamos una clase para desvanecer el texto antes del cambio
  document.body.classList.add('lang-changing');
  
  setTimeout(() => {
    currentLang = lang;
    localStorage.setItem('dc_lang', lang);
    applyTranslations();
    
    // Quitamos la clase para que el nuevo texto aparezca suavemente
    document.body.classList.remove('lang-changing');
  }, 200);
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('dc_theme', currentTheme);
  applyTheme();
}

window.t = t;
window.applyTranslations = applyTranslations;
window.setLang = setLang;
window.toggleTheme = toggleTheme;

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  applyTheme();
  applyTranslations();
});
