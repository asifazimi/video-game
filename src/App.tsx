import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" bg="gold">
          sidebar
        </GridItem>
      )}
      <GridItem area="main" bg="dodgerblue">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
