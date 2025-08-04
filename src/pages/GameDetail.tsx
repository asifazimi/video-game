import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetail = () => {
  const params = useParams();
  const { slug } = params;

  const { data: game, isLoading, error } = useGameDetails(slug);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box padding="1">
      <Heading size="4xl">{game.name}</Heading>
      <ExpandableText>{game.description_raw ?? ""}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetail;
