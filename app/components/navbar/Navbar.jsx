import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { HiBars2 } from "react-icons/hi2";
import { Six_Caps } from "next/font/google";
const six_Caps = Six_Caps({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  return (
    <Box className="navbar" as="nav" paddingBlock={"1.5rem"} position={"fixed"} w={"100%"}>
      <Container maxW={"1200px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box as="h1" className={six_Caps.className} pos={"relative"} letterSpacing={0} fontSize={"2.5rem"} textTransform={"uppercase"} display={"flex"} alignItems={"flex-end"} gap={"0.5rem"}>
          Amanleek
          <Box as="span" height={"fit-content"} fontSize={"2.5rem"} color={"#ff4200"}>
            .
          </Box>
        </Box>
        <Box className="navbar--menu" textTransform={"capitalize"} display={"flex"} gap={"1.5rem"} alignItems={"center"} cursor={"pointer"}>
          <Box as="span" fontSize={"1.5rem"}>
            menu
          </Box>
          <HiBars2 fontSize={"1.5rem"} />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
