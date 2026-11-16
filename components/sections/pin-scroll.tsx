'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  'DISCIPLINA CONSTRÓI RESULTADOS.',
  'FORÇA É CONQUISTADA TREINO APÓS TREINO.',
  'SUA EVOLUÇÃO NÃO PRECISA ESPERAR.',
];

export default function PinScroll() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.pin-panel');
      const bg = root.current?.querySelector('.pin-bg') as HTMLElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: `+=${panels.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Subtle zoom on background across whole pin
      tl.fromTo(
        bg,
        { scale: 1.08, yPercent: -2 },
        { scale: 1.18, yPercent: 4, ease: 'none' },
        0
      );

      panels.forEach((panel, i) => {
        const text = panel.querySelector('.pin-text') as HTMLElement;
        const number = panel.querySelector('.pin-number') as HTMLElement;

        if (i === 0) {
          tl.fromTo(
            text,
            { yPercent: 30, opacity: 0, filter: 'blur(12px)' },
            { yPercent: 0, opacity: 1, filter: 'blur(0px)', ease: 'power3.out', duration: 0.8 },
            0
          );
          tl.fromTo(
            number,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, ease: 'power3.out', duration: 0.8 },
            0
          );
        }

        if (i < panels.length - 1) {
          tl.to(text, {
            yPercent: -30,
            opacity: 0,
            filter: 'blur(12px)',
            ease: 'power3.in',
            duration: 0.8,
          });
          tl.to(number, { opacity: 0, x: 20, ease: 'power3.in', duration: 0.8 }, '<');
          tl.fromTo(
            panels[i + 1].querySelector('.pin-text'),
            { yPercent: 30, opacity: 0, filter: 'blur(12px)' },
            { yPercent: 0, opacity: 1, filter: 'blur(0px)', ease: 'power3.out', duration: 0.8 },
            '+=0.1'
          );
          tl.fromTo(
            panels[i + 1].querySelector('.pin-number'),
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, ease: 'power3.out', duration: 0.8 },
            '<'
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-ink-900"
      aria-label="Frases de impacto"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="pin-bg absolute inset-[-8%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/17944268/pexels-photo-17944268.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-ink-900/80" />
      </div>

      <div className="relative z-10 h-full w-full">
        {phrases.map((phrase, i) => (
          <div
            key={phrase}
            className="pin-panel absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="flex max-w-5xl items-start gap-5 sm:gap-8">
              <span className="pin-number text-gold-500 font-black text-2xl sm:text-4xl mt-2 sm:mt-4">
                0{i + 1}
              </span>
              <h2 className="pin-text font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(1.8rem,6vw,5rem)]">
                {phrase}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="h-px w-40 bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 bg-gold-500 pin-progress" />
        </div>
      </div>
    </section>
  );
}
