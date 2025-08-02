import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      {/* Genre List and Main Content */}
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" paddingX={2}>
          <GenreList />
        </GridItem>
      )}
      {/* Platform Selector */}
      <GridItem area="main">
        <GameHeading />
        <PlatformSelector />
        {/* Sort Selector */}
        <SortSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
