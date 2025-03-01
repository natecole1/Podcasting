import Image from "next/image";
import PodcastLogo from "./PodcastLogo";
import { footerLinks } from "@/src/constants";
import { useEffect, useState } from 'react';

const Footer = () => {
  let year = new Date().getFullYear()
  const [currentYear, setCurrentYear ] = useState(year);
  
  useEffect(() => {
    setCurrentYear(year);
  }, [])

  return (
    <div className="bg-black-1 flex flex-col items-center justify-center w-full h-auto">
      <div className="py-8">
        <PodcastLogo />
      </div>
      <div className="bg-gold-1 w-4/5 h-[1px]" />
      <div className="py-8 flex space-x-2">
        {footerLinks.map(({ id, url, label }) => {
          return (
            <div key={id} className="">
              <Image src={url} alt={label} width={30} height={30} />
            </div>
          );
        })}
      </div>
      <p className="text-white-1 text-xs">
        Copyright © {currentYear}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
