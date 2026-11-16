import SmoothScroll from '@/components/smooth-scroll';
import Navbar from '@/components/navbar';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import Hero from '@/components/sections/hero';
import PinScroll from '@/components/sections/pin-scroll';
import Activities from '@/components/sections/activities';
import Structure from '@/components/sections/structure';
import Reviews from '@/components/sections/reviews';
import About from '@/components/sections/about';
import Location from '@/components/sections/location';
import FinalCTA from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <PinScroll />
        <Activities />
        <Structure />
        <Reviews />
        <About />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
