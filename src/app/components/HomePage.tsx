import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { SteelProducts } from './SteelProducts';
import { WasteManagement } from './WasteManagement';
import { TamilNaduPresence } from './TamilNaduPresence';
import { Partners } from './Partners';
import { Resources } from './Resources';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <SteelProducts />
      <WasteManagement />
      <TamilNaduPresence />
      <Partners />
      <Resources />
      <ContactForm />
      <Footer />
    </div>
  );
}
