import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" cursor="pointer">
      <Image
        src={game.background_image}
        fit="cover"
        h="200px"
        alt={game.name}
      />
      <Card.Body gap="2">
        <Card.Title fontSize="1xl">{game.name}</Card.Title>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};
