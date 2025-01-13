
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Root from "../components/ui/Root";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcasting",
  description: "Next generation podcasting experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Root children={children}/>
  );
}
