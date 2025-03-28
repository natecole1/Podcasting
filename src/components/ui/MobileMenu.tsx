"use client";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import PodcastLogo from "./PodcastLogo";
import { sidebarLinks } from "@/src/constants";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const MobileMenu = () => {
  const pathname = usePathname();
  const podcast = useQuery(api.podcasts.getPodcasts);

  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/hamburger_logo.png"
          alt="Mobile Menu"
          width={40}
          height={40}
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="md:hidden w-full h-[100vh] flex flex-col border-none text-white-1 bg-black-1"
      >
        <div className="flex justify-center items-start w-full">
          <PodcastLogo />
        </div>
        <div className="flex justify-center items-center py-12">
          <nav className="flex flex-col text-lg gap-2">
            {/* {sidebarLinks.map(({ imgURL, route, label }) => {
              const isActive =
                pathname === route || pathname.startsWith(`${route}/`);

              return ( */}
                <SheetClose  >
                 
                  <Link
                    href={"/home-dashboard"}
                    // key={label}
                    className={cn("flex items-center gap-2 justify-start p-4", {
                      "border-gold-1 border-r-2 bg-nav-focus":
                        pathname === "/home-dashboard",
                    })}
                  >
                    <div className="flex-center gap-2">
                      <Image
                        src={"/assets/home.svg"}
                        alt={"home icon"}
                        width={24}
                        height={24}
                      />
                      <p>Home</p>
                    </div>
                  </Link>
                  <Link
                    href={"/browse"}

                    className={cn("flex items-center gap-2 justify-start p-4", {
                      "border-gold-1 border-r-2 bg-nav-focus": pathname === "/browse",
                    })}
                  >
                    <div className="flex-center gap-2">
                      <Image
                        src={"/assets/browse.png"}
                        alt={"browse icon"}
                        width={24}
                        height={24}
                      />
                      <p>Browse</p>
                    </div>
                  </Link>
                  <Link
                    href={"/library"}
                    className={cn("flex items-center gap-2 justify-start p-4", {
                      "border-gold-1 border-r-2 bg-nav-focus": pathname === "/library",
                    })}
                  >
                    <div className="flex-center gap-2">
                      <Image
                        src={"/assets/headphone.png"}
                        alt={"headphone icon"}
                        width={24}
                        height={24}
                      />
                      <p>Library</p>
                    </div>
                  </Link>
                  <Link
                    href={
                      podcast?.length !== 0
                        ? "create-podcast/create-episode"
                        : "/create-podcast"
                    }

                    className={cn("flex items-center gap-2 justify-start p-4", {
                      "border-gold-1 border-r-2 bg-nav-focus":
                        pathname === "/create-podcast",
                    })}
                  >
                    <div className="flex-center gap-2">
                      <Image
                        src={"/assets/microphone.svg"}
                        alt={"microphone icon"}
                        width={24}
                        height={24}
                      />
                      <p>{podcast?.length !== 0 ? "Create Episode" : "Create Podcast"}</p>
                    </div>
                  </Link>
                  <Link
                    href={"/view-podcast"}
                    className={cn("flex items-center gap-2 justify-start p-4", {
                      "border-gold-1 border-r-2 bg-nav-focus":
                        pathname === "/view-podcast",
                    })}
                  >
                    <div className="flex-center gap-2">
                      <Image
                        src={"/assets/eye_icon.png"}
                        alt={"eye icon"}
                        width={24}
                        height={24}
                      />
                      <p>View Podcast</p>
                    </div>
                  </Link>
                </SheetClose>
              {/* );
            })} */}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
