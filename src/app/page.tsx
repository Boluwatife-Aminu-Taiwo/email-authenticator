import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen">
      <Button asChild>
        <Link href={"/login"}>Get Started</Link>
      </Button>
    </div>
  );
}
