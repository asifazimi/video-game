import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""}${
    platform?.name && genre?.name ? " / " : ""
  }${genre?.name || ""} Games`;

  return (
    <Heading as="h1" paddingX={2} marginY={2}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
