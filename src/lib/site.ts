// Single source of truth for company details used across the site.
// Anything marked TODO still needs confirming before launch.

export const SITE = {
  name: 'Nuvio Technologies',
  shortName: 'Nuvio',
  tagline: 'Custom software, built to run your business',
  description:
    'Nuvio Technologies is a Malaysian software company building custom web apps, mobile apps and business systems — and the team behind Humio, the all-in-one HR platform for Malaysia and Singapore.',
  // TODO: replace with the production domain once it's decided.
  url: 'https://nuvio.example.com',
  location: 'Malaysia',
  // TODO: confirm the public inbox address.
  email: 'hello@nuvio.example.com',
  // Number used for "Chat on WhatsApp" and contact-form submissions.
  whatsapp: '60102417618',
  contacts: [
    { name: 'Beh Wei Quan', role: 'Founder', phone: '+60 16-251 8214' },
    { name: 'Teoh Xin Quan', role: 'Co-founder', phone: '+60 10-241 7618' },
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

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
