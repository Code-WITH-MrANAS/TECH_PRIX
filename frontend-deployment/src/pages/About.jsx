import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Users, Trophy, Zap, Shield, Heart, Globe, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const stats = [
  { label: 'Projects Delivered', value: '15+', icon: Trophy, color: '#6366F1' },
  { label: 'Happy Clients', value: '10+', icon: Users, color: '#38BDF8' },
  { label: 'Years Experience', value: '1.5+', icon: Lightbulb, color: '#FCD34D' },
  { label: 'Uptime Guaranteed', value: '99.9%', icon: Shield, color: '#6EE7B7' },
  { label: 'Faster Load Times', value: '3×', icon: Zap, color: '#A78BFA' },
];

const values = [
  { icon: Target, title: 'Clean Code', desc: 'We write maintainable, scalable code that stands the test of time.' },
  { icon: Heart, title: 'Pixel Perfect', desc: 'Every detail matters — from spacing to animations, we obsess over quality.' },
  { icon: Zap, title: 'On-Time Delivery', desc: 'We respect deadlines and deliver projects on schedule, every time.' },
  { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. Clear pricing from day one.' },
];

const team = [
  {
    name: 'Anas Ali',
    role: 'Founder',
    bio: 'Full-stack developer and digital strategist with a passion for crafting premium web experiences that defy gravity.',
    color: '#6366F1',
  },
  {
    name: 'Hammad Amjad',
    role: 'Co-Founder',
    bio: 'Deployment and Cloud Specialist ensuring seamless infrastructure and scalable solutions.',
    color: '#38BDF8',
  },
  {
    name: 'Asad Ashfaq',
    role: 'CEO & UI/UX Designer',
    bio: 'UI/UX Designer crafting intuitive interfaces and pixel-perfect visual experiences.',
    color: '#A78BFA',
  },
  {
    name: 'M Moosa',
    role: 'Design & Social Media',
    bio: 'Graphic design and social media specialists driving brand visibility and engagement.',
    color: '#FDA4AF',
  },

];

const About = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About TechPrix',
    description: 'Learn about TechPrix, a premium digital agency founded by Anas Baber, specializing in web development, digital marketing, and brand design.',
    url: 'https://www.techprix.online/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'TechPrix',
      founder: {
        '@type': 'Person',
        name: 'Anas Ali',
        jobTitle: 'Founder ',
      },
    },
  };

  return (
    <>
      <SEOHead
        title="About TechPrix — Our Story, Mission & Team"
        description="TechPrix is a premium digital agency founded by Anas Baber. We specialize in web development, digital marketing, brand design, SEO, and 3D web experiences. Discover our story, mission, and the team behind your next project."
        path="/about"
        schema={aboutSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bg-main via-bg-secondary to-indigo-50/40 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-100/50 dark:bg-indigo-900/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-sky-100/40 dark:bg-sky-900/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'About', path: '/about' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">Who We Are</p>
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-main leading-tight mb-6">
              The Agency That{' '}
              <span className="gradient-text">Thinks in 3D</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">
              Founded on the principle that great design is invisible and great code is bulletproof,{' '}
              <strong className="text-text-secondary">TechPrix</strong> is a full-service creative studio
              where engineering meets artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main mb-6">Our Mission</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-5">
                We combine immersive 3D web technology, strategic marketing, and conversion-focused design
                to build digital ecosystems that don't just look beautiful — they <em>perform</em>.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Our clients see average revenue uplifts of{' '}
                <strong className="text-primary">3× within 6 months</strong> of launching with us. We don't
                just build websites — we build growth engines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary px-8 py-3 text-sm font-bold inline-block">
                  Our Services →
                </Link>
                <Link to="/contact" className="btn-outline px-8 py-3 text-sm font-semibold inline-block">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(99,102,241,0.15)] border border-indigo-100 dark:border-indigo-900/30">
                <img
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=600"
                   alt="TechPrix team collaborating on a project"
                   className="w-full h-80 object-cover"
                   width={600}
                   height={400}
                   loading="lazy"
                   decoding="async"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg-main relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-sky-100/30 dark:bg-sky-900/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">The Minds Behind TechPrix</p>
            <h2 className="text-3xl md:text-5xl font-black font-display text-text-main mb-4">Meet Our Team</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">A small but mighty crew of designers, developers, and strategists building the future of digital.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group relative bg-bg-secondary rounded-3xl p-7 border border-border-light hover:border-transparent hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}08, ${member.color}15, transparent)`,
                  }}
                />
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="mb-5 relative">
                    <div
                      className="w-18 h-18 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)`,
                        boxShadow: `0 8px 24px ${member.color}30`,
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    {/* Status dot */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-bg-secondary bg-emerald-400 shadow-sm" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-text-main mb-0.5 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full inline-block"
                      style={{ background: `${member.color}15`, color: member.color }}
                    >
                      {member.role}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg-main rounded-2xl p-6 border border-border-light text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-bg-main rounded-2xl p-6 text-center border border-border-light shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${s.color}18` }}
                  >
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h4 className="text-3xl font-black font-display text-text-main mb-1">{s.value}</h4>
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-text-main mb-4">Ready to Work Together?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how TechPrix can help elevate your brand and build something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 text-base font-bold inline-block">
                Start a Project →
              </Link>
              <Link to="/portfolio" className="btn-outline px-10 py-4 text-base font-semibold inline-block">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
