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
      console.log(event.target.getAttribute("src"));
      if (event.target.getAttribute("src") != null) {
        gsap.to(container, {
          width: "8rem",
          height: "8rem",
          duration: 0.8,
          background: "#fff",
          color: "#0c0c0c",
        });
        container.textContent = "View";
      } else {
        container.textContent = "";
        gsap.to(container, {
          opacity: 1,
          background: "unset",
          width: "3rem",
          height: "3rem",
          duration: 0.8,
        });
      }
      const { clientX, clientY } = event;
      const offsetX = clientX - 30;
      const offsetY = clientY - 30;
      gsap.to(container, {
        x: offsetX,
        y: offsetY,
        opacity: 1,
        duration: 0.8,
      });
      setColor(getComputedStyle(event.target).colorInterpolation);
    };
    const handleClickCursor = (event) => {
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
        opacity={0}
        border={"2.5px solid #cccc"}
        ref={cursorRef}
        w={"3rem"}
        height={"3rem"}
        borderRadius={"50%"}
        background={color}
        pos={"fixed"}
        left={0}
        top={0}
        zIndex={99999}
        pointerEvents={"none"}
        backdropFilter={"blur(1.5px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}></Box>
    )
  );
};

export default CustomCursor;
