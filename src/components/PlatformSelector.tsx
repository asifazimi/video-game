import { Button } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="surface" size="sm" focusRing="none">
          {selectedPlatform ? selectedPlatform?.name : "Platform"}{" "}
          <IoMdArrowDropdown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
