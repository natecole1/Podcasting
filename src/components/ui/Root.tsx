'use client'
import React from 'react'

import { Mulish } from "next/font/google";
import StoreProvider from '@/src/app/providers/StoreProvider';
import ConvexClerkProvider from '@/src/app/providers/ConvexClerkProvider';
import SplashScreen from './SplashScreen';

import { usePathname } from "next/navigation";
import { useState } from "react";




const mulish = Mulish({ 
  subsets: ["latin"],
  variable: '--font-mulish' 
});

const Root = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ConvexClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={`${mulish.variable}`}>
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