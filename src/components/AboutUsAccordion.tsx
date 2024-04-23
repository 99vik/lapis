import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AboutUsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-[350px] mx-auto my-5">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question1?</AccordionTrigger>
        <AccordionContent>Question 1 answer</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question2?</AccordionTrigger>
        <AccordionContent>Question 2 answer.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Question3?</AccordionTrigger>
        <AccordionContent>Question 3 answer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
