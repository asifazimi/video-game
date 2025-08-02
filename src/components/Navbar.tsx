import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
