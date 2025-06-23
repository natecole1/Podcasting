'use client'
import React from 'react'


import StoreProvider from '@/src/app/providers/StoreProvider';
import ConvexClerkProvider from '@/src/app/providers/ConvexClerkProvider';
import { persistor, makeStore } from '@/src/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import  StyledComponentRegistry  from '@/src/lib/registry'




const Root = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <ConvexClerkProvider>
      <StoreProvider>
        <PersistGate loading={null} persistor={persistor}>
          <StyledComponentRegistry>
            {children}
          </StyledComponentRegistry>
        </PersistGate>
      </StoreProvider>
    </ConvexClerkProvider>
  );
};

export default Root