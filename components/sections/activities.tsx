'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { activities } from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

export default function Activities() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.act-heading', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.act-heading', start: 'top 85%' },
      });

      const cards = gsap.utils.toArray<HTMLElement>('.act-card');
      cards.forEach((card, i) => {
        const img = card.querySelector('.act-img');
        const meta = card.querySelector('.act-meta');

        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: (i % 2) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        });

        if (img) {
          gsap.to(img, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }

        if (meta) {
          gsap.from(meta, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 75%' },
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="atividades"
      ref={root}
      className="relative bg-ink-900 py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="act-heading max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
            Atividades
          </span>
          <h2 className="mt-4 font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(2rem,6vw,4.5rem)]">
            Treinos para cada <span className="text-gold-gradient">objetivo</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {activities.map((act, i) => (
            <article
              key={act.title}
              className={`act-card group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-600 ${
                i % 3 === 0 ? 'md:row-span-2 min-h-[460px] md:min-h-[640px]' : 'min-h-[340px] md:min-h-[310px]'
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.alt}
                  className="act-img h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
              </div>

              <div className="act-meta relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <span className="text-gold-500 font-black text-sm tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-black uppercase text-white text-2xl sm:text-3xl tracking-tight">
                  {act.title}
                </h3>
                <p className="mt-3 max-w-md text-sm sm:text-base text-white/70 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
