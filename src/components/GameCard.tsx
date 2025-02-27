import { Box, Card, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import placeholderImage from "../assets/no-image-placeholder-6f3882e0.webp";
import EmojiCard from "./EmojiCard";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const url = game.background_image;

  return (
    <Card.Root>
      <Box>
        <Image
          src={url ? getCroppedImageUrl(url) : placeholderImage}
          fit="cover"
          h="200px"
          alt={game.name}
          cursor="pointer"
          width="100%"
        />
        <Card.Body gap="2">
          <Stack direction="row" justify="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Stack>
          <Card.Title fontSize="1xl" cursor="pointer">
            {game.name}
          </Card.Title>
          <EmojiCard rating={game.rating_top} />
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
