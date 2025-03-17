import React from "react";
import { Toaster } from '@/components/ui/toaster';

const Rootlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
};

export default Rootlayout;
