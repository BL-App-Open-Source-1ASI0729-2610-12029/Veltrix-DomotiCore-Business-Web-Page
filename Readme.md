# DomotiCore – Landing Page Veltrix

Página de presentación oficial de **DomotiCore**, una plataforma de domótica inteligente para hogares y PYMES peruanas, desarrollada por estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC).

---

## Descripción del Proyecto

DomotiCore es una solución IoT que centraliza, automatiza y monitorea dispositivos eléctricos en tiempo real. Este landing page tiene las funcionalidades, beneficios y propuesta de valor de la plataforma de manera responsive y multiidioma.

---

##  Características Principales

###  Multiidioma (i18n)
- Soporte completo para **Español** y **English**
- Sistema de traducciones dinámicas basado en atributos `data-i18n`
- Selector de idioma en navegación con banderas (ES /  EN)
- HTML

### Diseño Responsivo
- Navegación adaptable con menú en móvil
- Layout flexible con CSS Grid y Flexbox
- Optimizado para escritorio, tablet y dispositivos móviles

### Navegación Inteligente
- Menú fijo con scroll spy automático
- Desplazamiento entre secciones
- Detección de sección activa mientras se hace scroll
- Menú que se cierra al hacer clic en un enlace

### Secciones del Landing

1. **Hero** - Presentación principal con estadísticas clave
2. **Nosotros** - Historia y visión de Veltrix con tarjetas destacadas
3. **Funciones** - Showcase de 6 características principales
4. **Plataforma** - Vista previa del dashboard
5. **¿Cómo funciona?** - Explicación del funcionamiento
6. **Testimonios** - Carrusel interactivo de clientes
7. **CTA Final** - Llamada a la acción
8. **Contacto** - Formulario de contacto

### Elementos Visuales
- Blobs y dots animados en hero
- Badges y etiquetas de sección
- Tarjetas con animaciones hover
- Carrusel de testimonios con dots de navegación

---

## Tecnologías Utilizadas

### Frontend Stack

| Tecnología | Descripción |
|-----------|------------|
| **HTML** | Estructura semántica con etiquetas modernas |
| **CSS** | Estilos avanzados con variables CSS personalizadas |
| **JavaScript Vanilla** | Interactividad sin dependencias externas |
| **Google Fonts** | Tipografías (Plus Jakarta Sans, Space Grotesk) |

### Características Técnicas

- **Variables CSS Personalizadas** - Sistema de diseño (colores, espaciado, etc.)
- **CSS Flexbox & Grid** - Layouts
- **Backdrop Filter** - Efectos de blur en navegación
- **Smooth Scroll Behavior** - Scroll automático suave en navegadores
- **Event Listeners DOM** - Manipulación dinámica del contenido
- **Data Attributes** - Vinculación de traducciones sin JavaScript intruso

---

## Estructura del Proyecto

```
Veltrix-DomotiCore-Business-Web-Page/
├── index.html                 # Estructura principal del landing
├── Readme.md                  # Este archivo
│
└── public/
    ├── assets/
    │   └── images/           # Imágenes y media
    │
    ├── i18n/
    │   └── i18n.js          # Sistema de   internacionalización (ES/EN)
    │
    ├── js/
    │   └── main.js          # Lógica interactiva (menu, formulario, scroll-spy)
    │
    └── styles/
        └── styles.css       # Estilos globales y componentes
```

---

## Funcionalidades Implementadas

### JavaScript (main.js)

#### 1. **Menú**
```javascript
- Toggle de clase 'open' en navLinks
- Cierre automático al seleccionar un enlace
- Accesibilidad con aria-label
```

#### 2. **Formulario de Contacto**
```javascript
- Validación de campos (nombre y email requeridos)
- Limpieza de inputs tras envío
- Mensaje de confirmación que desaparece en 5 segundos
- Mensajes traducidos dinámicamente
```

#### 3. **Scroll Spy**
```javascript
- Detecta sección actual mientras se hace scroll
- Resalta enlace de navegación correspondiente (color azul)
- Offset de 120px para mejor precisión
```

