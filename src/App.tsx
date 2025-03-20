import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '" nav" "main"',
        lg: '" nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
