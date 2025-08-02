import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetail = () => {
  const params = useParams();
  const { slug } = params;

  const { data: game, isLoading, error } = useGameDetails(slug);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding="1">
      <Heading>{game.name}</Heading>
      <img src={game.background_image} alt={game.slug} />
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetail;
