"use client";

import { ClerkProvider, SignedIn, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient("https://adorable-civet-122.convex.cloud");

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "blockButton",
      },
      variables: {
        colorBackground: "#1b1b1b",
        colorNeutral: "#DCCA87",
        colorPrimary: "#DCCA87",
        colorText: "#fff",
        colorInputBackground: "#1b1f29",
        colorInputText: "#fff",
      },
    }}
    afterSignOutUrl="/sign-in"
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;
