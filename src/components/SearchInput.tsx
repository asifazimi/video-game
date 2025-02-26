import { Input, Kbd } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input placeholder="Search games" />
    </InputGroup>
  );
};

export default SearchInput;
