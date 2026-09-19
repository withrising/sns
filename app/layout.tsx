import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AI Shorts Studio",
  description: "Plan, create and manage AI shorts",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Sidebar />
        <main className="min-h-screen pl-64">
          <div className="mx-auto max-w-[1500px] px-8 py-7">{children}</div>
        </main>
      </body>
    </html>
  );
}
