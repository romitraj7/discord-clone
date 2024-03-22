import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>This is a protected route</p>
      <UserButton
      afterSignOutUrl="/"/>
      <ModeToggle/>
    </>
  );
}
