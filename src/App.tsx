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
    <div className="min-h-screen bg-crema">
      <Navigation />
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
  );
}

export default App;
