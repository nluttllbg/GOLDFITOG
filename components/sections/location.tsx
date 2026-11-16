'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Navigation } from 'lucide-react';
import {
  ADDRESS_SHORT,
  MAPS_EMBED_QUERY,
  schedules,
  WHATSAPP_URL,
} from '@/lib/site-data';

gsap.registerPlugin(ScrollTrigger);

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_EMBED_QUERY
)}&output=embed`;
const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_EMBED_QUERY
)}`;

export default function Location() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loc-heading', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.loc-heading', start: 'top 85%' },
      });

      gsap.from('.loc-info', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.loc-info', start: 'top 85%' },
      });

      gsap.from('.loc-map', {
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.loc-map', start: 'top 85%' },
      });

      gsap.from('.loc-schedule-row', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.loc-schedule', start: 'top 85%' },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="localizacao"
      ref={root}
      className="relative bg-ink-900 py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="loc-heading max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
            Localização e horários
          </span>
          <h2 className="mt-4 font-black uppercase leading-[0.98] tracking-tight text-white text-balance text-[clamp(1.8rem,5vw,3.75rem)]">
            Estamos perto de você.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map */}
          <div className="loc-map lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 min-h-[320px] sm:min-h-[440px]">
            <iframe
              title="Mapa Gold's Gym Fitness"
              src={mapsEmbedSrc}
              className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-[1.1]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-500/10 rounded-2xl" />
          </div>

          {/* Info */}
          <div className="loc-info lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-ink-600/60 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-white text-base uppercase tracking-wide">
                    Endereço
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {ADDRESS_SHORT}
                  </p>
                </div>
              </div>
            </div>

            <div className="loc-schedule rounded-2xl border border-white/10 bg-ink-600/60 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-white text-base uppercase tracking-wide">
                  Horários
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {schedules.map((s) => (
                  <li
                    key={s.day}
                    className="loc-schedule-row flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-white/80">{s.day}</span>
                    <span className="text-sm font-bold text-white">{s.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gold-gradient text-ink-900 font-bold text-sm px-6 py-4 rounded-full hover:shadow-gold transition-all duration-500 hover:scale-[1.02]"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
