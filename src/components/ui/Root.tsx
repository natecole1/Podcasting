'use client'
import React from 'react'

import { Inter } from "next/font/google";
import StoreProvider from '@/src/app/StoreProvider';
import ConvexClerkProvider from '@/src/app/providers/ConvexClerkProvider';
import SplashScreen from './SplashScreen';

// import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";


const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});

const Root = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ConvexClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={`${inter.variable}`}>
            {isLoading && isHome ? (
              <SplashScreen setIsLoading={setIsLoading} />
            ) : (
              children
            )}
          </body>
        </html>
      </StoreProvider>
    </ConvexClerkProvider>
  );
};

export default Root