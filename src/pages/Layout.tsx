import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      {/* Search Bar */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
