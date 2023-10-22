import type { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";
import "@/styles/globals.css";

const inter = Baloo_Bhai_2({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Test",
  description: "Test Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
