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

const MobileMenu = () => {
  const pathname = usePathname();

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
        className="md:hidden w-[320px] h-[100vh] flex flex-col border-none text-white-1 bg-black-1"
      >
        <div className="flex justify-center items-start w-full">
          <PodcastLogo />
        </div>
        <div className="flex justify-center items-center py-12">
          <nav className="flex flex-col text-lg">
            {sidebarLinks.map(({ imgURL, route, label }) => {
              const isActive =
                pathname === route || pathname.startsWith(`${route}/`);

              return (
                <SheetClose asChild key={route}>
                  <Link
                    href={route}
                    className={cn(
                      "flex justify-start items-center gap-2 mt-6 h-10 px-6",
                      {
                        "bg-nav-focus border-gold-1 border-r-2": isActive,
                      }
                    )}
                  >
                    <Image src={imgURL} alt={label} width={25} height={25} />
                    <p>{label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
