import Link from 'next/link';

import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

// TODO: confirm the commercial terms below (quotes, IP, support) match how Nuvio contracts.
const questions = [
  {
    question: 'How much does a custom software project cost?',
    answer:
      'It depends on scope: a focused internal tool is a very different project from a customer-facing platform. After a short discovery session we give you a written scope and quote, so there are no surprises mid-project.',
  },
  {
    question: 'How long does it take to build?',
    answer:
      'Most first releases ship in 6–12 weeks. We prefer to launch a focused version early, put it in front of real users, and then build on what they actually need.',
  },
  {
    question: 'Who owns the code and the data?',
    answer:
      'You do. On final payment the source code, designs and all of your data are yours, and we can deploy to your own cloud account if you prefer.',
  },
  {
    question: 'Do you work with small businesses and SMEs?',
    answer:
      'Yes. Many of our projects replace spreadsheets, WhatsApp threads and paper forms for growing Malaysian and Singaporean companies. We scope the work to fit your stage and budget.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We offer ongoing support and maintenance: monitoring, security updates, bug fixes and new features. We run our own product, Humio, in production every day, so keeping software healthy is part of how we work.',
  },
  {
    question: 'Can you take over or improve an existing system?',
    answer:
      'Yes. We start with a code and infrastructure review, fix the urgent issues, and then agree on a plan to stabilise, modernise or rebuild, whichever makes sense for your business.',
  },
];

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
            {questions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`left-${i}`}
                className="border-b-dark-gray data-[state=open]:bg-jet border-b p-6 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-mid-gray text-base">
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
