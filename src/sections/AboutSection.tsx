import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        content.children,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre-nosotros"
      ref={sectionRef}
      className="relative bg-white py-16 lg:py-24 overflow-hidden"
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div ref={imageRef} className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="/images/family-founders.jpg"
                  alt="Familia Hernández - Fundadores de Amador Café"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bosque/20 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-dorado/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-dorado" />
            </div>

            {/* Content */}
            <div ref={contentRef} className="space-y-6">
              <p className="text-dorado text-xs tracking-[0.3em] font-medium">
                TRADICIÓN • FAMILIA • ORIGEN
              </p>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-tierra font-semibold leading-tight">
                Detrás de cada taza,
                <br />
                <span className="text-bosque">hay una familia.</span>
              </h2>

              <div className="space-y-4 text-tierra/70 text-sm leading-relaxed">
                <p>
                  Amador - Café de nuestra tierra nace del amor por nuestra gente y nuestra tradición 
                  cafetera en Boyacá. Trabajamos con pasión para llevar hasta tu hogar un café de 
                  especialidad que te conecta con lo auténtico.
                </p>
                <p>
                  Cada grano es cultivado a 1600 metros sobre el nivel del mar en las fértiles tierras 
                  de Moniquirá, donde el clima y la altura crean las condiciones perfectas para un 
                  café excepcional con notas de panela, azúcar morena y frutos amarillos.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4">
                <p className="font-accent text-2xl text-bosque italic">
                  Familia Hernández
                </p>
                <p className="text-xs text-tierra/50 mt-1">Fundadores</p>
              </div>

              {/* Logo */}
              <div className="pt-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-dorado flex items-center justify-center bg-bosque">
                  <span className="font-display text-dorado text-xl font-bold">A</span>
                </div>
                <div>
                  <p className="font-display text-tierra font-semibold">AMADOR</p>
                  <p className="text-[9px] tracking-[0.2em] text-dorado">CAFÉ DE NUESTRA TIERRA</p>
                  <p className="text-[8px] tracking-wider text-tierra/50 mt-0.5">TRADICIÓN • FAMILIA • ORIGEN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
