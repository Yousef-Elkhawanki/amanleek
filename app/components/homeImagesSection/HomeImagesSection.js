"use client";
import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HomeImagesSection = () => {
  return (
    <Box className="images__container">
      <Container maxW={"1200px"} display={"flex"} flexWrap={"wrap"} gap={"1.5rem"} justifyContent={"flex-start"}>
        <Box
          className="image_slider1 image_slider"
          borderRadius={"1.5rem"}
          w={"calc(100% / 3 - 1.5rem)"}
          sx={{
            "@media (max-width:900px)": {
              width: "calc(100% / 2 - 1.5rem)",
            },
            "@media (max-width:600px)": {
              width: "100%",
            },
          }}
          h={"50vh"}
          scale={0}
          pos={"relative"}
          overflow={"hidden"}
          mb={"1.5rem"}>
          <Image
            src={
              "https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1716491651~exp=1716495251~hmac=d2add800ae1a5eb250fb5242f53b1e1a8246d8999958e580cc4633ca08f89acf&w=996"
            }
            fill
            objectFit="cover"
          />
        </Box>
        <Box
          className="image_slider2 image_slider"
          borderRadius={"1.5rem"}
          w={"calc(100% / 3 - 1.5rem)"}
          sx={{
            "@media (max-width:900px)": {
              width: "calc(100% / 2 - 1.5rem)",
            },
            "@media (max-width:600px)": {
              width: "100%",
            },
          }}
          h={"50vh"}
          scale={0}
          pos={"relative"}
          overflow={"hidden"}
          mb={"1.5rem"}>
          <Image
            src={
              "https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg?t=st=1716733481~exp=1716737081~hmac=69c4c8b2cf429fa3ef0a428f814c5c9d23fcac4d49d822f8e942db8b87c6cdb3&w=1380"
            }
            fill
            objectFit="cover"
          />
        </Box>
        <Box
          className="image_slider3 image_slider"
          borderRadius={"1.5rem"}
          w={"calc(100% / 3 - 1.5rem)"}
          sx={{
            "@media (max-width:900px)": {
              width: "calc(100% / 2 - 1.5rem)",
            },
            "@media (max-width:600px)": {
              width: "100%",
            },
          }}
          h={"50vh"}
          pos={"relative"}
          overflow={"hidden"}
          mb={"1.5rem"}>
          <Image
            src={
              "https://img.freepik.com/free-photo/two-men-canoeing-sunset-back-lit-adventure-generated-by-ai_24640-80656.jpg?t=st=1716733509~exp=1716737109~hmac=d918f93ed82fa5779157c26a08fb2c63dd762dd52acabfc897b02e9d0c752b32&w=1380"
            }
            fill
            objectFit="cover"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeImagesSection;
