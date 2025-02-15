import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        navbar
      </GridItem>
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      )}
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
