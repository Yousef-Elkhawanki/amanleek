import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box paddingBlockStart={"2rem"} textAlign={"center"}>
      © 2024 <Link href={"https://amanleek.com/en/"}>Amanleek</Link>. All Rights Reserved.
    </Box>
  );
};

export default Footer;
