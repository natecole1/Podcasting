import React from "react";
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const Rootlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <Toaster />
      <Analytics />
    </div>
  );
};

export default Rootlayout;
