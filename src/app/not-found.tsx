// Nextjs
import Link from "next/link";

// Globals Components
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-balance">
        404 Not Found. Could not find requested resource
      </h2>
      <Button variant="linkHoverIn">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
