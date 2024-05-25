"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hover = ({ children }) => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { top, left } = container.getBoundingClientRect();
      const offsetX = clientX - left;
      const offsetY = clientY - top;

      gsap.to(container, {
        x: offsetX,
        y: offsetY,
        duration: 0.8,
      });
    };
    const handleMouseLeave = (event) => {
      gsap.to(container, {
        x: 0,
        y: 0,
        duration: 0.8,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.addEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);
  useGSAP(() => {
    gsap.set(containerRef.current, { x: 0, y: 0 });
  });

  return (
    <>
      <div ref={containerRef}>{children}</div>
    </>
  );
};

export default Hover;
