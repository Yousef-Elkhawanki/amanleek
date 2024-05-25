import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Six_Caps } from "next/font/google";
import Hover from "@/app/animation/Hover";
const six_Caps = Six_Caps({ subsets: ["latin"], weight: ["400"] });

const HomeBannerSection = () => {
  return (
    <Box minH={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
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
          <Hover>A</Hover>
          <Hover>M</Hover>
          <Hover>a</Hover>
          <Hover>n</Hover>
          <Hover>l</Hover>
          <Hover>e</Hover>
          <Hover>e</Hover>
          <Hover>k</Hover>
        </Box>
        <Text
          fontSize={"1.2rem"}
          opacity={0.5}
          w={"90%"}
          m={"auto"}
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
