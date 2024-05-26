"use client";
import { Box, Container, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Six_Caps } from "next/font/google";
// import SplitText from "../splitText/SplitText";
import { useGSAP } from "@gsap/react";
const six_Caps = Six_Caps({ subsets: ["latin"], weight: ["400"] });
import gsap from "gsap";
const HomeBannerSection = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(".homeBanner h1", { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.in" });
    gsap.fromTo(".homeBanner p", { autoAlpha: 0, y: -10 }, { autoAlpha: 0.5, y: 0, duration: 0.8, delay: 0.5, ease: "power3.inOut" });
    return () => gsap.killTweensOf(containerRef.current);
  }, []);
  return (
    <Box minH={"60vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} textAlign={"center"} ref={containerRef} className="homeBanner">
      <Container maxW={"1024px"}>
        <Box
          as="h1"
          className={`${six_Caps.className}`}
          fontSize={"calc(1rem + 24.15vw)"}
          letterSpacing={"10px"}
          textTransform={"uppercase"}
          lineHeight={1}
          display={"flex"}
          cursor={"default"}
          justifyContent={"center"}>
          {/* <SplitText text="amanleek" /> */}
          amanleek
        </Box>
        <Text
          fontSize={"1.2rem"}
          opacity={0.5}
          w={"90%"}
          m={"auto"}
          textTransform={"uppercase"}
          _selection={{
            color: "white",
            backgroundColor: "#ff4200",
          }}
          sx={{
            "@media(max-width:600px)": {
              w: "100%",
            },
          }}>
          Amanleek got your back at every step of the way, making insurance a breeze. Our digital approach ensures a simple and hassle-free insurance experience.
        </Text>
      </Container>
    </Box>
  );
};

export default HomeBannerSection;
