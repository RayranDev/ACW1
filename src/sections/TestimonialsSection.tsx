import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'María G.',
    avatar: '/images/avatar-maria.jpg',
    rating: 5,
    text: 'Un café con aroma increíble y sabor auténtico. Se nota la calidad desde el primer sorbo.',
  },
  {
    id: 2,
    name: 'Carlos P.',
    avatar: '/images/avatar-carlos.jpg',
    rating: 5,
    text: 'Nuestro café favorito en casa. Perfecto para la prensa francesa, 100% recomendado.',
  },
  {
    id: 3,
    name: 'Laura M.',
    avatar: '/images/avatar-laura.jpg',
    rating: 5,
    text: 'Me encanta apoyar marcas colombianas que cuidan cada detalle. ¡Excelente producto!',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.testimonial-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, rotation: -2 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-crema py-16 lg:py-24 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 50 100" fill="none" stroke="currentColor" className="text-bosque w-full h-full">
          <path d="M25 0 C35 25 15 50 25 100" strokeWidth="0.5" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
          <circle cx="20" cy="60" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 50 100" fill="none" stroke="currentColor" className="text-bosque w-full h-full">
          <path d="M25 0 C35 25 15 50 25 100" strokeWidth="0.5" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
          <circle cx="20" cy="60" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-dorado text-xs tracking-[0.2em] font-medium mb-3">LO QUE DICEN NUESTROS CLIENTES</p>
            <h2 className="font-display text-3xl sm:text-4xl text-tierra font-semibold">
              Opiniones de nuestros clientes
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white p-6 lg:p-8 shadow-card relative"
                style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-dorado/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-dorado text-dorado" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-tierra/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-crema-dark">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display text-tierra text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-tierra/50 text-xs">Cliente verificado</p>
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
