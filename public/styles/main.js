document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');
  
  if (steps.length > 0) {
    // Abrir el primer paso por defecto
    steps[0].classList.add('active');

    steps.forEach(step => {
      step.addEventListener('click', () => {
        // Quitar 'active' de todos los demás
        steps.forEach(s => s.classList.remove('active'));
        
        // Agregar 'active' al seleccionado
        step.classList.add('active');
      });
    });
  }
});