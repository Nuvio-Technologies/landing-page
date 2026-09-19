'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';

import { SITE, whatsappLink } from '@/lib/site';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const PROJECT_TYPES = [
  'Web app',
  'Mobile app',
  'Business system',
  'Integration',
  'Not sure yet',
];

const fieldClass =
  'focus:placeholder:text-muted-foreground text-foreground placeholder:text-mid-gray w-full rounded-none border-0 bg-transparent px-6 shadow-none focus-visible:ring-0 md:text-base';

export default function Contact() {
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;
    const phone = submitter?.value || SITE.contacts[0].phone;
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    const details = [
      ['Name', field('fullName')],
      ['Company', field('company')],
      ['Email', field('email')],
      ['Phone', field('phone')],
      ['Project type', projectType],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);
    const message = [
      "Hi Nuvio, I'd like to discuss a project.",
      '',
      ...details,
      '',
      field('message'),
    ].join('\n');
    window.open(whatsappLink(phone, message), '_blank', 'noopener');
  }

  return (
    <section
      id="contact"
      className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0"
    >
      <div className="border-r-dark-gray border-l-dark-gray container grid border-r border-l px-0 lg:grid-cols-[2fr_3fr]">
        {/* Details */}
        <div className="bg-jet border-b-dark-gray lg:border-r-dark-gray flex flex-col gap-10 border-b px-6 py-12 lg:border-r lg:border-b-0 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-foreground text-3xl tracking-tight lg:text-4xl">
              Let&apos;s Build Something
            </h2>
            <p className="text-mid-gray text-base">
              Tell us what you&apos;re trying to solve and we&apos;ll get back
              to you with next steps. Send the form to either of us on WhatsApp,
              or call or email us directly.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            {SITE.contacts.map((person) => (
              <li key={person.name} className="flex items-start gap-3">
                <Phone className="text-star mt-1 size-4 shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    {person.name}
                    <span className="text-mid-gray font-normal">
                      {' '}
                      · {person.role}
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Link
                      href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}
                      className="text-mid-gray hover:text-foreground text-sm"
                    >
                      {person.phone}
                    </Link>
                    <Link
                      href={whatsappLink(person.phone)}
                      target="_blank"
                      rel="noopener"
                      className="text-foreground hover:text-muted-foreground flex items-center gap-1 text-sm"
                    >
                      <SiWhatsapp className="size-3.5" />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Mail className="text-star mt-1 size-4 shrink-0" />
              <div>
                <p className="text-foreground font-semibold">Email</p>
                {SITE.emails.map((email) => (
                  <Link
                    key={email}
                    href={`mailto:${email}`}
                    className="text-mid-gray hover:text-foreground block text-sm"
                  >
                    {email}
                  </Link>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-star mt-1 size-4 shrink-0" />
              <div>
                <p className="text-foreground font-semibold">Based in</p>
                <p className="text-mid-gray text-sm">
                  {SITE.location} · serving Malaysia &amp; Singapore
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <fieldset className="border-b-dark-gray border-b px-6 py-6">
            <legend className="sr-only">Project type</legend>
            <p className="text-mid-gray mb-3 text-sm">
              What do you need help with?
            </p>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={projectType === type}
                  onClick={() => setProjectType(type)}
                  className={cn(
                    'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                    projectType === type
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-dark-gray text-foreground hover:bg-dark-gray',
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid md:grid-cols-2">
            <div className="border-b-dark-gray md:border-r-dark-gray border-b md:border-r">
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Full name"
                required
                autoComplete="name"
                className={cn(fieldClass, 'h-20')}
              />
            </div>
            <div className="border-b-dark-gray border-b">
              <label htmlFor="company" className="sr-only">
                Company (optional)
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Company (optional)"
                autoComplete="organization"
                className={cn(fieldClass, 'h-20')}
              />
            </div>
            <div className="border-b-dark-gray md:border-r-dark-gray border-b md:border-r">
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Work email"
                required
                autoComplete="email"
                className={cn(fieldClass, 'h-20')}
              />
            </div>
            <div className="border-b-dark-gray border-b">
              <label htmlFor="phone" className="sr-only">
                Phone (optional)
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                autoComplete="tel"
                className={cn(fieldClass, 'h-20')}
              />
            </div>
          </div>

          <div className="border-b-dark-gray flex-1 border-b">
            <label htmlFor="message" className="sr-only">
              About your project
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your project: what it should do, who uses it, and any deadline."
              className={cn(fieldClass, 'h-full min-h-52 resize-none py-6')}
            />
          </div>

          <div className="grid sm:grid-cols-2">
            {SITE.contacts.map((person, i) => (
              <Button
                key={person.name}
                type="submit"
                value={person.phone}
                className={cn(
                  'h-20 w-full rounded-none border-0 text-base',
                  i === 0 &&
                    'sm:border-r-charcoal max-sm:border-b-charcoal max-sm:border-b sm:border-r',
                )}
              >
                <SiWhatsapp />
                Send to {person.firstName}
              </Button>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
