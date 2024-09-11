import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Box, Brush, CodeXml, File, Move3D } from "lucide-react";

export default function Projects() {
  return (
    <section className="space-y-3">
      <h3 className="font-bold text-xl text-pretty">
        Building digital worlds, one line of code at a time, shaping dreams into
        pixels.
      </h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <CodeXml size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>Development</h2>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Brush size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>UI/UX Design</h2>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Move3D size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>3D Modeling &amp; Rendering</h2>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Box size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>3D Printing</h2>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <File size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>Others...</h2>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
