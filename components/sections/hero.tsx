'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, delay: 0.3 })
        .from(
          '.hero-word',
          { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' },
          '-=0.3'
        )
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.9 }, '-=0.5')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .from('.hero-meta', { opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.4');

      // Parallax on hero image
      gsap.to('.hero-image', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out hero content on scroll
      gsap.to('.hero-content', {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollToStructure = () => {
    document.querySelector('#estrutura')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={root}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-900"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-image absolute inset-[-10%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 sm:px-8 pt-28 pb-20">
        <span className="hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
          Gold&apos;s Gym Fitness · Sorriso, MT
        </span>

        <h1 className="mt-6 max-w-4xl font-black uppercase leading-[0.95] tracking-tight text-white text-balance text-[clamp(2.6rem,9vw,7.5rem)] overflow-hidden">
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Seu próximo</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">nível começa</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block text-gold-gradient">aqui.</span>
          </span>
        </h1>

        <p className="hero-sub mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/75 font-normal">
          Na Gold&apos;s Gym Fitness, você encontra estrutura, equipamentos e uma
          equipe preparada para acompanhar sua evolução. Chegou a hora de levar
          seus treinos a sério.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
          <button
            onClick={scrollToStructure}
            className="hero-cta group inline-flex items-center justify-center gap-2 bg-gold-gradient text-ink-900 font-bold text-sm sm:text-base px-7 py-4 rounded-full hover:shadow-gold transition-all duration-500 hover:scale-[1.02]"
          >
            Quero conhecer a academia
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500"
          >
            <MessageCircle className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
          <div className="hero-meta">
            <p className="text-3xl font-black text-gold-500">4,8</p>
            <p className="text-xs text-white/60 mt-0.5">Avaliação pública · 78 avaliações</p>
          </div>
          <div className="hero-meta h-10 w-px bg-white/10 hidden sm:block" />
          <div className="hero-meta">
            <p className="text-sm font-bold text-white uppercase tracking-wide">Musculação</p>
            <p className="text-xs text-white/60 mt-0.5">Força · Fisiculturismo · Híbrido</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hero-meta">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">Role</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
            <span className="h-1.5 w-1 rounded-full bg-gold-500 animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
