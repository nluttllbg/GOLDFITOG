'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import { INSTAGRAM_URL } from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.rev-heading', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.rev-heading', start: 'top 85%' },
      });

      gsap.from('.rev-stat', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.rev-stats', start: 'top 80%' },
      });

      gsap.from('.rev-note', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.rev-note', start: 'top 85%' },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative bg-ink-900 py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
    >
      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="rev-heading">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
            Avaliação pública
          </span>
          <h2 className="mt-4 font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(1.8rem,5.5vw,4rem)]">
            Quem treina aqui tem o que contar.
          </h2>
        </div>

        <div className="rev-stats mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
          <div className="rev-stat flex flex-col items-center">
            <div className="flex items-end gap-2">
              <span className="font-black text-white text-[clamp(4rem,12vw,7rem)] leading-none">
                4,8
              </span>
              <Star className="h-10 w-10 fill-gold-500 text-gold-500 mb-3" />
            </div>
            <p className="mt-2 text-sm text-white/60 uppercase tracking-widest">
              Estrelas
            </p>
          </div>

          <div className="rev-stat hidden sm:block h-20 w-px bg-white/10" />

          <div className="rev-stat flex flex-col items-center">
            <span className="font-black text-white text-[clamp(4rem,12vw,7rem)] leading-none">
              78
            </span>
            <p className="mt-2 text-sm text-white/60 uppercase tracking-widest">
              Avaliações
            </p>
          </div>
        </div>

        <div className="rev-note mt-14 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-ink-600/60 p-6 sm:p-8">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4 ? 'fill-gold-500 text-gold-500' : 'fill-gold-500/40 text-gold-500/40'
                }`}
              />
            ))}
          </div>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Esta é a avaliação pública verificável da Gold&apos;s Gym Fitness.
            Para conferir as avaliações reais deixadas pelos alunos, acesse o
            perfil oficial da academia.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-gold-500 font-bold text-sm hover:text-gold-300 transition-colors"
          >
            Ver perfil no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
