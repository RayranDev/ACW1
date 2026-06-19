import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, Droplets, Coffee, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Mountain,
    title: 'ORIGEN',
    description: 'Moniquirá, Boyacá. (Finca Bernabé Moreno).',
  },
  {
    icon: Droplets,
    title: 'PROCESO',
    description: 'Lavado. Altura 1600 m.s.n.m.',
  },
  {
    icon: Coffee,
    title: 'PERFIL DE TAZA',
    description: 'Panela, azúcar morena, frutos amarillos y frutos secos.',
  },
  {
    icon: Heart,
    title: 'PASIÓN',
    description: 'Tradición, familia y origen en cada detalle.',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.feature-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nuestro-cafe"
      ref={sectionRef}
      className="relative bg-bosque py-16 lg:py-20 overflow-hidden"
    >
      {/* Decorative leaf patterns */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-dorado">
          <path d="M50 0 C20 0 0 30 0 60 C0 85 20 100 50 100 C80 100 100 85 100 60 C100 30 80 0 50 0 Z M50 90 C30 90 15 75 15 55 C15 35 35 15 50 10 C65 15 85 35 85 55 C85 75 70 90 50 90 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5 rotate-180">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-dorado">
          <path d="M50 0 C20 0 0 30 0 60 C0 85 20 100 50 100 C80 100 100 85 100 60 C100 30 80 0 50 0 Z M50 90 C30 90 15 75 15 55 C15 35 35 15 50 10 C65 15 85 35 85 55 C85 75 70 90 50 90 Z" />
        </svg>
      </div>

      <div className="section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-dorado/40 flex items-center justify-center group-hover:bg-dorado/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-dorado" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-dorado text-sm font-semibold tracking-widest mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
