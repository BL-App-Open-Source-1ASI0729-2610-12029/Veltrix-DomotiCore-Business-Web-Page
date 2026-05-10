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
      if (cards[i]) cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });
  });
}
