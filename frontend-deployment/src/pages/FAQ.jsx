import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const faqs = [
  {
    q: 'What services does TechPrix offer?',
    a: 'TechPrix offers a full suite of digital services including custom web development (React, Next.js, Node.js), cross-platform mobile apps, digital marketing & PPC, brand identity design, SEO optimization, and immersive 3D web experiences using Three.js and WebGL.',
  },
  {
    q: 'How much does a typical project cost?',
    a: 'Every project is unique. A simple landing page starts around 15k, while a full-stack web application or mobile app ranges from 50k-100k. We provide free, no-obligation quotes after understanding your requirements.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Timelines depend on scope: a landing page takes 1–2 weeks, a multi-page business site 3–4 weeks, and complex applications 4–6 weeks. We always provide a detailed timeline before starting.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely! TechPrix works with clients worldwide. We communicate through Slack, Google Meet, and WhatsApp to ensure seamless collaboration across time zones.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Our core stack includes React, Next.js, Node.js, MongoDB, PostgreSQL, React Native, Three.js, and Tailwind CSS. We choose the best tools for each project\'s specific needs.',
  },
  {
    q: 'Do you offer ongoing maintenance and support?',
    a: 'Yes! We offer monthly maintenance packages that include bug fixes, security updates, performance monitoring, content updates, and feature additions. Support starts the day your project launches.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We regularly redesign existing sites — migrating content, improving UX, boosting performance, and modernizing the tech stack while preserving your SEO rankings.',
  },
  {
    q: 'What is your development process?',
    a: 'We follow a 4-phase Agile process: 1) Discovery & Strategy, 2) Design & Prototyping, 3) Development & Testing, 4) Launch & Optimization. You receive regular updates and demos throughout.',
  },
  {
    q: 'Do you provide source code and ownership?',
    a: 'Yes. Once the project is complete and fully paid, you receive full ownership of the source code, design files, and all project assets. No lock-in.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply reach out via our Contact page or WhatsApp. We\'ll schedule a free 30-minute discovery call to understand your project, then deliver a proposal within 24–48 hours.',
  },
];

const AccordionItem = ({ faq, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="border border-border-light rounded-2xl overflow-hidden bg-bg-main hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300"
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
    >
      <span className="text-text-main font-semibold text-base leading-snug group-hover:text-primary transition-colors duration-200">
        {faq.q}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="shrink-0"
      >
        <ChevronDown size={20} className="text-text-muted" />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 text-text-muted leading-relaxed text-sm">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'TechPrix FAQ',
    description: 'Frequently asked questions about TechPrix digital agency services, pricing, process, and more.',
    url: 'https://www.techprix.online/faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="FAQ — Frequently Asked Questions"
        description="Find answers to common questions about TechPrix's web development, mobile app, digital marketing, and design services. Learn about our process, pricing, and more."
        path="/faq"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bg-main via-bg-secondary to-indigo-50/40 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'FAQ', path: '/faq' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">Help Center</p>
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-main mb-5">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl">
              Everything you need to know about working with TechPrix. Can't find an answer?{' '}
              <Link to="/contact" className="text-primary font-semibold hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
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
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={28} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold font-display text-text-main mb-4">Still Have Questions?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              We're happy to help! Reach out for a free consultation and we'll answer all your questions personally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 text-base font-bold inline-block">
                Contact Us →
              </Link>
              <Link to="/services" className="btn-outline px-10 py-4 text-base font-semibold inline-block">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
