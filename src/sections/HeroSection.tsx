import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );

      // Parallax on scroll
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(content, {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bosque/60 via-bosque/40 to-bosque/70" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-dorado/20 rounded-full animate-spin-slow opacity-30" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-dorado/20 rounded-full animate-spin-slow opacity-20" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center section-padding max-w-4xl mx-auto pt-24"
      >
        {/* Logo Seal */}
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 mx-auto rounded-full border-2 border-dorado/60 flex items-center justify-center bg-bosque/30 backdrop-blur-sm mb-3">
            <div className="text-center">
              <span className="font-display text-dorado text-3xl font-bold block">A</span>
            </div>
          </div>
          <p className="text-[10px] tracking-[0.3em] text-dorado uppercase">Café de nuestra tierra</p>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6 text-balance">
          EL AROMA DE
          <br />
          <span className="text-dorado">LOS BUENOS MOMENTOS</span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
          Café de especialidad 100% colombiano.
          <br />
          Amador - Café de nuestra tierra.
          <br />
          <span className="text-dorado">Cultivado a 1600 m.s.n.m. en Moniquirá, Boyacá.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => scrollToSection('#nuestro-cafe')}
            className="btn-primary w-full sm:w-auto"
          >
            CONOCE NUESTRO CAFÉ
          </button>
          <button
            onClick={() => scrollToSection('#productos')}
            className="btn-secondary w-full sm:w-auto"
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-dorado rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
