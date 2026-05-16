import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, Zap, Coffee, GraduationCap, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const perks = [
  { icon: Globe, title: '100% Remote', desc: 'Work from anywhere in the world. We believe great talent isn\'t limited by geography.', color: '#6366F1' },
  { icon: Zap, title: 'Flexible Hours', desc: 'Set your own schedule. We care about results, not when you start your day.', color: '#38BDF8' },
  { icon: GraduationCap, title: 'Learn & Grow', desc: 'Access to courses, conferences, and mentorship. We invest in your career development.', color: '#A78BFA' },
  { icon: Coffee, title: 'Creative Freedom', desc: 'Bring your ideas to the table. We encourage innovation and experimentation.', color: '#FCD34D' },
  { icon: Heart, title: 'Team Culture', desc: 'Collaborative, supportive, and inclusive. We celebrate wins together.', color: '#FDA4AF' },
  { icon: Rocket, title: 'Real Impact', desc: 'Work on meaningful projects for global clients. Your work matters.', color: '#6EE7B7' },
];

const openings = [
  {
    title: 'Frontend Developer',
    type: 'Full-time · Remote',
    desc: 'Build stunning, performant web applications using React, Next.js, and modern CSS. 1+ years of experience.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: '#6366F1',
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Part-time · Remote',
    desc: 'Plan and execute digital marketing campaigns across Google Ads, Meta, and social channels.',
    tags: ['Google Ads', 'Meta Ads', 'SEO', 'Analytics'],
    color: '#A78BFA',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time · Remote',
    desc: 'Design beautiful, user-centered interfaces and create comprehensive design systems in Figma.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    color: '#FDA4AF',
  },
];

const Careers = () => {
  const careersSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Careers at TechPrix',
    description: 'Join TechPrix and build the future of digital experiences. Explore open positions in development, design, and marketing.',
    url: 'https://www.techprix.online/careers',
  };

  return (
    <>
      <SEOHead
        title="Careers at TechPrix — Join Our Team"
        description="Join TechPrix and help build premium digital experiences for global clients. Explore open positions in web development, UI/UX design, and digital marketing. Remote-first, flexible culture."
        path="/careers"
        schema={careersSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bg-main via-bg-secondary to-indigo-50/40 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/50 dark:bg-indigo-900/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-sky-100/40 dark:bg-sky-900/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Careers', path: '/careers' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">We're Hiring</p>
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-main leading-tight mb-6">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">
              We're a small, ambitious team building premium digital experiences for clients worldwide.
              If you're passionate about great design and clean code, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why TechPrix */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Why Join Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main">Perks & Culture</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-bg-main rounded-2xl p-7 border border-border-light hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${perk.color}18` }}
                  >
                    <Icon size={22} style={{ color: perk.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2">{perk.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-bg-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main">Current Openings</h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-secondary rounded-2xl p-7 border border-border-light hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-indigo-200 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-1">{job.title}</h3>
                    <p className="text-sm font-medium" style={{ color: job.color }}>{job.type}</p>
                  </div>
                  <a
                    href="mailto:techprix68@gmail.com?subject=Application: ${job.title}"
                    className="btn-primary px-6 py-2.5 text-sm font-bold inline-flex items-center gap-1.5 shrink-0"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md border border-border-light"
                      style={{ background: `${job.color}10`, color: job.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-text-main mb-4">Don't See Your Role?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your portfolio and tell us how you'd contribute to TechPrix.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:techprix68@gmail.com?subject=Open Application — TechPrix"
                className="btn-primary px-10 py-4 text-base font-bold inline-block"
              >
                Send Your Resume →
              </a>
              <Link to="/about" className="btn-outline px-10 py-4 text-base font-semibold inline-block">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
