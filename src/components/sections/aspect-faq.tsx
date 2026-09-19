import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { FAQS } from '@/lib/faq';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const AspectFaq = () => {
  return (
    <section
      id="faq"
      className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0"
    >
      <div className="border-l-dark-gray border-r-dark-gray border-t-dark-gray relative container border border-t-0 px-0 lg:grid lg:grid-cols-[2fr_3fr]">
        <div className="border-b-dark-gray lg:border-r-dark-gray border-b px-6 py-12 lg:border-r lg:border-b-0 lg:px-8 lg:py-20">
          <div className="flex max-w-lg flex-col gap-4 lg:sticky lg:top-28 lg:gap-6">
            <h2 className="text-foreground text-3xl tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-mid-gray text-base">
              The questions we hear most before a project starts. Don&apos;t see
              yours? Just ask.
            </p>
            <div>
              <Button asChild variant="secondary" size="sm">
                <Link href="#contact">Ask a question</Link>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className="text-foreground">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`left-${i}`}
                className="border-b-dark-gray data-[state=open]:bg-jet border-b p-6 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  forceMount
                  className="text-mid-gray text-base"
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AspectFaq;
