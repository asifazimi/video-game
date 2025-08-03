import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";

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
