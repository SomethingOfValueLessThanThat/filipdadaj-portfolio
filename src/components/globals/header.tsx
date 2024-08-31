"use client";

import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import { Github, MailPlus } from "lucide-react";

export function Header() {
  const [contactMethod, setContactMethod] = useState("option-one");

  const handleGetInTouch = () => {
    switch (contactMethod) {
      case "option-one":
        window.location.href = "tel:+420608273347";
        break;
      case "option-two":
        window.location.href = "sms:+420608273347";
        break;
      case "option-three":
        window.location.href = "mailto:filipdadaj@gmail.com";
        break;
      default:
        alert("Please select a contact method.");
    }
  };

  return (
    <header className="flex justify-between gap-2 w-full max-w-xl mx-auto p-5 xs:p-8">
      <a
        href="https://github.com/SomethingOfValueLessThanThat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon" className="mr-2">
          <Github
            size={16}
            strokeWidth={2}
            className="text-iron-200"
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
                className="text-iron-200"
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
                <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
                  I&apos;m all ears for any kind of communication. Let&apos;s
                  dive into a reat conversation!
                </p>
              </CredenzaDescription>
            </CredenzaHeader>
            <CredenzaBody className="py-4 sm:pt-0">
              <RadioGroup
                defaultValue="option-one"
                className="flex flex-col w-fit mx-auto sm:ml-0 sm:flex-row justify-center items-start gap-8 sm:gap-5"
                onValueChange={(value) => setContactMethod(value)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Call me</Label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Text me</Label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Email me</Label>
                </div>
              </RadioGroup>
            </CredenzaBody>
            <CredenzaFooter>
              <div className="flex flex-col sm:flex-row gap-2">
                <CredenzaClose asChild>
                  <Button className="&span">Close</Button>
                </CredenzaClose>
                <Button variant="action" onClick={handleGetInTouch}>
                  Get in touch
                </Button>
              </div>
            </CredenzaFooter>
          </CredenzaContent>
        </Credenza>
        <ModeToggle />
      </div>
    </header>
  );
}
