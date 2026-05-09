// Menu
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

// Form contact
function sendForm() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('fe').value.trim();
  // Use translated alert message
  if (!n || !e) { alert(t('contact.form.alert')); return; }
  const msg = document.getElementById('smsg');
  msg.style.display = 'block';
  document.getElementById('fn').value = '';
  document.getElementById('fe').value = '';
  document.getElementById('fs').value = '';
  document.getElementById('fm').value = '';
  setTimeout(() => { msg.style.display = 'none'; }, 5000);
}


const sections   = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--blue)' : '';
  });
});


const testGrid = document.getElementById('testGrid');
const testDots = document.querySelectorAll('.test-dot');
if (testGrid && testDots.length) {
  testGrid.addEventListener('scroll', () => {
    const idx = Math.round(testGrid.scrollLeft / testGrid.offsetWidth * testDots.length);
    testDots.forEach((d, i) => d.classList.toggle('active', i === Math.min(idx, testDots.length - 1)));
  });
  testDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const cards = testGrid.querySelectorAll('.test-card');
      if (cards[i]) cards[i].scrollIntoView({ behavior:'smooth', block:'nearest', inline:'start' });
    });
  });
}
