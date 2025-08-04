import { Input, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import useGameQueryStore from "../store/gameQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref) {
      setSearch(ref.current?.value || "");
      if (ref.current) {
        ref.current.value = "";
        ref.current.blur();
      }
    } else {
      setSearch(""); // Clear search if ref is not available
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        ref.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form onSubmit={handleSearch}>
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input placeholder="Search games" ref={ref} borderRadius="xl" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
