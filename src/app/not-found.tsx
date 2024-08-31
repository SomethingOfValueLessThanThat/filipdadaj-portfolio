import { Button } from "@/components/ui/button";
import Link from "next/link";

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
