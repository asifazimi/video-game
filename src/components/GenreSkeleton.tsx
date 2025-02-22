import { Box, HStack } from "@chakra-ui/react";
import { Skeleton } from "./ui/skeleton";

const GenreSkeleton = () => {
  return (
    <Box paddingY="5px">
      <HStack>
        <Skeleton borderRadius={8} boxSize="32px" />
        <Skeleton flex="1" height="5" variant="pulse" />
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
