import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
