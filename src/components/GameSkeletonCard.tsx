import { Card } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import { Skeleton, SkeletonText } from "./ui/skeleton";

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
