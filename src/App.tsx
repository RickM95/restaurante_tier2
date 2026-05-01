
import { Header } from './components/Layout/Header';
import { Hero } from './components/Hero/Hero';
import { Menu } from './components/Menu/Menu';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { OrderSection } from './components/Order/OrderSection';
import { Footer } from './components/Layout/Footer';
import { StickyCTA } from './components/Layout/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <OrderSection />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;