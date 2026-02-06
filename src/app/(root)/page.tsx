'use client'
import { useEffect, useState } from 'react';

import BrowseSection from "@/src/components/ui/BrowseSection";
import CreateSection from "@/src/components/ui/CreateSection";
import CTASection from "@/src/components/ui/CTASection";
import DiscoverSection from "@/src/components/ui/DiscoverSection";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import ListenOverviewSection from "@/src/components/ui/ListenOverviewSection";

import Navbar from "@/src/components/ui/Navbar";
import VideoBackground from "@/src/components/ui/VideoBackground";
import SmoothScroll from "@/src/components/ui/SmoothScroll";
import SplashScreen from '@/src/components/ui/SplashScreen';
import { AnimatePresence } from 'motion/react';



const Home = () => {
  const [isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loadPage = () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0,0);
      }, 1000)
    }

    loadPage();
  }, []);
 
  return (
    <>
      <SmoothScroll>
        <div className="relative">
          <AnimatePresence mode='wait'>
            {isLoading && <SplashScreen />}
          </AnimatePresence>
          <VideoBackground />
          <Navbar />
          <Hero />
        </div>
        <div >
          <CreateSection/>
          <DiscoverSection/>
          <BrowseSection/>
          <ListenOverviewSection />
          <CTASection />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

 
export default Home;
