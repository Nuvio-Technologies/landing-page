import type { LucideIcon } from 'lucide-react';
import { AppWindow, Boxes, Check, Plug, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  content: {
    title: string;
    description: string;
    deliverables: string[];
  };
};

export const SERVICES: Service[] = [
  {
    title: 'Web Applications',
    description: 'Portals, platforms and dashboards.',
    icon: AppWindow,
    content: {
      title: 'Web Applications',
      description:
        'Customer portals, SaaS platforms and internal dashboards, fast on every device and built to scale as your users grow.',
      deliverables: [
        'Customer & partner portals',
        'SaaS products, from MVP to scale',
        'Admin panels & reporting dashboards',
        'Role-based access & audit trails',
      ],
    },
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android from one codebase.',
    icon: Smartphone,
    content: {
      title: 'Mobile Apps',
      description:
        'Cross-platform apps for your customers and field teams, published to the App Store and Google Play and maintained after launch.',
      deliverables: [
        'iOS & Android apps',
        'Offline-first field & staff apps',
        'Push notifications & in-app payments',
        'Store submission & release management',
      ],
    },
  },
  {
    title: 'Business Systems',
    description: 'Replace spreadsheets with software.',
    icon: Boxes,
    content: {
      title: 'Business Systems',
      description:
        'Operational systems shaped around your workflow instead of forcing your team into off-the-shelf software that almost fits.',
      deliverables: [
        'ERP, CRM & inventory systems',
        'HR, attendance & payroll workflows',
        'Approval flows & document generation',
        'Data migration from spreadsheets',
      ],
    },
  },
  {
    title: 'Integrations & Automation',
    description: 'Connect the tools you already use.',
    icon: Plug,
    content: {
      title: 'Integrations & Automation',
      description:
        'Link your systems together and take repetitive work off your team’s plate, with reliable APIs, sync jobs and automations.',
      deliverables: [
        'Payment gateway & accounting integrations',
        'e-Invoicing (MyInvois) connections',
        'WhatsApp, email & calendar automation',
        'Custom APIs & data pipelines',
      ],
    },
  },
];

function Deliverables({ service }: { service: Service }) {
  return (
    <div className="bg-jet border-dark-gray relative rounded-sm border p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="border-dark-gray bg-obsidian flex size-10 items-center justify-center rounded-sm border">
          <service.icon className="text-star size-5" />
        </span>
        <p className="text-foreground font-semibold">What we deliver</p>
      </div>
      <ul className="flex flex-col gap-3">
        {service.content.deliverables.map((item) => (
          <li
            key={item}
            className="text-foreground flex items-start gap-3 text-sm"
          >
            <Check className="text-star mt-0.5 size-4 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelBackground() {
  return (
    <div className="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start">
      <Image
        src="/images/homepage/features-tabs/bg-small.webp"
        alt=""
        fill
        className="size-full object-cover"
      />
    </div>
  );
}

export const AspectTabs = () => {
  return (
    <section id="services" className="bg-obsidian px-2.5 lg:px-0">
      <div className="border-r-dark-gray border-l-dark-gray border-b-dark-gray container border-x border-b px-0">
        <div className="border-b-dark-gray grid grid-cols-1 gap-4 border-b px-6 pt-20 pb-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-32 lg:pb-12">
          <h2 className="text-foreground text-3xl tracking-tight lg:text-4xl">
            Software Built Around Your Business, Not the Other Way Round
          </h2>
          <p className="text-mid-gray text-base lg:self-end">
            From a first MVP to a system that runs your operations, we take
            projects from idea to production, then keep them running.
          </p>
        </div>

        {/*  DESKTOP  */}
        <Tabs
          defaultValue={SERVICES[0].title}
          orientation="horizontal"
          className="hidden lg:flex lg:flex-col"
        >
          <TabsList className="bg-jet border-b-dark-gray flex h-auto items-start justify-start overflow-x-auto rounded-none border-b p-0 lg:basis-1/4">
            {SERVICES.map((service) => (
              <TabsTrigger
                key={service.title}
                value={service.title}
                className={cn(
                  'text-foreground h-full min-h-36 w-full min-w-[200px] flex-1 items-start justify-start rounded-none px-4 py-3 text-start whitespace-normal transition-colors duration-300',
                  'border-r-dark-gray border-r last:border-none',
                  'data-[state=active]:text-foreground data-[state=active]:bg-secondary data-[state=active]:shadow-none',
                  'dark:data-[state=active]:text-foreground lg:p-8 dark:text-gray-300',
                )}
              >
                <div className="flex h-full w-full justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold">{service.title}</h3>
                    <p className="text-foreground mt-2 text-sm">
                      {service.description}
                    </p>
                  </div>
                  <service.icon className="size-4 shrink-0" />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES.map((service) => (
            <TabsContent
              key={service.title}
              value={service.title}
              className="bg-obsidian m-0 grid grid-cols-2 overflow-hidden"
            >
              <div className="border-r-dark-gray flex flex-col justify-center gap-4 border-r p-6 lg:p-8">
                <h3 className="text-foreground text-2xl font-semibold lg:text-4xl">
                  {service.content.title}
                </h3>
                <p className="text-mid-gray">{service.content.description}</p>
                <div>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="#contact">Discuss your project</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex min-h-[434px] items-center justify-center p-8">
                <PanelBackground />
                <div className="bg-overlay-gray relative z-10 w-full max-w-md rounded-sm p-2 sm:p-3 md:p-4">
                  <Deliverables service={service} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/*  MOBILE  */}
        <div className="block lg:hidden">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-obsidian m-0 overflow-hidden"
            >
              <div className="border-b-dark-gray flex flex-col justify-center gap-4 border-b px-6 py-12">
                <h3 className="text-foreground text-2xl font-semibold">
                  {service.content.title}
                </h3>
                <p className="text-mid-gray">{service.content.description}</p>
              </div>
              <div className="border-b-dark-gray relative flex h-auto items-center justify-center border-b p-6">
                <PanelBackground />
                <div className="bg-overlay-gray relative z-10 flex-1 rounded-sm p-2 sm:p-3">
                  <Deliverables service={service} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