#### 4. **Carrusel de Testimonios**
```javascript
- Scroll horizontal controlado por dots
- Puntos de navegación que se activan dinámicamente
- Click en dot lleva al testimonial correspondiente
- Comportamiento smooth
```

### CSS (styles.css)

#### Paleta de Colores
```css
--blue: #1E40AF              /* Azul principal */
--blue-dark: #1E3A8A         /* Azul oscuro */
--blue-mid: #3B82F6          /* Azul medio */
--accent: #882D00            /* Naranja/óxido */
--navy: #0F172A              /* Azul muy oscuro */
--gray-dark/mid: Variables grises
```

#### Componentes Clave
- **Navegación** - Fixed position con backdrop blur
- **Hero** - Sección grande con blobs animados
- **Cards** - Layouts de contenido reutilizables
- **Botones** - Dos estilos (primary y ghost)
- **Badges** - Etiquetas de estado/categoría
- **Formulario** - Inputs y textarea estilizados

### i18n.js

#### Estructura de Traducción
```javascript
const translations = {
  es: { /* Todos los textos en español */ },
  en: { /* Todos los textos en inglés */ }
}
```

#### Secciones Traducidas
- **nav** - Navegación principal
- **hero** - Sección principal
- **about** - Acerca de Veltrix
- **features** - Funcionalidades
- **preview** - Interfaz
- **dash** - Dashboard
- **how** - ¿Cómo funciona?
- **testimonials** - Testimonios
- **contact** - Contacto

#### Cómo Funciona
1. Botones de idioma con `data-lang` = "es" o "en"
2. Elementos con `data-i18n="ruta.clave"` se reemplazan automáticamente
3. `data-i18n-html` permite HTML en traducción (ej: `<em>`)
4. Función `t()` recupera traducción actual

---

## Secciones Detalladas

### Hero
- Badge con indicador animado
- Título dinámico con HTML (énfasis en palabras clave)
- Subtítulo descriptivo
- Dos botones CTA (primary y ghost)
- Estadísticas: 50+ dispositivos, 100% control real-time, 30% ahorro

### About (Nosotros)
- Historia de Veltrix
- Tres tarjetas: Misión, Innovación Local, Impacto Sostenible
- Badge UPC

### Features (Funciones)
- 6 características principales con títulos e iconos emoji
- Control remoto
- Programación de horarios
- Monitoreo energético
- Alertas inteligentes
- Escenas grupales
- Seguridad y auditoría

### Platform (Plataforma)
- Vista previa del dashboard
- Menú lateral con opciones
- Cards informativos (dispositivos, consumo, alertas)
- Listado de dispositivos con estado (Online/Offline)

### Testimonials (Testimonios)
- Carrusel horizontal scrollable
- Cards con foto, nombre, cargo y testimonio
- Dots de navegación interactivos
- Scroll suave entre testimonios

### Contact (Contacto)
- Formulario con 4 campos: Nombre, Email, Empresa, Mensaje
- Validación cliente-side
- Mensajes de confirmación traducidos
- CTA destacada

---

## Características Técnicas Avanzadas

### CSS Variables System
Implementa un sistema de diseño escalable con variables CSS personalizadas para:
- Colores (blue, accent, gray, etc.)
- Tipografías (Plus Jakarta Sans, Space Grotesk)
- Espaciado y tamaños
- Bordes y sombras

### Responsive Design
- Breakpoints optimizados para móvil, tablet y desktop
- Menú en dispositivos pequeños
- Grid layouts flexibles
- Images responsivas

### Accesibilidad
- Etiquetas semánticas HTML
- `aria-label` en botónes
- Contraste adecuado de colores
- Navegación teclado-friendly

### Performance
- CSS compilado eficientemente
- JavaScript sin dependencias externas
- Fuentes de Google Fonts optimizadas
- Lazy loading compatible

---

## 👥 Créditos

**Desarrollado por:** Veltrix  
**Basado en:** UPC - Universidad Peruana de Ciencias Aplicadas  
**Proyecto:** DomotiCore - IoT Domótico Platform

---

**Última actualización:** Abril 2026
