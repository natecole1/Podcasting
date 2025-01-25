'use client'
import { useRef } from 'react';

import BrowseSection from "@/src/components/ui/BrowseSection";
import CreateSection from "@/src/components/ui/CreateSection";
import CTASection from "@/src/components/ui/CTASection";
import DiscoverSection from "@/src/components/ui/DiscoverSection";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import ListenOverviewSection from "@/src/components/ui/ListenOverviewSection";
import ListenToPodcastSection from "@/src/components/ui/ListenToPodcastSection";
import Navbar from "@/src/components/ui/Navbar";
import VideoBackground from "@/src/components/ui/VideoBackground";
import SmoothScroll from "@/src/components/ui/SmoothScroll";

import { useScroll, useTransform } from 'motion/react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <>
      <SmoothScroll>
        <div className="relative">
          <VideoBackground />
          <Navbar />
          <Hero />
        </div>
        <div ref = {containerRef}>
          <CreateSection/>
          <DiscoverSection imageScale = {imageScale}/>
          <BrowseSection/>
          <ListenToPodcastSection />
          <ListenOverviewSection />
          <CTASection />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Home;
