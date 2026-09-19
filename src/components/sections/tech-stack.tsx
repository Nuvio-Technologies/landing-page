import type { IconType } from 'react-icons';
import {
  SiAmazonwebservices,
  SiDocker,
  SiFlutter,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// TODO: trim to the stack Nuvio actually delivers with.
const ITEMS: { name: string; icon: IconType }[] = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: SiAmazonwebservices },
  { name: 'Google Cloud', icon: SiGooglecloud },
];

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="animate-marquee flex shrink-0 items-center gap-12 pr-12"
    >
      {ITEMS.map((item) => (
        <li
          key={item.name}
          className="text-mid-gray flex items-center gap-2.5 py-4 text-lg whitespace-nowrap"
        >
          <item.icon className="size-7" />
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default function TechStack() {
  return (
    <section className="bg-obsidian overflow-hidden px-2.5 lg:px-0">
      <div className="border-dark-gray bg-jet container overflow-hidden border border-t-0 py-12 text-center md:py-20">
        <h2 className="text-foreground text-2xl tracking-tight text-balance md:text-4xl lg:text-5xl">
          Built on a modern, proven stack.
        </h2>
        <p className="text-mid-gray mx-auto mt-4 max-w-lg text-base">
          We pick mature, well-supported tools so your software stays fast,
          secure and easy to hire for long after launch.
        </p>

        <div className="relative mt-10 flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}
