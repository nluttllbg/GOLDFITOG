'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navLinks, WHATSAPP_URL } from '@/lib/site-data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        '.mobile-menu-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.15,
        }
      );
    }
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-900/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#inicio');
            }}
            className="flex items-center gap-2.5 group"
            aria-label="Gold's Gym Fitness"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-ink-900 font-black text-lg shadow-gold transition-transform duration-500 group-hover:scale-110">
              G
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-black tracking-tight text-white text-base sm:text-lg">
                GOLD&apos;S GYM
              </span>
              <span className="text-[10px] tracking-[0.35em] text-gold-500 font-bold">
                FITNESS
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-500 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gold-gradient text-ink-900 font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-gold transition-all duration-500 hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative h-full flex flex-col">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
            <span className="font-black text-white text-lg">MENU</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="mobile-menu-item flex items-center justify-between border-b border-white/5 py-5 text-3xl font-black text-white hover:text-gold-500 transition-colors duration-300"
              >
                {link.label}
                <span className="text-gold-500 text-base font-normal">
                  0{navLinks.indexOf(link) + 1}
                </span>
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mobile-menu-item mt-8 flex items-center justify-center gap-2 bg-gold-gradient text-ink-900 font-bold text-base px-6 py-4 rounded-full"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
