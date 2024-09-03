import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="glassmorphism-auth h-screen w-full flex-center">
      <SignUp />
    </div>
  );
};

export default page;
