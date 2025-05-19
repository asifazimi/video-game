import { Image, ImageProps } from "@chakra-ui/react";
import bulls from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const EmojiCard = ({ rating }: Props) => {
  const emojiImage: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recommended", boxSize: "25px" },
    5: { src: bulls, alt: "excepttional", boxSize: "35px" },
  };

  return <Image {...emojiImage[rating]} />;
};

export default EmojiCard;
