import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.techprix.online';

/**
 * Global structured data injected on every page.
 * Organization + WebSite + LocalBusiness schemas.
 */
const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'TechPrix',
    alternateName: 'TechPrix Digital Agency',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    description:
      'TechPrix is a premium full-service digital agency specializing in web development, mobile apps, digital marketing, brand design, SEO optimization, and immersive 3D web experiences.',
    email: 'techprix68@gmail.com',
    telephone: '+923256344517',
    founder: {
      '@type': 'Person',
      name: 'Anas Ali',
      jobTitle: 'Founder',
      url: `${SITE_URL}/about`,
    },
    foundingDate: '2024',
    sameAs: [
      'https://www.linkedin.com/in/tech-prix/',
      'https://www.instagram.com/techprix.official',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+923256344517',
      contactType: 'customer service',
      email: 'techprix68@gmail.com',
      availableLanguage: ['English', 'Urdu'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'TechPrix',
    url: SITE_URL,
    description:
      'Premium digital agency crafting immersive web experiences, strategic marketing, and conversion-focused design.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'TechPrix',
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    telephone: '+923256344517',
    email: 'techprix68@gmail.com',
    description:
      'Full-service digital agency offering web development, mobile apps, digital marketing, brand design, SEO, and 3D web experiences.',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3753,
      longitude: 69.3451,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/in/tech-prix/',
      'https://www.instagram.com/techprix.official',
    ],
    founder: {
      '@type': 'Person',
      name: 'Anas Ali',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
