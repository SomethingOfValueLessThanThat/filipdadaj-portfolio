export function Footer() {
  return (
    <div className="w-screen mt-auto bg-background pt-16">
      <div className="w-full h-[1px] bg-gradient-to-r from-background via-neutral-300 dark:via-neutral-500 to-background"></div>
      <div className="flex flex-col gap-8 items-center max-w-xl mx-auto p-5 sm:p-8">
        <p>
          © 2024. You&apos;re welcome to draw inspiration and customize your
          own projects, but direct copying of content is not permitted.
        </p>
      </div>
    </div>
  );
}
