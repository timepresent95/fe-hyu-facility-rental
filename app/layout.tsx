import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/shared/shardcn-ui/lib/utils";
import Link from "next/link";
import { GithubIcon, TistoryIcon } from "@/shared/Icon";
import { Mail } from "lucide-react";
import TooltipWrapper from "@/shared/shardcn-ui/components/TooltipWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "한양대학교 ERICA 시설 대관 서비스",
  description:
    "한양대학교 ERICA 캠퍼스 내 시설 대관 예약 및 행사 참여를 위한 페이지입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        {children}
        <footer
          className="mt-auto  bg-black px-4 pb-4 pt-6 text-xs text-white"
          style={{ boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.05)" }}
        >
          <div className="mx-auto flex max-w-screen-md justify-between">
            <div>
              <p>
                본 페이지는 한양대학교 ERICA 캠퍼스 내 시설 대관 및 행사 참여를
                위한 프로토타입 페이지입니다.
                <br />이 페이지는 학술 목적으로만 제작되었으며, 실제 서비스와는
                무관합니다.
              </p>
              <p className="mt-2">
                서비스와 관련하여 문의사항이 있으면 우측 링크를 통해
                연락바랍니다.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipWrapper message="timepresent95@gmail.com">
                <Link
                  href="mailto:timepresent95@gmail.com"
                  className="rounded-full bg-white p-1 text-black hover:bg-slate-200"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </TooltipWrapper>
              <TooltipWrapper message="github">
                <Link
                  href="https://github.com/timepresent95/fe-hyu-facility-rental"
                  className="rounded-full bg-white p-1 hover:bg-slate-200"
                >
                  <GithubIcon className="h-4 w-4" />
                </Link>
              </TooltipWrapper>
              <TooltipWrapper message="blog">
                <Link
                  href="https://an-thropology.tistory.com/"
                  className="rounded-full bg-white p-1.5 hover:bg-slate-200"
                >
                  <TistoryIcon className="h-3 w-3" />
                </Link>
              </TooltipWrapper>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
