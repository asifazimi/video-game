import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const filteredPlatforms = platforms
    .map((platform) => ({
      id: platform.id,
      name: platform.name,
      slug: platform.slug,
      icon: iconMap[platform.slug] || null,
    }))
    .filter((entry) => entry.icon !== null);
  return (
    <HStack marginY={1}>
      {filteredPlatforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          cursor="pointer"
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
