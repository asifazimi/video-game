import { Input, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import useGameQueryStore from "../store/gameQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref) setSearch(ref.current?.value || "");
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
