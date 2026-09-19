import { Check, GitBranch, Loader, Rocket } from 'lucide-react';

import { cn } from '@/lib/utils';

const MILESTONES = [
  { label: 'Discovery & scoping', meta: 'Week 1', state: 'done' },
  { label: 'UX & interface design', meta: 'Week 2–3', state: 'done' },
  { label: 'API, database & integrations', meta: 'Week 4–7', state: 'done' },
  { label: 'QA & user acceptance', meta: 'Week 8', state: 'active' },
  { label: 'Launch & handover', meta: 'Week 9', state: 'todo' },
] as const;

const LOG = [
  { text: 'pnpm test', tone: 'cmd' },
  { text: '✓ 214 tests passed', tone: 'ok' },
  { text: 'deploy --env staging', tone: 'cmd' },
  { text: '✓ Live at staging.client-portal.app', tone: 'ok' },
] as const;

// Illustrative project workspace shown in the hero (not a real client).
export function HeroVisual() {
  return (
    <div className="bg-jet border-dark-gray flex size-full flex-col overflow-hidden rounded-sm border text-left lg:rounded-md">
      {/* Window chrome */}
      <div className="border-b-dark-gray flex items-center gap-2 border-b px-4 py-3">
        <span className="bg-charcoal size-2.5 rounded-full" />
        <span className="bg-charcoal size-2.5 rounded-full" />
        <span className="bg-charcoal size-2.5 rounded-full" />
        <span className="text-mid-gray ml-3 flex items-center gap-1.5 text-xs">
          <GitBranch className="size-3.5" />
          client-portal / main
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-mid-gray text-xs tracking-wider uppercase">
              Project
            </p>
            <p className="text-foreground mt-1 text-lg font-semibold sm:text-xl">
              Customer Portal &amp; Ops Dashboard
            </p>
          </div>
          <span className="border-dark-gray text-foreground flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
            <span className="bg-star size-1.5 rounded-full" />
            On track
          </span>
        </div>

        {/* Progress */}
        <div>
          <div className="text-mid-gray mb-2 flex justify-between text-xs">
            <span>Delivery progress</span>
            <span className="text-foreground">78%</span>
          </div>
          <div className="bg-dark-gray h-1.5 overflow-hidden rounded-full">
            <div className="bg-star h-full w-[78%] rounded-full" />
          </div>
        </div>

        {/* Milestones */}
        <ul className="flex flex-col gap-3.5">
          {MILESTONES.map((m) => (
            <li key={m.label} className="flex items-center gap-3 text-sm">
              <span
                className={cn(
                  'flex size-5 shrink-0 items-center justify-center rounded-full border',
                  m.state === 'done' && 'bg-foreground border-foreground',
                  m.state === 'active' && 'border-star',
                  m.state === 'todo' && 'border-charcoal',
                )}
              >
                {m.state === 'done' && (
                  <Check className="text-background size-3" strokeWidth={3} />
                )}
                {m.state === 'active' && (
                  <Loader className="text-star size-3 animate-spin [animation-duration:3s]" />
                )}
              </span>
              <span
                className={cn(
                  'flex-1',
                  m.state === 'todo' ? 'text-mid-gray' : 'text-foreground',
                )}
              >
                {m.label}
              </span>
              <span className="text-mid-gray text-xs">{m.meta}</span>
            </li>
          ))}
        </ul>

        {/* Deploy log */}
        <div className="bg-obsidian border-dark-gray mt-auto rounded-sm border p-4 font-mono text-xs leading-relaxed">
          {LOG.map((line) => (
            <p
              key={line.text}
              className={cn(
                line.tone === 'cmd' ? 'text-mid-gray' : 'text-foreground',
              )}
            >
              {line.tone === 'cmd' && <span className="text-star">$ </span>}
              {line.text}
            </p>
          ))}
          <p className="text-foreground mt-2 flex items-center gap-1.5">
            <Rocket className="text-star size-3.5" />
            Ready for production release
          </p>
        </div>
      </div>
    </div>
  );
}
