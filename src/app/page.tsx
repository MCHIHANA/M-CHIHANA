import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink-primary font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
