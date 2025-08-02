import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      {/* Search Bar */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
