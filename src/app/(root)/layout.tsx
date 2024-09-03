import { Toaster } from "@/components/ui/toaster";
import LeftSideBar from "@/src/components/ui/LeftSideBar";

import Image from "next/image";

export default function CreatePodcastLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative">
      <main className="flex bg-black-3 relative">
        <LeftSideBar />

        <section className="flex flex-1 flex-col  px-4 sm:px-14 min-h-screen">
          <div className="flex flex-col w-full max-w-5xl max-sm:px-4 mx-auto">
            <div>{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
