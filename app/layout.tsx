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
    <html lang="en" data-scroll-behavior="smooth">
      <body className="gradient-bg min-h-screen text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
