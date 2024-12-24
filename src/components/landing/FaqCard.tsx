import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    qusetion: 'What is The Dunk Web?',
    answer:
      'The Dunk Web is your gateway to the forbidden—a place where anonymity meets curiosity. We connect you to products, services, and experiences that thrive in the shadows.',
  },
  {
    qusetion: 'Is it safe to use The Dunk Web?',
    answer:
      'Safety is our priority. All interactions are encrypted, identities are masked, and your tracks vanish into the abyss. Trust the dark—it’s safer than you think.',
  },
  {
    qusetion: 'Who can access the Red Rooms?',
    answer:
      'Only the most daring can step into the Red Rooms. Exclusive access is granted to those who seek the ultimate thrill—your courage is the only key.',
  },
  {
    qusetion: 'What kind of products do you offer?',
    answer:
      'Our marketplace features rare and untraceable items you won’t find anywhere else. From curiosities to tools of the trade, the abyss provides for all.',
  },
  {
    qusetion: 'What if I lose access to my account?',
    answer:
      'Lost your way? Don’t worry. Reach out through our secure recovery portal, and we’ll guide you back into the shadows.',
  },
];

export default function FaqCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto max-w-[600px] border-2 border-stone-100"
    >
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.qusetion}
          value={`item-${i + 1}`}
          className="p-4"
        >
          <AccordionTrigger className="text-lg font-semibold text-red-600 hover:underline">
            {faq.qusetion}
          </AccordionTrigger>
          <AccordionContent className="leading-6 tracking-wider">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
