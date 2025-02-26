import { Button } from "@chakra-ui/react";
import {
  MenuRoot,
  MenuContent,
  MenuTrigger,
  MenuItem,
} from "../components/ui/menu";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

interface Props {
  onSelectSort: (sort: string) => void;
}

const SortSelector = ({ onSelectSort }: Props) => {
  const selectors = [
    { value: "Relevance", label: "Relevance" },
    { value: "Data added", label: "Data added" },
    { value: "Name", label: "Name" },
    { value: "Release Date", label: "Release Date" },
    { value: "Popularity", label: "Popularity" },
    { value: "Average Rating", label: "Average Rating" },
  ];

  const [selectedLabel, setSelectedLable] = useState<string>("Relevance");

  const handleSelector = (sort: string) => {
    setSelectedLable(sort);
    onSelectSort(sort);
  };

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="surface" size="sm" focusRing="none">
          Ordered by: {selectedLabel}
          <IoMdArrowDropdown />
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
