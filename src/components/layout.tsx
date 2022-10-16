import { Header } from "./header";
import { Footer } from "./footer";
import type { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="container mx-auto px-2 mt-5 mb-20">{children}</main>
      <Footer />
    </div>
  );
};
