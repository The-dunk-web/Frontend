import AbouUs from '@/components/landing/AbouUs';
import FAQ from '@/components/landing/FAQ';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <AbouUs />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
