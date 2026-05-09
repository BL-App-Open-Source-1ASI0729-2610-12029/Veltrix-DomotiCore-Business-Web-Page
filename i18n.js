const translations = {
  es: {
    nav: { about:"Nosotros", features:"Funciones", platform:"Plataforma", how:"¿Cómo funciona?", contact:"Contacto", cta:"Solicitar demo" },
    hero: {
      badge: "Tecnología IoT para hogares y PYMES peruanas",
      title: "Controla tu hogar o negocio desde <em>un solo lugar</em>",
      sub:   "DomotiCore centraliza, automatiza y monitorea todos tus dispositivos eléctricos en tiempo real. Sin complicaciones técnicas, sin estrés.",
      btnPrimary: "Ver la plataforma →",
      btnGhost:   "¿Cómo funciona?",
      stat1: "Dispositivos compatibles",
      stat2: "Control en tiempo real",
      stat3: "Ahorro energético promedio",
    },
    about: {
      tag:   "Sobre Veltrix",
      title: "Creado por estudiantes peruanos con visión global",
      p1:    "Somos una startup fundada por estudiantes de Ingeniería de Software de la UPC. Nuestro objetivo es que ninguna persona o negocio gestione sus dispositivos eléctricos de forma manual o desorganizada.",
      p2:    "Apostamos por un control centralizado, automatizado y accesible que mejore la eficiencia energética, la seguridad y la comodidad en el día a día.",
      upc:   "Universidad Peruana de Ciencias Aplicadas · UPC",
      card1: { title:"Nuestra misión",    text:"Democratizar la domótica para hogares y pequeñas empresas en Perú y Latinoamérica." },
      card2: { title:"Innovación local",  text:"Soluciones pensadas para la realidad peruana, accesibles y sin necesidad de conocimientos técnicos." },
      card3: { title:"Impacto sostenible",text:"Reducimos el consumo energético innecesario promoviendo hábitos eficientes y automatizados." },
    },
    features: {
      tag:  "Funcionalidades",
      title:"Todo lo que necesitas en una sola plataforma",
      sub:  "Gestiona, monitorea y automatiza sin esfuerzo ni conocimientos técnicos.",
      f1: { title:"Control remoto",           text:"Enciende o apaga cualquier dispositivo desde el dashboard, en tiempo real, desde donde estés." },
      f2: { title:"Programación de horarios", text:"Define reglas semanales para que tus dispositivos se gestionen solos sin intervención manual." },
      f3: { title:"Monitoreo energético",     text:"Visualiza el consumo en Watts por dispositivo y recibe reportes comparativos mensuales." },
      f4: { title:"Alertas inteligentes",     text:"Notificaciones push ante consumos inusuales, equipos olvidados encendidos o desconexiones." },
      f5: { title:"Escenas grupales",         text:'Crea escenas como "Cerrar negocio" para apagar todos los equipos con un solo toque.' },
      f6: { title:"Seguridad y auditoría",    text:"Historial completo de acciones con timestamp, control de usuarios y permisos por rol." },
    },
    preview: {
      tag:   "Interfaz",
      title: "Una plataforma intuitiva y potente",
      sub:   "Sin curva de aprendizaje. Diseñada para que cualquier usuario la domine desde el primer día.",
    },
    dash: {
      general:"General", dashboard:"Dashboard", devices:"Dispositivos",
      automations:"Automations", analysis:"Análisis", energy:"Energía",
      alerts:"Alertas", reports:"Reportes", config:"Config.", users:"Usuarios",
      card1:{lbl:"Dispositivos activos"}, card2:{lbl:"Apagados"},
      card3:{lbl:"Consumo total"}, card4:{lbl:"Alertas activas"},
      dev1:"Sala principal", dev2:"Computadora oficina",
      dev3:"Aire acondicionado", dev4:"Pasillo",
      online:"Online", offline:"Offline",
    },
    how: {
      tag:  "Proceso",
      title:"En 4 pasos, listo para usar",
      sub:  "Sin instalaciones complejas ni técnicos especializados.",
      s1: { title:"Conecta tu Gateway",      text:"Vincula el dispositivo Veltrix a tu red con un simple código MAC/ID." },
      s2: { title:"Registra dispositivos",   text:"Añade enchufes, focos u otros dispositivos escaneando tu red." },
      s3: { title:"Organiza ambientes",      text:"Agrupa dispositivos por sala, piso o área de tu negocio." },
      s4: { title:"Controla y automatiza",   text:"Programa horarios, activa escenas y monitorea desde el dashboard." },
    },
    test: {
      tag:   "Testimonios",
      title: "Lo que dicen nuestros usuarios",
      t1: { quote:'"Reduje mi factura de luz en casi un 25% el primer mes. La programación de horarios es increíblemente fácil de configurar."', role:"Propietario de tienda, Lima" },
      t2: { quote:'"Antes olvidaba apagar las luces de la oficina. Ahora tengo una escena de cierre que lo hace todo automáticamente. Genial."', role:"Administradora, San Isidro" },
      t3: { quote:'"La app es muy intuitiva. Cualquier persona del equipo puede usarla sin explicaciones. Los reportes de consumo son muy útiles."', role:"Gerente de PYME, Miraflores" },
    },
    cta: {
      title:"¿Listo para automatizar tu espacio?",
      sub:  "Únete a los hogares y negocios que ya controlan su energía con DomotiCore.",
      btn:  "Solicitar demo gratuita →",
    },
    contact: {
      tag:"Contacto", title:"Hablemos sin compromisos",
      sub:"Contáctanos y un asesor te guiará gratuitamente. También puedes solicitar una demo en vivo de la plataforma.",
      locLabel:"Ubicación", locVal:"Lima, Perú · Universidad Peruana de Ciencias Aplicadas",
      emailLabel:"Correo", waLabel:"WhatsApp",
      form: {
        name:"Nombre", namePh:"Tu nombre",
        email:"Correo electrónico",
        type:"Tipo de espacio",
        typeOpt0:"Selecciona...", typeOpt1:"Hogar", typeOpt2:"Pequeña empresa (PYME)", typeOpt3:"Oficina", typeOpt4:"Otro",
        msg:"Mensaje", msgPh:"Cuéntanos sobre tu caso...",
        submit:"Enviar consulta →",
        success:"✓ ¡Mensaje enviado! Te contactaremos pronto.",
        alert:"Por favor completa tu nombre y correo.",
      },
    },
    footer: {
      desc:"Plataforma IoT para el control y automatización de dispositivos en hogares y pequeñas empresas peruanas.",
      upc: "Proyecto académico · Ingeniería de Software · UPC",
      copy:"© 2025 Veltrix · DomotiCore. Todos los derechos reservados.",
      col1:{ title:"Producto",  l1:"Funciones",    l2:"Plataforma",    l3:"Cómo funciona",  l4:"Demo gratuita" },
      col2:{ title:"Empresa",   l1:"Nosotros",     l2:"Testimonios",   l3:"Blog",           l4:"Prensa" },
      col3:{ title:"Legal",     l1:"Privacidad",   l2:"Términos de uso", l3:"Seguridad" },
    },
  },

  en: {
    nav: { about:"About", features:"Features", platform:"Platform", how:"How it works", contact:"Contact", cta:"Request demo" },
    hero: {
      badge: "IoT technology for Peruvian homes & SMBs",
      title: "Control your home or business from <em>one single place</em>",
      sub:   "DomotiCore centralizes, automates and monitors all your electrical devices in real time. No technical hassle, no stress.",
      btnPrimary: "See the platform →",
      btnGhost:   "How does it work?",
      stat1: "Compatible devices",
      stat2: "Real-time control",
      stat3: "Average energy savings",
    },
    about: {
      tag:   "About Veltrix",
      title: "Built by Peruvian students with a global vision",
      p1:    "We are a startup founded by Software Engineering students at UPC. Our goal is to ensure no person or business manages their electrical devices manually or in a disorganized way.",
      p2:    "We believe in centralized, automated and accessible control that improves energy efficiency, security and daily comfort.",
      upc:   "Universidad Peruana de Ciencias Aplicadas · UPC",
      card1: { title:"Our mission",         text:"Democratize home automation for households and small businesses across Peru and Latin America." },
      card2: { title:"Local innovation",    text:"Solutions built for the Peruvian reality, accessible without any technical knowledge required." },
      card3: { title:"Sustainable impact",  text:"We reduce unnecessary energy consumption by promoting efficient and automated habits." },
    },
    features: {
      tag:  "Features",
      title:"Everything you need in a single platform",
      sub:  "Manage, monitor and automate effortlessly, no technical skills needed.",
      f1: { title:"Remote control",       text:"Turn any device on or off from the dashboard, in real time, from anywhere." },
      f2: { title:"Schedule automation",  text:"Set weekly rules so your devices manage themselves without manual intervention." },
      f3: { title:"Energy monitoring",    text:"Visualize consumption in Watts per device and receive monthly comparison reports." },
      f4: { title:"Smart alerts",         text:"Push notifications for unusual consumption, forgotten-on devices or disconnections." },
      f5: { title:"Group scenes",         text:'Create scenes like "Close business" to turn off all equipment with a single tap.' },
      f6: { title:"Security & audit",     text:"Full action log with timestamps, user management and role-based permissions." },
    },
    preview: {
      tag:   "Interface",
      title: "An intuitive and powerful platform",
      sub:   "No learning curve. Designed so any user can master it from day one.",
    },
    dash: {
      general:"General", dashboard:"Dashboard", devices:"Devices",
      automations:"Automations", analysis:"Analytics", energy:"Energy",
      alerts:"Alerts", reports:"Reports", config:"Settings", users:"Users",
      card1:{lbl:"Active devices"}, card2:{lbl:"Offline"},
      card3:{lbl:"Total consumption"}, card4:{lbl:"Active alerts"},
      dev1:"Living room lights", dev2:"Office computer",
      dev3:"Air conditioning", dev4:"Hallway lights",
      online:"Online", offline:"Offline",
    },
    how: {
      tag:  "Process",
      title:"Ready in 4 simple steps",
      sub:  "No complex installations or specialized technicians required.",
      s1: { title:"Connect your Gateway",   text:"Link the Veltrix device to your network using a simple MAC/ID code." },
      s2: { title:"Register devices",       text:"Add plugs, bulbs or other devices by scanning your network." },
      s3: { title:"Organize spaces",        text:"Group devices by room, floor or area of your home or business." },
      s4: { title:"Control & automate",     text:"Schedule routines, activate scenes and monitor from the dashboard." },
    },
    test: {
      tag:   "Testimonials",
      title: "What our users say",
      t1: { quote:'"I reduced my electricity bill by nearly 25% in the first month. The schedule automation is incredibly easy to set up."', role:"Store owner, Lima" },
      t2: { quote:'"I used to forget to turn off the office lights. Now I have a closing scene that does everything automatically. Great."', role:"Administrator, San Isidro" },
      t3: { quote:'"The app is very intuitive. Any team member can use it without instructions. The consumption reports are very useful."', role:"SMB Manager, Miraflores" },
    },
    cta: {
      title:"Ready to automate your space?",
      sub:  "Join the homes and businesses already managing their energy with DomotiCore.",
      btn:  "Request a free demo →",
    },
    contact: {
      tag:"Contact", title:"Let's talk, no strings attached",
      sub:"Reach out and an advisor will guide you for free. You can also request a live demo of the platform.",
      locLabel:"Location", locVal:"Lima, Peru · Universidad Peruana de Ciencias Aplicadas",
      emailLabel:"Email", waLabel:"WhatsApp",
      form: {
        name:"Name", namePh:"Your name",
        email:"Email address",
        type:"Space type",
        typeOpt0:"Select...", typeOpt1:"Home", typeOpt2:"Small business (SMB)", typeOpt3:"Office", typeOpt4:"Other",
        msg:"Message", msgPh:"Tell us about your case...",
        submit:"Send inquiry →",
        success:"✓ Message sent! We'll get back to you shortly.",
        alert:"Please fill in your name and email.",
      },
    },
    footer: {
      desc:"IoT platform for device control and automation in Peruvian homes and small businesses.",
      upc: "Academic project · Software Engineering · UPC",
      copy:"© 2025 Veltrix · DomotiCore. All rights reserved.",
      col1:{ title:"Product",   l1:"Features",   l2:"Platform",    l3:"How it works", l4:"Free demo" },
      col2:{ title:"Company",   l1:"About",      l2:"Testimonials",l3:"Blog",         l4:"Press" },
      col3:{ title:"Legal",     l1:"Privacy",    l2:"Terms of use",l3:"Security" },
    },
  },
};


let currentLang = localStorage.getItem('dc_lang') || 'es';

function t(key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), translations[currentLang]);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });

  // innerHTML (for tags like <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val !== null) el.innerHTML = val;
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (val !== null) el.placeholder = val;
  });

  // <select> options with data-i18n
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const val = t(opt.dataset.i18n);
    if (val !== null) opt.textContent = val;
  });

  // active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('dc_lang', lang);
  applyTranslations();
}

// Wire up buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Initial render
applyTranslations();
