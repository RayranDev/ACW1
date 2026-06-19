import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Star, Bean, Award, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Amador en Grano - 500g',
    description: '100% café de origen para resaltar su sabor auténtico.',
    price: '$45.000',
    image: '/images/product-grano-500.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amador en Grano - 250g',
    description: 'Presentación práctica para disfrutar cada día.',
    price: '$25.000',
    image: '/images/product-grano-250.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amador Molido - 500g',
    description: 'Frescura lista para preparar (Ideal para Prensa francesa, Chemex, V60).',
    price: '$45.000',
    image: '/images/product-molido-500.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amador Molido - 250g',
    description: 'Practicidad sin comprometer el sabor.',
    price: '$25.000',
    image: '/images/product-molido-250.jpg',
    rating: 5,
  },
];

const badges = [
  { icon: Bean, label: '100% COLOMBIANO' },
  { icon: Award, label: 'CAFÉ DE ESPECIALIDAD' },
  { icon: Flame, label: 'TOSTIÓN MEDIA' },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.product-card');
      cards.forEach((card, i) => {
        const rotation = i % 2 === 0 ? -3 : 3;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotation: rotation * 2 },
          {
            opacity: 1,
            y: 0,
            rotation,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative bg-crema py-16 lg:py-24 overflow-hidden"
    >
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/4 w-24 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 50 200" fill="none" stroke="currentColor" className="text-bosque w-full h-full">
          <path d="M25 0 Q40 50 25 100 Q10 150 25 200" strokeWidth="0.5" />
          <path d="M25 20 Q45 60 25 100" strokeWidth="0.5" />
          <circle cx="25" cy="30" r="3" />
          <circle cx="20" cy="70" r="2" />
          <circle cx="30" cy="120" r="2.5" />
        </svg>
      </div>
      <div className="absolute right-0 top-1/3 w-24 h-96 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 50 200" fill="none" stroke="currentColor" className="text-bosque w-full h-full">
          <path d="M25 0 Q40 50 25 100 Q10 150 25 200" strokeWidth="0.5" />
          <path d="M25 20 Q45 60 25 100" strokeWidth="0.5" />
          <circle cx="25" cy="30" r="3" />
          <circle cx="20" cy="70" r="2" />
          <circle cx="30" cy="120" r="2.5" />
        </svg>
      </div>

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <div>
              <p className="text-dorado text-xs tracking-[0.2em] font-medium mb-3">NUESTROS PRODUCTOS</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-tierra font-semibold leading-tight text-balance">
                Disfruta la pureza
                <br />
                de nuestro café.
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-tierra/70 text-sm leading-relaxed mb-6">
                Elaborado con variedad Castilla, selección Excelso y tostión media para garantizar la mejor experiencia. 
                El fabricante garantiza que es <span className="font-semibold text-tierra">100% café puro</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                {badges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 px-3 py-2 bg-bosque/5 rounded-sm">
                    <badge.icon className="w-4 h-4 text-bosque" strokeWidth={1.5} />
                    <span className="text-[10px] font-semibold tracking-wider text-tierra">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="product-card group"
                style={{ transform: `rotate(${i % 2 === 0 ? '-2' : '2'}deg)` }}
              >
                <div className="bg-white p-3 pb-5 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-crema-dark mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-1">
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: product.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-dorado text-dorado" />
                      ))}
                    </div>

                    <h3 className="font-display text-tierra text-sm font-semibold mb-1.5 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-tierra/60 text-xs leading-relaxed mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-display text-tierra text-lg font-semibold">
                        {product.price}
                      </span>
                    </div>

                    <button className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 bg-bosque text-white text-xs font-medium tracking-wider hover:bg-bosque-light transition-colors rounded-sm">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      AÑADIR AL CARRITO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
