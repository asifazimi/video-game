import { Button } from "@chakra-ui/react";
import {
  MenuRoot,
  MenuContent,
  MenuTrigger,
  MenuItem,
} from "../components/ui/menu";
import { IoMdArrowDropdown } from "react-icons/io";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatforms();

  if (errors) return null;

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="surface" size="sm" focusRing="none">
          {selectedPlatform ? selectedPlatform?.name : "Platform"}{" "}
          <IoMdArrowDropdown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => {
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
