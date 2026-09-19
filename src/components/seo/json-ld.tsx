import { SERVICES } from '@/components/sections/aspect-tabs';
import { FAQS } from '@/lib/faq';
import { HUMIO_URL, SITE } from '@/lib/site';

const ORG_ID = `${SITE.url}/#organization`;

// schema.org structured data so search engines understand who Nuvio is,
// what it offers and how to reach it.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      alternateName: SITE.shortName,
      legalName: SITE.legalName,
      identifier: {
        '@type': 'PropertyValue',
        name: 'SSM business registration number',
        value: SITE.registrationNumber,
      },
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}${SITE.logo}`,
        width: 512,
        height: 512,
      },
      description: SITE.description,
      email: SITE.emails[0],
      address: { '@type': 'PostalAddress', addressCountry: 'MY' },
      areaServed: [
        { '@type': 'Country', name: 'Malaysia' },
        { '@type': 'Country', name: 'Singapore' },
      ],
      founder: SITE.contacts.map((person) => ({
        '@type': 'Person',
        name: person.name,
        jobTitle: person.role,
      })),
      contactPoint: SITE.contacts.map((person) => ({
        '@type': 'ContactPoint',
        contactType: 'sales',
        name: person.name,
        telephone: person.phone.replace(/[^+\d]/g, ''),
        areaServed: ['MY', 'SG'],
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software development services',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.content.description,
            provider: { '@id': ORG_ID },
          },
        })),
      },
      owns: {
        '@type': 'SoftwareApplication',
        name: 'Humio',
        url: HUMIO_URL,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'All-in-one HR platform for leave, expense claims, attendance and payroll in Malaysia and Singapore.',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.seoDescription,
      inLanguage: 'en-MY',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe once '<' is escaped.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  );
}
