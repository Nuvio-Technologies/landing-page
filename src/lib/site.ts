// Single source of truth for company details used across the site.
// Anything marked TODO still needs confirming before launch.

export const SITE = {
  name: 'Nuvio Technologies',
  shortName: 'Nuvio',
  tagline: 'Custom software, built to run your business',
  description:
    'Nuvio Technologies is a Malaysian software company building custom web apps, mobile apps and business systems — and the team behind Humio, the all-in-one HR platform for Malaysia and Singapore.',
  // Search-result title (~60 chars) and description (~155 chars).
  seoTitle: 'Nuvio Technologies | Custom Software Development in Malaysia',
  seoDescription:
    'Custom web apps, mobile apps and business systems for companies in Malaysia and Singapore, built by Nuvio Technologies, the team behind Humio HR software.',
  logo: '/images/brand/nuvio-logo.png',
  themeColor: '#09090B',
  // Assumed from the email domain; confirm before launch.
  url: 'https://thenuviotech.com',
  location: 'Malaysia',
  emails: ['xqteoh@thenuviotech.com', 'alex@thenuviotech.com'],
  // Enquiries go to both founders; each gets their own WhatsApp link.
  contacts: [
    {
      name: 'Beh Wei Quan',
      firstName: 'Wei Quan',
      role: 'Founder',
      phone: '+60 16-251 8214',
    },
    {
      name: 'Teoh Xin Quan',
      firstName: 'Xin Quan',
      role: 'Co-founder',
      phone: '+60 10-241 7618',
    },
  ],
} as const;

export const HUMIO_URL = 'https://thehumio.com';

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Humio', href: '#humio' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export function whatsappLink(phone: string, message?: string) {
  const base = `https://wa.me/${phone.replace(/\D/g, '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
