import { LogoutButton } from "@/components/buttons";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <LogoutButton />
      </div>
      <div className="">
        <Link href="/page1">Page1</Link> <Link href="/page2">Page2</Link>
      </div>
    </div>
  );
}
