// Nextjs
import Image from "next/image";

// Images
import aboutClimbing from "@/assets/images/about-climbing.jpg";
import aboutLaptop from "@/assets/images/about-laptop.jpg";
import aboutMe from "@/assets/images/about-me.jpg";
import aboutPasta from "@/assets/images/about-pasta.jpg";

export default function Home() {
  return (
    <section className="space-y-2">
      <h2 className="font-bold text-xl text-pretty">
        Jmenuji se Filip Dadaj a jsem frontend programátor a UI/UX designer
      </h2>
      <p className="text-pretty">
        Programování a designu se věnuji 6+ let. Měl jsem štěstí a už od mala
        jsem vlastnil notebook. V té době jsem hrál jen hry, které jsem si
        modoval a upravoval. Naučil jsem se tak řešit problémy a hledat na
        internetu řešení, co kde a jak spravit. Později jsem se věnoval i 3D
        modelování v Blenderu, kde jsem se naučil spoustu věcí ohledně
        developmentu her, ale u toho jsem nezůstal.
        <br />
        <br />
        Teď na tu lidskou stránku... Věnuju se horolezectví a nejraději lezu
        bouldery (krátké úseky do pár metrů) na umělé stěně vevnitř. Rád vařím a
        miluju italskou kuchyni, tu tradiční.
        <br />
        <br />K práci používám nezbytné věci, které mám popsané na (WORK SETUP),
        a k práci také využívám AI, o čemž mám více rozepsáno na stránce (WORK
        ETHIC).
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-8 sm:gap-2 w-full mt-8">
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-6">
          <Image
            src={aboutMe}
            alt="picture of the author"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-[-8deg] translate-y-3">
          <Image
            src={aboutPasta}
            alt="picture of a pasta home-made meal"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-3">
          <Image
            src={aboutLaptop}
            alt="picture in nature with shadow of two people"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-[-8deg] translate-y-2">
          <Image
            src={aboutClimbing}
            alt="picture of the author in moody lighting"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
