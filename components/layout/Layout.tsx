import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:pl-[var(--s200)]">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
