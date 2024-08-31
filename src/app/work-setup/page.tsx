import Image from "next/image";
import setup from "@/assets/images/setup.jpeg";
import { workSetupData } from "@/lib/work-setup-data";

// Define the types for the SectionProps
interface SectionProps {
  title: string;
  items: Array<{ name: string; description: string }>;
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="relative mt-16 space-y-8 sm:border-l border-neutral-200 dark:border-neutral-700 sm:pl-36 max-sm:pt-12">
    <p className="absolute sm:left-4 sm:top-[3px] text-xs">{title}</p>
    {items.map((item, index) => (
      <div key={index} className="gap-2 space-y-2">
        <h4 className="text-base font-bold">{item.name}</h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {item.description}
        </p>
      </div>
    ))}
  </div>
);

export default function WorkSetup() {
  return (
    <section className="space-y-3">
      <h3 className="font-bold text-xl text-pretty">
        Software I use, gadgets I love, and other things I can recommend.
      </h3>
      <p className="text-pretty">
        Here are the things I use to build software, stay productive, or buy to
        fool myself into thinking I’m being productive when I’m really just
        procrastinating. Here’s a big list of all of my favorite stuff.
      </p>
      <div className="bg-[#F3F3F3] w-full aspect-video rounded-2xl">
        <Image
          src={setup}
          alt="setup"
          className="w-full aspect-video object-cover rounded-2xl pointer-events-none"
        />
      </div>
      {workSetupData.map((section, index) => (
        <Section key={index} title={section.title} items={section.items} />
      ))}
    </section>
  );
}
