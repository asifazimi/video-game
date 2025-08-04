import { SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  if (!data) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} alt="" />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
