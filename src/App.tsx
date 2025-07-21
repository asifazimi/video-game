import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      {/* Search Bar */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
}

export default App;
