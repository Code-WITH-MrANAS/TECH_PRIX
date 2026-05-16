import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

const SITE_URL = 'https://www.techprix.online';

/**
 * Breadcrumbs — visual breadcrumb trail + BreadcrumbList JSON-LD.
 *
 * @param {Array} items – [{ label: 'About', path: '/about' }, ...]
 *   The last item is the current page (no link).
 */
const Breadcrumbs = ({ items = [] }) => {
  const location = useLocation();

  // Build the full breadcrumb chain starting with Home
  const crumbs = [{ label: 'Home', path: '/' }, ...items];

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-text-muted">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} className="text-text-light" />}
                {isLast ? (
                  <span className="text-text-main font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    {i === 0 && <Home size={14} />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
