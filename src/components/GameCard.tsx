import { Card, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image
        src={game.background_image}
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
    </Card.Root>
  );
};
