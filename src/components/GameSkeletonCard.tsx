import { Card } from "@chakra-ui/react";
import { SkeletonText, Skeleton } from "./ui/skeleton";

const GameSkeletonCard = () => {
  return (
    <Card.Root>
      <Skeleton h="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeletonCard;
