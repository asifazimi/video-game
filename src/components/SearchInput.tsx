import { Input, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref) onSubmit(ref.current?.value || "");
      }}
    >
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input placeholder="Search games" ref={ref} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
