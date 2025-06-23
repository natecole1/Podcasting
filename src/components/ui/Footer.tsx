import Image from "next/image";
import PodcastLogo from "./PodcastLogo";
import { footerLinks } from "@/src/constants";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  let year = new Date().getFullYear()
  const [currentYear, setCurrentYear ] = useState(year);
  
  useEffect(() => {
    setCurrentYear(year);
  }, [year])

  return (
    <div className="bg-black-1 flex flex-col items-center justify-center w-full h-auto">
      <motion.div 
        className="py-8"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        >
        <PodcastLogo />
      </motion.div>
      <motion.div 
        className="bg-gold-1 h-[1px]" 
        initial={{ width: 0, y: 25 }}
        whileInView={{ width: "80%", y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
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
