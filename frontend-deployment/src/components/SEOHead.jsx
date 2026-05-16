import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'TechPrix';
const SITE_URL = 'https://www.techprix.online';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * SEOHead — sets per-page <title>, <meta>, canonical, OG, and optional JSON-LD.
 *
 * @param {string}  title        – Page title (will append " | TechPrix")
 * @param {string}  description  – Meta description (max ~155 chars)
 * @param {string}  path         – URL path e.g. "/about"
 * @param {string}  [image]      – OG image URL
 * @param {string}  [type]       – OG type (default "website")
 * @param {object}  [schema]     – Optional JSON-LD object
 * @param {boolean} [noIndex]    – If true, add noindex tag
 */
const SEOHead = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  noIndex = false,
}) => {
  const fullTitle = path === '/'
    ? `${SITE_NAME} — Premium Digital Agency | Web Development, Marketing & Design`
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
