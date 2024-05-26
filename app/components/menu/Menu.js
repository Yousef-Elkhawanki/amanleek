"use client";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { IsMobileContext } from "@/app/utils/isMobileContext/IsMobileContext";
const Menu = () => {
  const menuRef = useRef();
  const { openMenu, setOpenMenu } = useContext(IsMobileContext);
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(".menu ", { opacity: 0, visibility: "visible", y: 100, pointerEvents: "none" }, { opacity: 1, visibility: "visible", y: 0, duration: 0.8, stagger: 0.2, pointerEvents: "unset" });
    tl.fromTo(".menu svg ", { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2 });
    tl.fromTo(".menu span", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.1, stagger: 0.2 });

    if (openMenu) {
      tl.play();
    } else {
      tl.to(".menu svg ", { autoAlpha: 0, y: 100 });
      tl.to(".menu span", { autoAlpha: 0, y: 10 });
      tl.to(".menu ", { opacity: 0, visibility: "hidden", y: 100 });
    }
    // return () => gsap.killTweensOf(menuRef.current);
  }, [openMenu]);
  return (
    <Box
      pointerEvents={"none"}
      className="menu"
      ref={menuRef}
      pos={"fixed"}
      opacity={0}
      visibility={"hidden"}
      top={0}
      left={0}
      bottom={0}
      right={0}
      background={"#0c0c0c"}
      zIndex={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"1rem"}>
      <IoClose onClick={() => setOpenMenu(false)} style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "calc(1rem + 4vw)", cursor: "pointer" }} />

      <Box as="span" textTransform={"uppercase"} fontSize={"calc(1rem + 4vw)"}>
        About Us
      </Box>
      <Box as="span" textTransform={"uppercase"} fontSize={"calc(1rem + 4vw)"}>
        Medical Insurance
      </Box>
      <Box as="span" textTransform={"uppercase"} fontSize={"calc(1rem + 4vw)"}>
        Car Insurance
      </Box>
      <Box as="span" textTransform={"uppercase"} fontSize={"calc(1rem + 4vw)"}>
        News
      </Box>
      <Box as="span" textTransform={"uppercase"} fontSize={"calc(1rem + 4vw)"}>
        Contact Us
      </Box>
    </Box>
  );
};

export default Menu;
