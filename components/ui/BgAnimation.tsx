"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const NUM_PARTICLES = 20;
const TRIANGLE_POINTS = "0,10 5,0 10,10";

type Position = { x: number; y: number };

export default function BgAnimation() {
  const containerRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialPositions = Array.from({ length: NUM_PARTICLES }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setPositions(initialPositions);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    if (positions.length === 0) return;

    const particles = containerRef.current.querySelectorAll("polygon");

    particles.forEach((particle) => {
      animateParticle(particle as SVGPolygonElement);
    });

    function animateParticle(particle: SVGPolygonElement) {
      const duration = gsap.utils.random(4, 8);
      gsap.to(particle, {
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        x: gsap.utils.random(-window.innerWidth, window.innerWidth),
        y: gsap.utils.random(-window.innerHeight, window.innerHeight),
        opacity: gsap.utils.random(0.1, 0.8),
        delay: gsap.utils.random(0, 5),
        onComplete() {
          animateParticle(particle);
        },
      });
    }
  }, [positions]);

  return (
    <svg
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {positions.map((pos, i) => (
        <polygon
          key={i}
          points={TRIANGLE_POINTS}
          fill="cyan"
          opacity={gsap.utils.random(0.1, 0.6)}
          transform={`translate(${pos.x}, ${pos.y})`}
        />
      ))}
    </svg>
  );
}
