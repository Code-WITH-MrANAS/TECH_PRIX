import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';
import { fetchProjects } from '../services/api';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const fallbackProjects = [
  { _id: '1', title: 'Luminary E-Commerce', description: 'A high-conversion e-commerce storefront with 3D product previews, frictionless checkout, and real-time inventory.', image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800', techStack: ['React', 'Node.js', 'MongoDB', 'Three.js'], category: 'Web App', color: '#6366F1' },
  { _id: '2', title: 'Apex Fintech Dashboard', description: 'Financial analytics platform with real-time data visualisation, AI-powered insights, and dark/light theming.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', techStack: ['Vue', 'Express', 'PostgreSQL', 'D3.js'], category: 'Dashboard', color: '#38BDF8' },
  { _id: '4', title: 'Pulse Health App', description: 'Mobile-first health tracking application with custom charts, coach messaging, and wearable device sync.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', techStack: ['React Native', 'Firebase', 'HealthKit'], category: 'Mobile', color: '#6EE7B7' },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TechPrix Portfolio',
    description: 'Explore our featured projects and case studies in web development, mobile apps, and digital marketing.',
    url: 'https://www.techprix.online/portfolio',
  };

  return (
    <>
      <SEOHead title="Portfolio — Our Featured Work & Case Studies" description="Explore TechPrix's portfolio of premium web development, mobile app, and digital marketing projects. See real results from our featured case studies and client work." path="/portfolio" schema={portfolioSchema} />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bg-main via-bg-secondary to-indigo-50/40 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-50/80 dark:bg-indigo-900/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">Featured Work</p>
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-main mb-5">Work That <span className="gradient-text">Defies Gravity</span></h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">Real projects, real results. See how we help brands elevate their digital presence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64"><div className="w-12 h-12 rounded-full border-4 border-indigo-100 border-t-primary animate-spin" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div key={project._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-bg-main rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border-light hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-end p-4 gap-2">
                      <span className="p-2.5 bg-white/90 rounded-full shadow-md"><ExternalLink size={16} className="text-text-main" /></span>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow" style={{ background: project.color }}>{project.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, j) => (<span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-bg-tertiary text-text-secondary border border-border-light">{tech}</span>))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold font-display text-text-main mb-4">Want Results Like These?</h2>
            <p className="text-text-muted text-lg mb-8">Let's discuss your project and create something extraordinary together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 text-base font-bold inline-block">Start Your Project →</Link>
              <Link to="/services" className="btn-outline px-10 py-4 text-base font-semibold inline-block">View Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
