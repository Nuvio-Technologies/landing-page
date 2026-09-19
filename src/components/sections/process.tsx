import { Code2, LifeBuoy, PenTool, Search } from 'lucide-react';

import { cn } from '@/lib/utils';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    description:
      'We sit with your team to map the workflow, the people involved and the numbers that matter. You get a clear scope, timeline and quote before any code is written.',
  },
  {
    number: '02',
    title: 'Design',
    icon: PenTool,
    description:
      'Clickable prototypes you can put in front of real users. We settle the flows and screens early, when changes are cheap.',
  },
  {
    number: '03',
    title: 'Build',
    icon: Code2,
    description:
      'Short sprints with a working staging link from week one. You see progress every week and can change priorities as you learn.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    icon: LifeBuoy,
    description:
      'We handle deployment, data migration and training, then stay on to monitor, fix and keep improving what we shipped.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-obsidian overflow-hidden px-2.5 lg:px-0"
    >
      <div className="border-dark-gray container flex flex-col items-center justify-center gap-6 overflow-hidden border border-t-0 py-12 text-center md:py-20">
        <h2 className="text-foreground text-2xl tracking-tight text-balance md:text-4xl lg:text-5xl">
          How We Work
        </h2>
        <p className="text-mid-gray max-w-lg text-base">
          A simple, transparent process with no black boxes. You always know
          what&apos;s being built, why, and when it lands.
        </p>
      </div>
      <div className="bg-jet border-dark-gray container grid overflow-hidden border-r border-l p-0 md:grid-cols-2">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className={cn(
              'border-dark-gray border-b',
              index % 2 === 0 && 'md:border-r',
            )}
          >
            <div className="flex flex-col gap-16 px-6 py-12 lg:gap-24 lg:px-8 lg:py-16">
              <div className="flex items-start justify-between">
                <span className="text-star font-mono text-sm">
                  {step.number}
                </span>
                <step.icon className="text-foreground size-5" />
              </div>
              <div>
                <h3 className="text-foreground text-2xl font-semibold lg:text-3xl">
                  {step.title}
                </h3>
                <p className="text-mid-gray mt-3 max-w-md text-base">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
