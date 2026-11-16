'use client';

import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import {
  ADDRESS_LINE,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  navLinks,
  schedules,
} from '@/lib/site-data';

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-800 border-t border-white/5 px-5 sm:px-8 pt-16 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-ink-900 font-black text-lg">
                G
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-black tracking-tight text-white text-base">
                  GOLD&apos;S GYM
                </span>
                <span className="text-[10px] tracking-[0.35em] text-gold-500 font-bold">
                  FITNESS
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
              Academia de musculação e condicionamento físico em Sorriso, MT.
              Força, disciplina e evolução.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              Navegação
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              Contato
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{ADDRESS_LINE}</span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-500 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-gold-500 flex-shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-500 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-gold-500 flex-shrink-0" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-500" />
              Horários
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {schedules.map((s) => (
                <li key={s.day} className="text-sm">
                  <span className="block text-white/80">{s.day}</span>
                  <span className="text-white/50">{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Gold&apos;s Gym Fitness. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/40">Sorriso · Mato Grosso · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
