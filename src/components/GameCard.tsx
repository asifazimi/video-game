import { Box, Card, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const url = game.background_image;

  return (
    <Card.Root>
      <Box>
        <Image
          src={getCroppedImageUrl(url)}
          fit="cover"
          h="200px"
          alt={game.name}
          cursor="pointer"
        />
        <Card.Body gap="2">
          <Card.Title fontSize="1xl" cursor="pointer">
            {game.name}
          </Card.Title>
          <Stack direction="row" justify="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Stack>
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
