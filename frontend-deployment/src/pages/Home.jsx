import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection        from '../components/HeroSection';
import ServicesSection    from '../components/ServicesSection';
import ProjectsSection    from '../components/ProjectsSection';
import AboutSection       from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection     from '../components/ContactSection';
import WhatsAppButton     from '../components/WhatsAppButton';

const Home = () => (
  <>
    <SEOHead
      title="TechPrix — Premium Digital Agency"
      description="TechPrix is a premium full-service digital agency specializing in web development, mobile apps, digital marketing, brand design, SEO optimization, and immersive 3D web experiences. Founded by Anas Baber."
      path="/"
    />
    <HeroSection />
    <ServicesSection />

    {/* Cross-link to full Services page */}
    <div className="bg-bg-secondary pb-8 -mt-8 text-center">
      <Link to="/services" className="text-primary text-sm font-semibold hover:underline">
        View all services →
      </Link>
    </div>

    <ProjectsSection />

    {/* Cross-link to Portfolio page */}
    <div className="bg-bg-main pb-8 -mt-8 text-center">
      <Link to="/portfolio" className="text-primary text-sm font-semibold hover:underline">
        View full portfolio →
      </Link>
    </div>

    <AboutSection />

    {/* Cross-link to About page */}
    <div className="bg-bg-secondary pb-8 -mt-8 text-center">
      <Link to="/about" className="text-primary text-sm font-semibold hover:underline">
        Learn more about us →
      </Link>
    </div>

    <TestimonialsSection />
    <ContactSection />
    <WhatsAppButton />
  </>
);

export default Home;
