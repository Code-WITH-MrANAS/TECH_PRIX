import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Megaphone, Palette, LineChart, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const services = [
  { icon: Code2, title: 'Web Development', slug: 'web-development', desc: 'Custom, high-performance websites & apps using React, Next.js, and Node.js.', color: '#6366F1', lightBg: 'from-indigo-50 to-violet-50', darkBg: 'from-[#14142e] to-[#1a1640]', darkBorder: 'border-indigo-500/15 hover:border-indigo-400/40', lightBorder: 'hover:border-indigo-200', tag: 'Development' },
  { icon: Smartphone, title: 'Mobile Apps', slug: 'mobile-apps', desc: 'Cross-platform mobile experiences that feel native on iOS & Android.', color: '#38BDF8', lightBg: 'from-sky-50 to-cyan-50', darkBg: 'from-[#0e1a2e] to-[#0f1f35]', darkBorder: 'border-sky-500/15 hover:border-sky-400/40', lightBorder: 'hover:border-sky-200', tag: 'Mobile' },
  { icon: Megaphone, title: 'Digital Marketing', slug: 'digital-marketing', desc: 'Data-driven strategies across PPC, social, and content to maximise ROI.', color: '#A78BFA', lightBg: 'from-violet-50 to-purple-50', darkBg: 'from-[#1a142e] to-[#1e1540]', darkBorder: 'border-violet-500/15 hover:border-violet-400/40', lightBorder: 'hover:border-violet-200', tag: 'Marketing' },
  { icon: Palette, title: 'Brand & Design', slug: 'brand-design', desc: 'Memorable identities, UI/UX systems that make your brand unforgettable.', color: '#FDA4AF', lightBg: 'from-rose-50 to-pink-50', darkBg: 'from-[#1e1420] to-[#241528]', darkBorder: 'border-rose-500/15 hover:border-rose-400/40', lightBorder: 'hover:border-rose-200', tag: 'Design' },
  { icon: LineChart, title: 'SEO Optimization', slug: 'seo-optimization', desc: 'Technical SEO, content strategy and link building for organic growth.', color: '#6EE7B7', lightBg: 'from-emerald-50 to-teal-50', darkBg: 'from-[#0e1e1a] to-[#0f2420]', darkBorder: 'border-emerald-500/15 hover:border-emerald-400/40', lightBorder: 'hover:border-emerald-200', tag: 'SEO' },
  { icon: Globe, title: '3D Web Experiences', slug: '3d-web-experiences', desc: 'Immersive Three.js and WebGL scenes for unforgettable journeys.', color: '#FCD34D', lightBg: 'from-amber-50 to-yellow-50', darkBg: 'from-[#1e1a0e] to-[#241f0f]', darkBorder: 'border-amber-500/15 hover:border-amber-400/40', lightBorder: 'hover:border-amber-200', tag: '3D / WebGL' },
];

const Services = () => {
  const { dark } = useTheme();
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TechPrix Services',
    description: 'Explore our full range of digital services.',
    url: 'https://www.techprix.online/services',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem', position: i + 1, name: s.title,
        url: `https://www.techprix.online/services/${s.slug}`,
      })),
    },
  };

  return (
    <>
      <SEOHead title="Our Services — Web Development, Mobile Apps, Marketing & Design" description="TechPrix offers premium web development, mobile apps, digital marketing, brand design, SEO, and 3D web experiences. Get a free consultation today." path="/services" schema={servicesSchema} />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bg-main via-bg-secondary to-indigo-50/40 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', path: '/services' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">What We Offer</p>
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-main mb-5">Services Built to <span className="gradient-text">Elevate</span></h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">A full-spectrum digital studio that pairs creative vision with engineering precision — every service designed to float your brand to the top.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={i} to={`/services/${s.slug}`} className="no-underline">
                  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.55 }} whileHover={{ y: -14, transition: { type: 'spring', stiffness: 300, damping: 20 } }} className={`group relative bg-gradient-to-br ${dark ? s.darkBg : s.lightBg} rounded-3xl p-8 border ${dark ? s.darkBorder : `border-border-light ${s.lightBorder}`} shadow-[0_4px_24px_rgba(0,0,0,0.04)] card-lift cursor-pointer overflow-hidden h-full`}>
                    {dark && <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-[0.07] pointer-events-none" style={{ background: s.color }} />}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${dark ? 'via-white/5' : 'via-white/40'} to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out`} />
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: dark ? `${s.color}25` : `${s.color}18`, color: s.color }}>{s.tag}</span>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ background: dark ? `${s.color}20` : `${s.color}18` }}>
                      <Icon size={26} style={{ color: s.color }} strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-text-main mb-3">{s.title}</h2>
                    <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-6 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: s.color }}>Learn more <ArrowRight size={14} /></div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold font-display text-text-main mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">Book a free consultation and we'll help you identify the best strategy for your business goals.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 text-base font-bold inline-block">Get Free Consultation →</Link>
              <Link to="/portfolio" className="btn-outline px-10 py-4 text-base font-semibold inline-block">View Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
