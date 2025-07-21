import { Button } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import useGameQueryStore from "../store/gameQueryStore";

const SortSelector = () => {
  const sort = useGameQueryStore((s) => s.gameQuery.sort);
  const setSort = useGameQueryStore((s) => s.setSort);

  const selectors = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = selectors.find((selector) => selector.value === sort);

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="surface" size="sm" focusRing="none">
          Ordered by: {currentSort?.label || "Relevance"} <IoMdArrowDropdown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {selectors.map((selector) => {
          return (
            <MenuItem
              key={selector.value}
              value={selector.value}
              onClick={() => setSort(selector.value)}
            >
              {selector.label}
            </MenuItem>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
