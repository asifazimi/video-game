import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGameDetails from "../hooks/useGameDetails";

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
      <ExpandableText>{game.description_raw ?? ""}</ExpandableText>
    </Box>
  );
};

export default GameDetail;
