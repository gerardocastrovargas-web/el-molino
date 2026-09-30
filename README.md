# El Molino — Landing Page

Landing page premium desarrollada en React + Vite + Tailwind CSS, con Framer Motion y Lucide Icons.

## Ejecutar en local

```bash
npm install
npm run dev
```

Vite mostrará una URL local, normalmente `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
npm run preview
```

El build final queda en `dist/`.

## Estructura

- `src/components/Navbar.jsx` — navegación sticky + menú móvil.
- `src/components/Hero.jsx` — hero, CTAs y badges animados.
- `src/components/ProductCarousel.jsx` — carrusel responsive con 3 tarjetas visibles en desktop.
- `src/components/Story.jsx` — historia y lista animada con stagger.
- `src/components/Faq.jsx` — acordeón accesible de una sola apertura.
- `src/components/ContactFooter.jsx` — datos de contacto, formulario a WhatsApp y footer.
- `src/data/products.js` — catálogo editable.
- `src/data/faqs.js` — preguntas frecuentes editables.
- `public/assets/` — logo y fotografías reales proporcionadas.
- `public/reference/mockup.png` — mockup visual de referencia aprobado.

## Reemplazo de imágenes

La estructura usa los assets reales adjuntos en `public/assets/products`. Para el hero y composiciones editoriales se reutilizan temporalmente fotografías del catálogo como placeholders. Puedes reemplazarlas por fotografías finales sin modificar el layout.

## Contacto configurado

- Teléfono / WhatsApp: `+52 (686) 428 06 37`
- Correo: `contacto@elmolino.mx`
- Ubicación: Mexicali, Baja California

El formulario prepara el mensaje y abre WhatsApp en una pestaña nueva; no requiere backend.

## Vista estática inmediata (sin instalar dependencias)

También se incluye `static/`, una versión HTML/CSS/JS funcional que puedes abrir directamente o servir con cualquier servidor local:

```bash
cd static
python -m http.server 8080
```

Después abre `http://localhost:8080`.
