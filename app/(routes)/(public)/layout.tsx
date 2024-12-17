import { ReactNode } from "react";

import { TopBar } from "@/components/shared/Top-Bar";
import { Header } from "@/components/shared/Header";

export default function publicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="border-2 border-black">
      <TopBar />
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
}
