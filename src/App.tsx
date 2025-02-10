import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Home } from '@/pages/Home';
import { Contact } from '@/pages/Contact';
import { WebDevelopment } from '@/pages/services/WebDevelopment';
import { SEO } from '@/pages/services/SEO';
import { SocialMedia } from '@/pages/services/SocialMedia';
import { Multimedia } from '@/pages/services/Multimedia';
import { Strategy } from '@/pages/services/Strategy';
import { Political } from '@/pages/services/Political';
import { Footer } from '@/components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop
import { AboutUs } from '@/pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Header logoImageUrl="https://starset4consulting.github.io/Social-clients/image6.png" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/multimedia" element={<Multimedia />} />
            <Route path="/services/strategy" element={<Strategy />} />
            <Route path="/services/Political" element={<Political />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer /> {/* Footer will always be at the bottom */}
      </div>
    </Router>
  );
}

export default App;
