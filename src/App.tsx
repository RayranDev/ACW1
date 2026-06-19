import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ProductsSection from './sections/ProductsSection';
import ProcessSection from './sections/ProcessSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-crema">
        <Navigation />
        <CartDrawer />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductsSection />
          <ProcessSection />
          <AboutSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}

export default App;
