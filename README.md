# Amador – Café de nuestra tierra

Landing page de una sola página para Amador Café de Especialidad, un café 100% colombiano cultivado a 1600 m.s.n.m. en Moniquirá, Boyacá.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build
```

## Preview del build

```bash
npm run preview
```

## Deploy

- **Vercel**: Conecta el repo y apunta el root a `/`
- **Netlify**: Build command → `npm run build` | Publish directory → `dist`

## Stack Tecnológico

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3 + shadcn/ui
- GSAP + ScrollTrigger (animaciones)
- Lucide React (iconos)

## Estructura del Proyecto

```
src/
  components/     # Navigation, Footer, WhatsAppButton
  sections/       # Hero, Features, Products, Process, About, Testimonials, CTA
  hooks/          # useScrollAnimation
  lib/            # utils.ts (cn helper)
  App.tsx         # Composición principal
  index.css       # Variables CSS + estilos globales
public/
  images/         # Todas las imágenes generadas
  favicon.svg
  robots.txt
  sitemap.xml
```

## SEO Implementado

- Meta tags completos (description, keywords, author)
- Open Graph tags
- Twitter Card tags
- JSON-LD (CafeOrCoffeeShop + Product)
- robots.txt
- sitemap.xml

## Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones GSAP con ScrollTrigger
- ✅ Efecto parallax en hero y CTA
- ✅ Navegación fija con cambio al scroll
- ✅ Menú móvil con overlay
- ✅ Botón flotante de WhatsApp
- ✅ Cards de productos estilo polaroid
- ✅ Sección de proceso con imágenes
- ✅ Testimonios de clientes
- ✅ Formulario de newsletter
- ✅ Accesibilidad (aria-labels, roles semánticos)
- ✅ Reduced motion support
