import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = ()=>{

  console.log("Games",useGames());
 const {games,error}=  useGames();

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <ul>
        {games && games.length > 0 ? (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li>No games found</li>
        )}
      </ul>
    </>
  );
};

export default GameGrid;
