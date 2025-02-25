import { Button } from "@chakra-ui/react";
import {
  MenuRoot,
  MenuContent,
  MenuTrigger,
  MenuItem,
} from "../components/ui/menu";
import { IoMdArrowDropdown } from "react-icons/io";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, errors } = usePlatforms();

  if (errors) return null;

  return (
    <MenuRoot>
      <MenuTrigger margin={2} asChild>
        <Button variant="outline" size="sm">
          Platform <IoMdArrowDropdown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => {
          return (
            <MenuItem key={platform.id} value={platform.slug}>
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
