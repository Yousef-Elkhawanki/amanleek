"use client";
import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IsMobileContext } from "@/app/utils/isMobileContext/IsMobileContext";
const CustomCursor = () => {
  const { isMobile } = useContext(IsMobileContext);
  const cursorRef = useRef(null);
  const [color, setColor] = useState("");
  console.log(color);
  useGSAP(() => {
    const container = cursorRef.current;
    const handleMouseMove = (event) => {
      console.log(getComputedStyle(event.target));
      setColor(getComputedStyle(event.target).colorInterpolation);
      const { clientX, clientY } = event;
      const { top, left } = container.getBoundingClientRect();
      const offsetX = clientX - 10;
      const offsetY = clientY - 10;
      gsap.to(container, {
        x: offsetX,
        y: offsetY,
        width: "2rem",
        height: "2rem",
        duration: 0.8,
      });
    };
    const handleClickCursor = (e) => {
      gsap.to(container, {
        width: "4rem",
        height: "4rem",
        duration: 0.8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClickCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClickCursor);
    };
  }, [color]);
  return (
    !isMobile && (
      <Box
        borderColor={"rgba(255,255,255,.2)"}
        border={".5px solid"}
        ref={cursorRef}
        w={"2rem"}
        height={"2rem"}
        borderRadius={"50%"}
        background={color}
        pos={"fixed"}
        left={0}
        top={0}
        zIndex={99999}
        pointerEvents={"none"}
        backdropFilter={"blur(3px)"}></Box>
    )
  );
};

export default CustomCursor;
