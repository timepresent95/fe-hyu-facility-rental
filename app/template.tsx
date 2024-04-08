import { MSWComponent } from "@/shared/msw/MSWComponent";
import Image from "@/entities/Image/ui";
import { Button } from "#/ui/button";
import {} from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}>
        <div className="mx-auto flex max-w-screen-md justify-between px-3 py-2.5">
          <Link href="/">
            <Image
              src="logo.png"
              width={40}
              height={40}
              alt="logo"
              priority={true}
            />
          </Link>
          <Button>로그인</Button>
        </div>
      </header>
      <MSWComponent>{children}</MSWComponent>
    </>
  );
}
