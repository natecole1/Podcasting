'use client'
import React, { useEffect } from 'react';
import Lenis from "lenis";

import "lenis/dist/lenis.css";


const SmoothScroll = (
    {children}: {children: React.ReactNode}
) => {

    useEffect(() => {
        const lenis = new Lenis({
          autoRaf: true,
        });

        lenis.on("scroll", (e) => {
          // console.log(e);
        });

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, [])

  return (
    <div>{children}</div>
  )
}

export default SmoothScroll