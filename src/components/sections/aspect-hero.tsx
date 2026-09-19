import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { HeroVisual } from './hero-visual';

const AspectHero = () => {
  return (
    <section
      id="aspect-hero"
      className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0"
    >
      <div className="border-r-dark-gray border-l-dark-gray relative container border px-5">
        <div className="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start">
          <Image
            src="/images/homepage/hero-background.webp"
            alt=""
            fill
            priority
            className="size-full object-cover"
          />
        </div>
        <div className="relative grid gap-12 py-12 lg:grid-cols-[1fr_auto] lg:py-20 lg:pl-12">
          <div className="flex flex-col items-start justify-center gap-5 lg:gap-8">
            <span className="border-dark-gray bg-obsidian/60 text-foreground flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur">
              <span className="bg-star size-1.5 rounded-full" />
              Software studio based in Malaysia
            </span>

            <h1 className="text-foreground text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Custom Software, Built to Run Your Business
            </h1>

            <p className="text-mid-gray text-base md:text-lg lg:text-xl">
              Nuvio Technologies designs and builds web apps, mobile apps and
              business systems that fit how your team actually works. We ship
              and run our own SaaS, so we build yours the same way: to last.
            </p>

            <div className="flex flex-wrap items-start gap-4">
              <Button asChild>
                <Link href="#contact">
                  Start a project
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
          </div>
          <div className="bg-overlay-gray rounded-sm p-2 sm:p-3 md:p-4 lg:rounded-md">
            <div className="relative size-full lg:min-h-[572px] lg:w-[522px]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspectHero;
