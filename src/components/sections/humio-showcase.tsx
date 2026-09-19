import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Receipt,
  ScanFace,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { HUMIO_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    title: 'Leave & Approvals',
    description:
      'Working days calculated automatically, routed to the right manager and synced to Google Calendar.',
    icon: CalendarCheck,
  },
  {
    title: 'Expense Claims',
    description:
      'Snap a receipt and OCR reads the merchant, date, total and tax. No more envelopes of paper.',
    icon: Receipt,
  },
  {
    title: 'Face-Scan Attendance',
    description:
      'Staff clock in with a face scan, and HR sees who is in, late or on leave in real time.',
    icon: ScanFace,
  },
  {
    title: 'Payroll & Statutory',
    description:
      'EPF, SOCSO, EIS and PCB in Malaysia; CPF and SDL in Singapore. Payslips and Form EA generated for you.',
    icon: Wallet,
  },
];

const PAYROLL_LINES = [
  { label: 'Gross salaries', value: 'RM 142,860.00' },
  { label: 'EPF (employee, 11%)', value: '− RM 15,714.60' },
  { label: 'SOCSO + EIS (employee)', value: '− RM 1,123.20' },
  { label: 'PCB withheld', value: '− RM 9,112.45' },
];

const LEAVE_REQUESTS = [
  { name: 'Aisyah R.', type: 'Annual leave · 2 days', state: 'approved' },
  { name: 'Daniel T.', type: 'Medical leave · 1 day', state: 'approved' },
  { name: 'Mei Ling K.', type: 'Annual leave · 3 days', state: 'pending' },
];

// Illustrative Humio screens (sample data, not a real company).
function HumioPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
      <div className="bg-jet border-dark-gray rounded-sm border p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-mid-gray text-xs tracking-wider uppercase">
              Payroll run
            </p>
            <p className="text-foreground mt-1 text-lg font-semibold">
              September 2026 · 48 employees
            </p>
          </div>
          <span className="bg-foreground text-background rounded-full px-2.5 py-1 text-xs font-semibold">
            Ready
          </span>
        </div>
        <dl className="border-dark-gray mt-5 divide-y border-y">
          {PAYROLL_LINES.map((line) => (
            <div
              key={line.label}
              className="border-dark-gray flex justify-between py-3 text-sm"
            >
              <dt className="text-mid-gray">{line.label}</dt>
              <dd className="text-foreground tabular-nums">{line.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex items-end justify-between">
          <p className="text-mid-gray text-sm">Net pay</p>
          <p className="text-foreground text-2xl font-semibold tabular-nums">
            RM 116,909.75
          </p>
        </div>
      </div>

      <div className="bg-jet border-dark-gray flex flex-col rounded-sm border p-5 lg:p-6">
        <p className="text-mid-gray text-xs tracking-wider uppercase">
          Leave requests
        </p>
        <ul className="mt-4 flex flex-col gap-4">
          {LEAVE_REQUESTS.map((req) => (
            <li key={req.name} className="flex items-center gap-3">
              <span className="bg-dark-gray text-foreground flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                {req.name
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-foreground truncate text-sm font-medium">
                  {req.name}
                </p>
                <p className="text-mid-gray truncate text-xs">{req.type}</p>
              </div>
              <span
                className={cn(
                  'flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs',
                  req.state === 'approved'
                    ? 'border-dark-gray text-foreground'
                    : 'border-star text-star',
                )}
              >
                {req.state === 'approved' && <Check className="size-3" />}
                {req.state === 'approved' ? 'Approved' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t-dark-gray text-mid-gray mt-6 flex items-center gap-2 border-t pt-4 text-xs md:mt-auto">
          <CalendarCheck className="size-3.5" />
          Approved leave syncs to Google Calendar
        </div>
      </div>
    </div>
  );
}

const HumioShowcase = () => {
  return (
    <section
      id="humio"
      className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0"
    >
      <div className="border-r-dark-gray border-l-dark-gray relative container border border-t-0 px-0">
        <div className="border-b-dark-gray grid grid-cols-1 gap-6 border-b px-6 pt-20 pb-8 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-32 lg:pb-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/humio/humio-logo.png"
                alt="Humio logo"
                width={40}
                height={40}
              />
              <span className="text-foreground text-xl font-semibold">
                Humio
              </span>
              <span className="border-dark-gray text-mid-gray rounded-full border px-2.5 py-0.5 text-xs">
                Built by Nuvio
              </span>
            </div>
            <h2 className="text-foreground text-3xl tracking-tight lg:text-4xl">
              We Don&apos;t Just Build Software. We Run It.
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:self-end">
            <p className="text-mid-gray text-base">
              Humio is our own all-in-one HR platform for growing teams in
              Malaysia and Singapore: leave, claims, attendance and payroll in
              one place. Building and operating it every day is how we learned
              what production-grade software takes, and it&apos;s the same
              standard we bring to client work.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="sm">
                <Link href={HUMIO_URL} target="_blank" rel="noopener">
                  Visit thehumio.com
                  <ArrowUpRight />
                </Link>
              </Button>
              <span className="text-mid-gray text-sm">
                14-day free trial · no card required
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start">
            <Image
              src="/images/homepage/dashboard/dashboard-background.webp"
              alt=""
              fill
              className="size-full object-cover"
            />
          </div>
          <div className="relative z-10 p-5 lg:p-20">
            <div className="bg-overlay-gray rounded-sm p-2 sm:p-3 md:p-4 lg:rounded-md">
              <HumioPreview />
            </div>
          </div>
        </div>

        <div className="bg-obsidian border-t-dark-gray flex flex-col items-start justify-start overflow-x-auto rounded-none border-t p-0 lg:flex-row">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                'text-foreground h-full w-full items-start justify-start rounded-none px-6 py-12 text-start whitespace-normal lg:min-h-56 lg:p-8',
                'lg:border-r-dark-gray border-b-dark-gray border-b lg:border-r lg:border-b-0 lg:last:border-none',
              )}
            >
              <div className="flex h-full w-full justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-foreground mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
                <feature.icon className="size-4 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumioShowcase;
