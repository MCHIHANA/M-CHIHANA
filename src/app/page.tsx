import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CV />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
