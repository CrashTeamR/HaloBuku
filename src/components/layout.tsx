import { Header } from "./header";
import { Footer } from "./footer";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto mt-10 mb-20 flex-[1] p-[4rem_1rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
