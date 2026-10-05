import { siteConfig } from '../data/siteConfig';
import { services, guides } from '../data/pages';
import { neighborhoods } from '../data/neighborhoods';

export const SITE_URL = siteConfig.origin;
export const business = {
  name: siteConfig.brand,
  description: 'Hydro jetting information and service requests for drain and sewer lines in Beavercreek, Ohio.',
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phoneHref}`,
  phoneE164: siteConfig.phoneHref,
  city: 'Beavercreek', region: 'OH', regionName: 'Ohio', country: 'US',
} as const;

export const serviceLinks = services.map((s) => ({ href: `/services/${s.slug}/`, label: s.name }));
export const guideLinks = guides.map((g) => ({ href: `/guides/${g.slug}/`, label: g.name }));
export const hoodLinks = neighborhoods.map((n) => ({ href: `/neighborhood/${n.slug}/`, label: n.name }));
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services', children: serviceLinks },
    { href: '/neighborhood/', label: 'Neighborhoods', children: hoodLinks },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
