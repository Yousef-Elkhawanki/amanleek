import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const HomeImagesSection = () => {
  return (
    <Box>
      <Container maxW={"1024px"} paddingInline={"5rem"}>
        <Box as="div" textAlign={"center"} paddingBlock={"2rem"} color={"#1d1d1d"}>
          <Box as="h4" fontSize={"2rem"}>
            What are the advantages of <Box as="span">{" ( "}</Box>{" "}
            <Box as="span" color={"red"}>
              next/image
            </Box>{" "}
            <Box as="span">{" ) "}</Box> Component ?
          </Box>
          <Box className="section__nextImage" display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} gap={"2rem"} paddingBlockStart={"8rem"}>
            <Box className="images" position={"relative"} w={"40%"}>
              <Box position={"relative"} height={"450px"} w={"100%"} borderRadius={"16px"} overflow={"hidden"} transform={"rotate(-8deg) translateY(-20px)"} transformOrigin={"bottom left"}>
                <Image
                  // loading="lazy"
                  src={
                    "https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1716491651~exp=1716495251~hmac=d2add800ae1a5eb250fb5242f53b1e1a8246d8999958e580cc4633ca08f89acf&w=996"
                  }
                  objectFit="cover"
                  fill
                  quality={100}
                  priority
                />
              </Box>
              <Box position={"absolute"} top={0} zIndex={1} height={"450px"} w={"100%"} borderRadius={"16px"} overflow={"hidden"} transform={"rotate(2deg)"} transformOrigin={"bottom right"}>
                <Image
                  src={
                    "https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?t=st=1716491615~exp=1716495215~hmac=6f973d1401963b0ca7701097908c4743cebcfa418aace785c12c47f6bd677c91&w=996"
                  }
                  objectFit="cover"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Box>
            </Box>
            <Box className="images--list" height={"450px"} w={"400px"}>
              <Text color={"#1D1D1DB8"} mb={"2rem"}>
                Next image has some features not allow in img tag{" "}
              </Text>
              <Text color={"#1D1D1DB8"} mb={"1rem"} display={"flex"} alignItems={"center"} gap={".8rem"}>
                <FaCheck color="#515cdd" />
                Next image has some features not allow in img tag
              </Text>
              <Text color={"#1D1D1DB8"} mb={"1rem"} display={"flex"} alignItems={"center"} gap={".8rem"}>
                <FaCheck color="#515cdd" />
                Next image has some features not allow in img tag
              </Text>
              <Text color={"#1D1D1DB8"} mb={"1rem"} display={"flex"} alignItems={"center"} gap={".8rem"}>
                <FaCheck color="#515cdd" />
                Next image has some features not allow in img tag
              </Text>
              <Text color={"#1D1D1DB8"} mb={"1rem"} display={"flex"} alignItems={"center"} gap={".8rem"}>
                <FaCheck color="#515cdd" />
                Next image has some features not allow in img tag
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeImagesSection;
