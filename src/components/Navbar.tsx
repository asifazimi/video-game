import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

interface Props {
  onSubmit: (searchText: string) => void;
}
const Navbar = ({ onSubmit }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={onSubmit} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
