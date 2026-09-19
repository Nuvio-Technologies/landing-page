import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { HUMIO_URL, NAV_ITEMS, SITE, whatsappLink } from '@/lib/site';

import { Logo } from './logo';

const navigation = [
  {
    title: 'Company',
    links: NAV_ITEMS.map((item) => ({ name: item.label, href: item.href })),
  },
  {
    title: 'Get in touch',
    links: [
      ...SITE.contacts.map((person) => ({
        name: `WhatsApp ${person.firstName}`,
        href: whatsappLink(person.phone),
        external: true,
      })),
      ...SITE.emails.map((email) => ({ name: email, href: `mailto:${email}` })),
      { name: 'Humio', href: HUMIO_URL, external: true },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-obsidian text-foreground px-2.5 lg:px-0">
      <div className="container p-0">
        <div className="bg-jet border-dark-gray grid border-t border-r border-l p-0 lg:grid-cols-3">
          {navigation.map((section) => (
            <div
              key={section.title}
              className="lg:border-r-dark-gray border-b-dark-gray border-r-0 border-b px-6 py-10 lg:border-r lg:px-8 lg:py-12"
            >
              <h3 className="mb-4 text-2xl font-bold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener' }
                        : {})}
                      className="hover:text-muted-foreground inline-flex items-center gap-1 transition-colors lg:text-lg"
                    >
                      {link.name}
                      {'external' in link && link.external && (
                        <ArrowUpRight className="size-4" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-b-dark-gray border-b px-6 py-10 lg:px-8 lg:py-12">
            <p className="text-mid-gray max-w-xs text-sm leading-relaxed">
              {SITE.description}
            </p>
          </div>
        </div>
        <div className="bg-jet border-dark-gray flex border-r border-l px-6 py-10 lg:justify-end lg:px-8 lg:py-12">
          <Logo
            className="gap-4 text-5xl lg:text-7xl"
            markClassName="size-12 lg:size-16"
          />
        </div>
        <div className="bg-jet border-dark-gray grid gap-2 border-t border-r border-l px-6 py-4 sm:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-xs">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p className="text-mid-gray text-xs">
              SSM Reg. No. {SITE.registrationNumber} (
              {SITE.oldRegistrationNumber})
            </p>
          </div>
          <p className="text-mid-gray text-xs sm:self-end sm:text-right">
            Made in {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
