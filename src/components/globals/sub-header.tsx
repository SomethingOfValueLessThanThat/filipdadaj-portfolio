// Nextjs
import Image from "next/image";

// Images
import profilePicture from "@/assets/images/profile-picture.png";

// Icons
import CheckMark from "@/assets/svgs/check-mark";

export function SubHeader() {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-xl mx-auto px-5 xs:px-8">
      <Image
        src={profilePicture}
        alt="profile picture"
        width={96}
        height={96}
        className="rounded-4xl pointer-events-none"
      />
      <div className="inline-flex items-center gap-2">
        <h1 className="font-bold text-[32px] tracking-tight">Filip Dadaj</h1>
        <CheckMark />
      </div>
      <ul className="flex flex-col gap-4 text-center">
        <li>💎 FRONT-END DEVELOPER</li>
        <li>⚡ UI/UX DESIGNER</li>
        <li>✅ Nextjs // Tailwind CSS // Zed code editor</li>
        <li>I build apps that people love to use</li>
        <li>or just something cool ;))</li>
      </ul>
    </div>
  );
}
