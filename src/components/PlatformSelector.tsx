import { Button } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/gameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId || 0);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatform);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="surface" size="sm" focusRing="none">
          {selectedPlatform?.name || "Platform"} <IoMdArrowDropdown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => setSelectedPlatformId(platform.id)}
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
