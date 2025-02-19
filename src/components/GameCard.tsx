import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" cursor="pointer">
      <Image src={game.background_image} />
      <Card.Body gap="2">
        <Card.Title fontSize="1xl">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};
