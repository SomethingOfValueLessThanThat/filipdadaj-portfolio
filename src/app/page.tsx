import Image from "next/image";
import aboutBartender from "@/assets/images/about-bartender.jpg";
import aboutHiking from "@/assets/images/about-hiking.jpg";
import aboutMe from "@/assets/images/about-me.jpg";
import aboutPasta from "@/assets/images/about-pasta.jpg";

export default function Home() {
  return (
    <section className="space-y-3">
      <h3 className="font-bold text-xl text-pretty">
        Heyy, I’m Filip Dadaj. I’m turning ideas into immersive online
        experiences.
      </h3>
      <p className="text-pretty">
        I’m, a Front-End Developer, UI/UX Designer, and 3D Modeler who loves
        bringing ideas to life—whether it’s through clean, responsive code or
        designing user experiences that just feel right. I’m big on details and
        always looking for that perfect balance between functionality and good
        design.
        <br />
        <br />
        When I’m not glued to my screen, I’m either diving into a plate of
        Italian food (pasta is basically my love language) or out hiking to
        clear my head and recharge. There’s something about being out in nature
        that helps me come back refreshed and ready to work on new projects.
        <br />
        <br />
        So, whether we’re talking websites, apps, or a cool 3D project, I’m
        always up for the next challenge.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-8 sm:gap-2 w-full !mt-8">
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-[32px] overflow-hidden rotate-6">
          <Image
            src={aboutMe}
            alt="picture of the author"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-[32px] overflow-hidden rotate-[-8deg] translate-y-3">
          <Image
            src={aboutPasta}
            alt="picture of a pasta home-made meal"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-[32px] overflow-hidden rotate-3">
          <Image
            src={aboutHiking}
            alt="picture in nature with shadow of two people"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-[32px] overflow-hidden rotate-[-8deg] translate-y-2">
          <Image
            src={aboutBartender}
            alt="picture of the author in moody lighting"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
