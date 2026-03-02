"use client";

import { useTranslation } from "@/lib/i18n/i18n-context";

export default function WorkEthic() {
  const { t } = useTranslation();

  return (
    <section className="space-y-2">
      <h2 className="font-bold text-xl text-pretty">
        {t("WORK_ETHIC_HEADING")}
      </h2>
      <p className="text-pretty">
        {t("WORK_ETHIC_BODY_1")}
        <br />
        <br />
        {t("WORK_ETHIC_BODY_2")}
        <br />
        <br />
        {t("WORK_ETHIC_BODY_3")}
      </p>
    </section>
  );
}
