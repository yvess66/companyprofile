import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company Profile | MyCompany",
  description: "Leading Digital Solutions for Your Business Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="gradient-bg text-gray-800 m-0 p-0">
        <Navbar />
        <div className="pt-[88px]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
