(function initReveal() {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealEls = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('reveal-visible');
        } else {
            observer.observe(el);
        }
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    if (steps.length > 0) {
        // Activamos el primer paso por defecto al cargar la página
        steps[0].classList.add('active');

        steps.forEach(step => {
            // Escuchamos el clic en todo el contenedor del paso
            step.addEventListener('click', () => {
                // Si ya está activo, no hacemos nada
                if (step.classList.contains('active')) return;

                // Removemos la clase 'active' de todos los pasos
                steps.forEach(s => s.classList.remove('active'));

                // Se la agregamos al paso al que le acabamos de hacer clic
                step.classList.add('active');
            });
        });
    }

    // Lógica del Dropdown de Idiomas
    const langTrigger = document.getElementById('langTrigger');
    const langDropdown = document.getElementById('langDropdown');
    const langBtns = document.querySelectorAll('.lang-btn');

    if (langTrigger && langDropdown) {
        langTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        // Cerrar al elegir idioma
        langBtns.forEach(btn => btn.addEventListener('click', () => langDropdown.classList.remove('open')));

        // Cerrar al hacer clic fuera
        document.addEventListener('click', () => langDropdown.classList.remove('open'));
    }
});