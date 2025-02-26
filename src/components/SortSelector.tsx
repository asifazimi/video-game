import { Button } from "@chakra-ui/react";
import {
  MenuRoot,
  MenuContent,
  MenuTrigger,
  MenuItem,
} from "../components/ui/menu";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  onSelectSort: (sort: string) => void;
  sort?: string;
}

const SortSelector = ({ onSelectSort, sort }: Props) => {
  const selectors = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = selectors.find((selector) => selector.value === sort);

  const handleSelector = (sort: string) => {
    onSelectSort(sort);
  };

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
              onClick={() => handleSelector(selector.value)}
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
