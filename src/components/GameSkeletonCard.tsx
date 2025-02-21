import { Card } from "@chakra-ui/react";
import { SkeletonText, Skeleton } from "./ui/skeleton";
import GameCardContainer from "./GameCardContainer";

const GameSkeletonCard = () => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Skeleton h="200px" width="100%" />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameSkeletonCard;
