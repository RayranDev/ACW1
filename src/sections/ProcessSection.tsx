import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'SELECCIÓN',
    description: 'Elegimos solo los mejores granos desde el inicio.',
    image: '/images/proceso-1-seleccion.jpg',
  },
  {
    number: '2',
    title: 'LAVADO',
    description: 'Proceso que resalta la limpieza y dulzura.',
    image: '/images/proceso-2-lavado.jpg',
  },
  {
    number: '3',
    title: 'SECADO',
    description: 'Controlado para conservar características únicas.',
    image: '/images/proceso-3-secado.jpg',
  },
  {
    number: '4',
    title: 'QUINTA SELECCIÓN',
    description: 'Solo la mayor calidad llega a tu taza.',
    image: '/images/proceso-4-quinta.jpg',
  },
  {
    number: '5',
    title: 'TOSTIÓN',
    description: 'Media, para balancear acidez, cuerpo y dulzura.',
    image: '/images/proceso-5-tostion.jpg',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll('.process-step');
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
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
      id="proceso"
      ref={sectionRef}
      className="relative bg-bosque py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/proceso-1-seleccion.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-bosque/90" />

      <div className="relative section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-semibold tracking-wide">
              EL PROCESO QUE MARCA LA DIFERENCIA
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="process-step text-center group">
                {/* Image */}
                <div className="relative w-28 h-28 sm:w-24 sm:h-24 lg:w-20 lg:h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-dorado/40 group-hover:border-dorado transition-colors duration-300">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-bosque/30 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Step Number */}
                <div className="w-8 h-8 mx-auto -mt-10 mb-3 relative z-10 rounded-full bg-dorado flex items-center justify-center">
                  <span className="text-tierra text-xs font-bold">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-dorado text-sm font-semibold tracking-wider mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>

                {/* Arrow connector (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/3 -translate-x-1/2">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-dorado/40">
                      <path d="M0 6H20M20 6L15 1M20 6L15 11" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
