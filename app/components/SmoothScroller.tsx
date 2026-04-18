"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'; // Standard Lenis styling (required for v1.1.x+)

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // controls the friction/smoothness
      wheelMultiplier: 1, // scroll speed
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
