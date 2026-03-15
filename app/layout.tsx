import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furkan Yüksel Temelci - Portfolio",
  description: "Next Level Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}