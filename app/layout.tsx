import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gold's Gym Fitness | Academia em Sorriso, MT",
  description:
    'Na Gold\u2019s Gym Fitness, em Sorriso (MT), voc\u00ea encontra estrutura, equipamentos e equipe preparada para acompanhar sua evolu\u00e7\u00e3o. Muscula\u00e7\u00e3o, treino de for\u00e7a, fisiculturismo e treino h\u00edbrido.',
  keywords: [
    'Gold\u2019s Gym Fitness',
    'academia Sorriso',
    'academia Sorriso MT',
    'muscula\u00e7\u00e3o Sorriso',
    'treino de for\u00e7a',
    'fisiculturismo',
    'treino h\u00edbrido',
  ],
  openGraph: {
    title: "Gold's Gym Fitness | Academia em Sorriso, MT",
    description:
      'Estrutura, equipamentos e equipe preparada para acompanhar sua evolu\u00e7\u00e3o. Chegou a hora de levar seus treinos a s\u00e9rio.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gold's Gym Fitness | Academia em Sorriso, MT",
    description:
      'Estrutura, equipamentos e equipe preparada para acompanhar sua evolu\u00e7\u00e3o.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased bg-ink-900 text-white">
        {children}
      </body>
    </html>
  );
}
