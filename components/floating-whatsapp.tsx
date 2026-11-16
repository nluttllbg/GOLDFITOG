'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site-data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.7)] active:scale-95"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
