import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: '" nav" "main"',
        lg: '" nav nav" "aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg : '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" paddingX={5} display={{ base: "none", lg: "block" }}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
