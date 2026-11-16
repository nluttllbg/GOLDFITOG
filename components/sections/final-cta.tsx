'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.cta-bg', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.from('.cta-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
      });

      gsap.from('.cta-text', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
      });

      gsap.from('.cta-btn', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-content', start: 'top 75%' },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink-900 py-28 sm:py-40 px-5 sm:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="cta-bg absolute inset-[-10%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8874376/pexels-photo-8874376.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-ink-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/60" />
      </div>

      <div className="cta-content relative z-10 mx-auto max-w-3xl text-center">
        <span className="cta-title block text-xs font-bold tracking-[0.4em] text-gold-500 uppercase mb-6">
          Gold&apos;s Gym Fitness
        </span>
        <h2 className="cta-title font-black uppercase leading-[0.95] tracking-tight text-white text-balance text-[clamp(2.2rem,7vw,5.5rem)]">
          Chegou a hora <span className="text-gold-gradient">de começar.</span>
        </h2>
        <p className="cta-text mt-7 mx-auto max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
          Não deixe para depois o cuidado com você. Venha conhecer a Gold&apos;s
          Gym Fitness e descubra um ambiente preparado para acompanhar sua
          evolução.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn mt-10 inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-ink-900 font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:shadow-gold transition-all duration-500 hover:scale-[1.03]"
        >
          <MessageCircle className="h-5 w-5" />
          Fale conosco pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
