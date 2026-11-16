'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Lock, Shirt, Wifi, Users, LayoutGrid, Sparkles } from 'lucide-react';
import { differentials } from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

const icons = [LayoutGrid, Dumbbell, Lock, Shirt, Wifi, Users, Sparkles];

export default function Structure() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.str-heading', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.str-heading', start: 'top 85%' },
      });

      gsap.from('.str-image', {
        scale: 1.15,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.str-image', start: 'top 85%' },
      });

      gsap.to('.str-img-inner', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: '.str-image', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      const items = gsap.utils.toArray<HTMLElement>('.str-item');
      items.forEach((item, i) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: item, start: 'top 90%' },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="estrutura"
      ref={root}
      className="relative bg-ink-800 py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="str-image relative lg:col-span-5 overflow-hidden rounded-2xl border border-white/5 aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/9545909/pexels-photo-9545909.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Interior de academia moderna com equipamentos de musculação"
              className="str-img-inner h-[115%] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-ink-900">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                Estrutura completa
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="str-heading">
              <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
                Estrutura e diferenciais
              </span>
              <h2 className="mt-4 font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(1.8rem,5vw,3.75rem)]">
                Uma estrutura para você evoluir.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {differentials.map((d, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={d.title}
                    className="str-item flex gap-4 border-b border-white/5 pb-5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base">{d.title}</h3>
                      <p className="mt-1 text-sm text-white/60 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
