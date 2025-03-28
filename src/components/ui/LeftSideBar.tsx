"use client";

import { sidebarLinks } from "@/src/constants";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PodcastLogo from "./PodcastLogo";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const LeftSideBar = () => {
  const pathname = usePathname();
  const podcast = useQuery(api.podcasts.getPodcasts);


  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <PodcastLogo />
        <div className="flex flex-col gap-2">
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
            // key={label}
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
            // key={label}
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
            // key={label}
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
        </div>


      </nav>
    </section>
  );
};

export default LeftSideBar;
