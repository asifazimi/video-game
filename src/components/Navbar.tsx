import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

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
