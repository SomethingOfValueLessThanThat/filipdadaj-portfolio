import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Github, MailPlus } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between gap-2 max-w-xl	mx-auto p-8">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" className="mr-2">
              <MailPlus
                size={16}
                strokeWidth={2}
                color="#999999"
                absoluteStrokeWidth={true}
              />
              <span className="sr-only">Contact</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Tel: +420 608 273 347</DropdownMenuItem>
            <DropdownMenuItem>Mail: filipdadaj@gmail.com</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  );
}
