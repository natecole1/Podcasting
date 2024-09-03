"use client";

import { sidebarLinks } from "@/src/constants";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import PodcastLogo from "./PodcastLogo";

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <PodcastLogo />

        {sidebarLinks.map(({ label, route, imgURL }) => {
          const isActive =
            pathname.startsWith(`${route}/`) || pathname === route;

          return (
            <Link
              href={route}
              key={label}
              className={cn("flex items-center gap-2 justify-start px-4 py-4", {
                "border-gold-1 border-r-2 bg-nav-focus": isActive,
              })}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSideBar;
