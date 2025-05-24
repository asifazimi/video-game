import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeletonCard from "./GameSkeletonCard";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text textAlign="center">{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          py={8}
        >
          <Spinner />
        </Box>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={4}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeletonCard />
            </GameCardContainer>
          ))}
        {!isLoading && data?.pages.length === 0 && (
          <Text textAlign="center" fontSize="xl" marginTop="10">
            No games found!
          </Text>
        )}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
