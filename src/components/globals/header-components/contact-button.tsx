"use client";

// Nextjs
import { useState } from "react";

// Icons
import { MailPlus } from "lucide-react";

// Globals Components
import { Button } from "@/components/ui/button";
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
import { useTranslation } from "@/lib/i18n/i18n-context";

export function ContactButton() {
  const [contactMethod, setContactMethod] = useState("option-one");
  const { t } = useTranslation();

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
        alert(t("CONTACT_ALERT"));
    }
  };

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button size="icon">
          <MailPlus
            size={16}
            strokeWidth={2}
            className="text-iron-200"
            absoluteStrokeWidth={true}
          />
          <span className="sr-only">{t("CONTACT_SR")}</span>
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>
            <h3 className="font-bold text-xl text-pretty">
              {t("CONTACT_TITLE")}
            </h3>
          </CredenzaTitle>
          <CredenzaDescription>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              {t("CONTACT_DESCRIPTION")}
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
              <Label htmlFor="option-one">{t("CONTACT_CALL")}</Label>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">{t("CONTACT_TEXT")}</Label>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">{t("CONTACT_EMAIL")}</Label>
            </div>
          </RadioGroup>
        </CredenzaBody>
        <CredenzaFooter>
          <div className="flex flex-col sm:flex-row gap-2">
            <CredenzaClose asChild>
              <Button className="&span">{t("CONTACT_CLOSE")}</Button>
            </CredenzaClose>
            <Button variant="action" onClick={handleGetInTouch}>
              {t("CONTACT_CTA")}
            </Button>
          </div>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
