
import type { Metadata } from "next";
import Root from "../components/ui/Root";
import { Mulish } from "next/font/google";

import { WebVitals } from "../components/ui/WebVitals";

import "./globals.css";


const mulish = Mulish({ 
  subsets: ["latin"],
  variable: '--font-mulish' 
});

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
      <html lang="en">
        <body className={`${mulish.variable}`}>
          <div>
            <WebVitals />
            <Root>{children}</Root>
          </div>
        </body>
      </html> 
  );
}
