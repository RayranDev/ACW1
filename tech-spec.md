# Tech Spec - Amador Café de nuestra tierra

## Dependencias

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | ^19.2.0 | Framework UI |
| react-dom | ^19.2.0 | Renderizado DOM |
| typescript | ~5.9.3 | Tipado estático |
| vite | ^7.2.4 | Build tool y dev server |
| @vitejs/plugin-react | ^5.1.1 | Plugin React para Vite |
| tailwindcss | ^3.4.19 | Framework CSS utilitario |
| autoprefixer | ^10.4.23 | Prefijos CSS automáticos |
| postcss | ^8.5.6 | Procesamiento CSS |
| tailwindcss-animate | ^1.0.7 | Animaciones CSS para Tailwind |
| gsap | ^3.15.0 | Animaciones avanzadas y scroll |
| @gsap/react | ^2.1.2 | Integración GSAP con React |
| lucide-react | ^0.562.0 | Iconos SVG |
| clsx | ^2.1.1 | Concatenación condicional de clases |
| tailwind-merge | ^3.6.0 | Merge de clases Tailwind sin conflictos |
| class-variance-authority | ^0.7.1 | Variantes de componentes |
| embla-carousel-react | ^8.6.0 | Carruseles (disponible si se necesita) |
| react-hook-form | ^7.70.0 | Formularios (newsletter) |
| zod | ^4.3.5 | Validación de esquemas |
| sonner | ^2.0.7 | Notificaciones/toasts |
| react-router | ^7.6.1 | Router (estructura base) |

## Inventario de Secciones

| Sección | Descripción | Animación |
|---------|-------------|-----------|
| HeroSection | Full-viewport, imagen de montañas, título, CTAs | Parallax en capas, fade-in escalonado |
| FeaturesSection | 4 características con iconos (Origen, Proceso, Perfil, Pasión) | Fade-in + stagger cards |
| ProductsSection | 4 tarjetas de productos estilo polaroid | Rotación exagerada → asentada, fade-in |
| ProcessSection | 5 pasos del proceso del café | Fade-in + stagger con scale |
| AboutSection | Historia de la familia, foto, firma | Slide desde izquierda (imagen) y derecha (texto) |
| TestimonialsSection | 3 testimonios de clientes | Fade-in + rotación sutil, stagger |
| CTASection | Llamado final con fondo de montañas | Parallax background, fade-in content |
| Footer | Links, contacto, redes, newsletter | - |

## Inventario de Componentes Reutilizables

| Componente | Usado por | Notas |
|------------|-----------|-------|
| Navigation | App | Fixed, transparente → sólido al scroll, menú móvil overlay |
| Footer | App | 4 columnas: brand, links, contacto, social+newsletter |
| WhatsAppButton | App | Botón flotante con animación float |

## Tabla de Animaciones

| Animación | Librería | Enfoque | Complejidad |
|-----------|----------|---------|-------------|
| Hero parallax | GSAP + ScrollTrigger | Capas a diferente velocidad | Media |
| Nav scroll | React state + CSS | Cambio de clase al superar hero | Baja |
| Section reveals | GSAP + ScrollTrigger | Opacity 0→1 + y 40→0, stagger | Media |
| Polaroid cards | GSAP + ScrollTrigger | Rotación exagerada que se asienta | Media |
| Float decorativo | CSS keyframes | TranslateY ±8px infinito | Baja |
| Process steps | GSAP + ScrollTrigger | Fade + scale + stagger | Media |
| About section | GSAP + ScrollTrigger | Slide desde lados opuestos | Media |
| Testimonial cards | GSAP + ScrollTrigger | Fade + rotación sutil | Media |
| CTA parallax | GSAP + ScrollTrigger | Background parallax | Baja |
| Reduced motion | CSS media query | Desactiva animaciones | Baja |

## Design Tokens

### Colores
| Token | Valor | Uso |
|-------|-------|-----|
| tierra | #2c1810 | Texto principal |
| bosque | #1e3a2e | Fondos oscuros, nav sólido |
| bosque-light | #2d5a3d | Hover en botones bosque |
| crema | #f8f5f0 | Fondo principal |
| dorado | #c8a96e | Acentos, iconos, CTAs |
| café | #6b4423 | Elementos de acento café |

### Tipografía
| Token | Fuente | Uso |
|-------|--------|-----|
| font-display | Playfair Display | Títulos, headlines |
| font-body | Inter | Cuerpo, botones, navegación |
| font-accent | Cormorant Garamond | Firma, elementos decorativos |

### Sombras
| Token | Valor | Uso |
|-------|-------|-----|
| polaroid | 0 8px 30px rgba(0,0,0,0.12) | Tarjetas de producto |
| polaroid-hover | 0 16px 50px rgba(0,0,0,0.2) | Hover en tarjetas |
| card | 0 4px 20px rgba(0,0,0,0.08) | Tarjetas testimoniales |
| card-hover | 0 12px 40px rgba(0,0,0,0.15) | Hover en tarjetas |
