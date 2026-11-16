'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
      });

      gsap.from('.about-img-wrap', {
        scale: 1.12,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.about-img-wrap', start: 'top 85%' },
      });

      gsap.to('.about-img', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: '.about-img-wrap', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.from('.about-badge', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-badge', start: 'top 90%' },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={root}
      className="relative bg-ink-800 py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="about-content order-2 lg:order-1">
          <span className="about-text text-xs font-bold tracking-[0.3em] text-gold-500 uppercase block">
            Sobre a Gold&apos;s Gym Fitness
          </span>
          <h2 className="about-text mt-4 font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(1.8rem,4.5vw,3.5rem)]">
            Mais que uma academia, um lugar para evoluir.
          </h2>
          <p className="about-text mt-7 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
            A Gold&apos;s Gym Fitness está localizada em Sorriso, MT, e oferece um
            ambiente voltado para quem deseja cuidar do corpo, desenvolver força e
            manter uma rotina de treinamento. Nosso objetivo é proporcionar uma
            estrutura confortável e um espaço onde você possa trabalhar pelos seus
            objetivos.
          </p>

          <div className="about-badge mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="text-center sm:text-left">
              <p className="font-black text-gold-500 text-2xl sm:text-3xl">Sorriso</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">MT · Brasil</p>
            </div>
            <div className="text-center sm:text-left border-x border-white/10 px-3">
              <p className="font-black text-gold-500 text-2xl sm:text-3xl">4,8</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Estrelas</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-black text-gold-500 text-2xl sm:text-3xl">78</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Avaliações</p>
            </div>
          </div>
        </div>

        <div className="about-img-wrap order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-white/5 aspect-[4/5] sm:aspect-[5/6]">
          <img
            src="https://images.pexels.com/photos/17706044/pexels-photo-17706044.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Homem musculoso em pose em academia escura"
            className="about-img h-[115%] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
