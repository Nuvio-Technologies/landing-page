import AspectFaq from '@/components/sections/aspect-faq';
import AspectHero from '@/components/sections/aspect-hero';
import AspectSeparator from '@/components/sections/aspect-separator';
import { AspectTabs } from '@/components/sections/aspect-tabs';
import Contact from '@/components/sections/contact';
import HumioShowcase from '@/components/sections/humio-showcase';
import Process from '@/components/sections/process';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <>
      <AspectHero />
      <TechStack />
      <AspectTabs />
      <HumioShowcase />
      <Process />
      <AspectFaq />
      <AspectSeparator />
      <Contact />
      <AspectSeparator />
    </>
  );
}
