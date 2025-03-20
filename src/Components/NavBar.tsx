import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColormodeSwitch from "./ColormodeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColormodeSwitch />{" "}
    </HStack>
  );
};

export default NavBar;
