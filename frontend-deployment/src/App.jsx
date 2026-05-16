import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StructuredData from './components/StructuredData';

/* ── Eagerly load Home (it's the landing page / LCP route) ── */
import Home from './pages/Home';

/* ── Lazy-load all other pages (only downloaded when navigated to) ── */
const About              = lazy(() => import('./pages/About'));
const Services           = lazy(() => import('./pages/Services'));
const ServiceDetail      = lazy(() => import('./pages/ServiceDetail'));
const Contact            = lazy(() => import('./pages/Contact'));
const Portfolio          = lazy(() => import('./pages/Portfolio'));
const FAQ                = lazy(() => import('./pages/FAQ'));
const Careers            = lazy(() => import('./pages/Careers'));
const PrivacyPolicy      = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));

/* ── Minimal route-loading fallback (no artificial delay) ── */
const RouteFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-3 border-indigo-100 border-t-primary animate-spin" />
      <span className="text-text-muted text-sm font-medium">Loading…</span>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <StructuredData />

        <div className="flex flex-col min-h-screen bg-bg-main text-text-main transition-colors duration-400">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                {/* Keep old /service/:id route for backwards compatibility */}
                <Route path="/service/:serviceId" element={<ServiceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
