import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";

import { Github, MailPlus } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between gap-2 w-full max-w-xl	mx-auto p-5 xs:p-8">
      <a
        href="https://github.com/SomethingOfValueLessThanThat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon" className="mr-2">
          <Github
            size={16}
            strokeWidth={2}
            color="#999999"
            absoluteStrokeWidth={true}
          />
          <span className="sr-only">Contact</span>
        </Button>
      </a>
      <div>
        <Credenza>
          <CredenzaTrigger asChild>
            <Button size="icon" className="mr-2">
              <MailPlus
                size={16}
                strokeWidth={2}
                color="#999999"
                absoluteStrokeWidth={true}
              />
              <span className="sr-only">Contact</span>
            </Button>
          </CredenzaTrigger>
          <CredenzaContent>
            <CredenzaHeader>
              <CredenzaTitle>
                <h3 className="font-bold text-xl text-pretty">
                  Let&apos;s work together &#128075;
                </h3>
              </CredenzaTitle>
              <CredenzaDescription>
                <p className="text-xs text-pretty text-neutral-500 dark:text-neutral-400">
                  I&apos;m all ears for any kind of communication. Let&apos;s
                  dive into a great conversation!
                </p>
              </CredenzaDescription>
            </CredenzaHeader>
            <CredenzaBody>
              This component is built using shadcn/ui&apos;s dialog and drawer
              component, which is built on top of Vaul.
            </CredenzaBody>
            <CredenzaFooter>
              <CredenzaClose asChild>
                <Button className="gap-1 font-bold text-[#999999]">
                  <span className="translate-y-[1px]">Close</span>
                </Button>
              </CredenzaClose>
            </CredenzaFooter>
          </CredenzaContent>
        </Credenza>
        <ModeToggle />
      </div>
    </header>
  );
}
