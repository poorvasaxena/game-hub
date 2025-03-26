import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColormodeSwitch from "./ColormodeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch : (searchText:string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"/>
      <SearchInput onSearch={onSearch}/>
      <ColormodeSwitch />{" "}
    </HStack>
  );
};

export default NavBar;
