
import React from 'react'

import { Mulish } from "next/font/google";
import StoreProvider from '@/src/app/providers/StoreProvider';
import ConvexClerkProvider from '@/src/app/providers/ConvexClerkProvider';






const mulish = Mulish({ 
  subsets: ["latin"],
  variable: '--font-mulish' 
});

const Root = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <ConvexClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={`${mulish.variable}`}>
           { children}
          </body>
        </html>
      </StoreProvider>
    </ConvexClerkProvider>
  );
};

export default Root