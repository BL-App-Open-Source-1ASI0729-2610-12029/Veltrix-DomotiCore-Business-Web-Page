const translations = window.translations || {};
let currentLang = localStorage.getItem('dc_lang') || 'es';
let currentTheme = localStorage.getItem('dc_theme') || 'light';

function t(key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), translations[currentLang]);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val !== null) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (val !== null) el.placeholder = val;
  });

  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const val = t(opt.dataset.i18n);
    if (val !== null) opt.textContent = val;
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
