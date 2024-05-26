"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@chakra-ui/react";
const SplitText = ({ text }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const splitText = text.split("");
    const characterSpans = splitText.filter((char, index) => (
      <span key={index} className="character">
        {char}
      </span>
    ));

    textRef.current.innerHTML = characterSpans.join("");
    console.log(textRef.current, "characterSpans");
    const tl = gsap.timeline();

    tl.from(textRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    }).to(textRef.current.children, { scale: 1.2, duration: 0.5, ease: "bounce.out" });
  }, []);
  return <Box display={"inline-block"} ref={textRef} className="split-text" />;
};

export default SplitText;
