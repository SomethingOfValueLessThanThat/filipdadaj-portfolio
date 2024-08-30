import Image from "next/image";
import profilePicture from "@/assets/images/profile-picture.png";
import CheckMark from "@/assets/svgs/check-mark";

export function SubHeader() {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-xl mx-auto px-8">
      <Image
        src={profilePicture}
        alt="profile picture"
        width={96}
        height={96}
        className="rounded-[32px] pointer-events-none"
      />
      <div className="inline-flex items-center gap-2">
        <h1 className="font-bold text-2xl">Filip Dadaj</h1>
        <CheckMark />
      </div>
      <p className="text-center">
        🔥 WHAT’S UP, LEGENDS 🔥
        <br />
        <br />
        💎 FRONT-END DEVELOPER
        <br />
        <br />⚡ UI/UX DESIGNER
        <br />
        <br />✅ Nextjs // Tailwind CSS // Zed code editor
        <br />
        <br />
        I’m driven by optimism and <br />a passion for building cool stuff
        <br />
        <br />
        LET’S CODE SOME MAGIC!
      </p>
    </div>
  );
}
