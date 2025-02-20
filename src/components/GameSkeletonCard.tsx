import { Card } from "@chakra-ui/react";
import { SkeletonText, Skeleton } from "./ui/skeleton";

const GameSkeletonCard = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Skeleton h="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeletonCard;
