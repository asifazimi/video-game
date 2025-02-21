import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameSkeletonCard from "./GameSkeletonCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, errors, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={5}
        overflow="hidden"
        justifyContent="center"
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameSkeletonCard key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
