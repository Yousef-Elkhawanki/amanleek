"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FadeIn = ({ children }) => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".gsapX",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: 0.25,
        stagger: 0.1,
      },
    );

    // return tl;
  });

  return children;
};

export default FadeIn;
