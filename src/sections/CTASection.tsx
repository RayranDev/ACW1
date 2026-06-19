import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bg, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content animation
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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

  const scrollToProducts = () => {
    const el = document.querySelector('#productos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-bosque/60" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center section-padding max-w-3xl mx-auto"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-8 text-balance">
          Desde las montañas de Moniquirá
          <br />
          <span className="text-dorado">hasta tu taza.</span>
        </h2>

        <button
          onClick={scrollToProducts}
          className="btn-dorado text-base px-10 py-4"
        >
          COMPRAR AHORA
        </button>
      </div>
    </section>
  );
}
