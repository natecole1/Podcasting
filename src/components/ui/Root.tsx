'use client'
import React from 'react'

import { Mulish } from "next/font/google";
import StoreProvider from '@/src/app/providers/StoreProvider';
import ConvexClerkProvider from '@/src/app/providers/ConvexClerkProvider';
import { persistor, makeStore } from '@/src/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import  StyledComponentRegistry  from '@/src/lib/registry'


const mulish = Mulish({ 
  subsets: ["latin"],
  variable: '--font-mulish' 
});

const Root = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <ConvexClerkProvider>
      <StoreProvider>
        <PersistGate loading={null} persistor={persistor}>
          <html lang="en">
            <body className={`${mulish.variable}`}>
              <StyledComponentRegistry>{children}</StyledComponentRegistry>
            </body>
          </html>
        </PersistGate>
      </StoreProvider>
    </ConvexClerkProvider>
  );
};

export default Root