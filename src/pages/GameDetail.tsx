import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGameDetails";

const GameDetail = () => {
  const params = useParams();
  const { slug } = params;

  const { data: game, isLoading, error } = useGameDetails(slug);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid gap="5" columns={{ base: 1, md: 2 }} marginTop={4}>
      <GridItem>
        <Heading size="4xl">{game.name}</Heading>
        <ExpandableText>{game.description_raw ?? ""}</ExpandableText>
        <GameAttribute game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetail;
