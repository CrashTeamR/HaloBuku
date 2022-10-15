import { Header } from "./header";
import { Footer } from "./footer";
import type { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
