import { Hind_Madurai } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const font = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Self Improvement Tracker",
  description:
    "Become the best version of yourself! One shot, one opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} h-screen`}>{children}</body>
    </html>
  );
}
