import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = ()=>{

 const {games,error,isloading}=  useGames();
 const skeletons =[1,2,3,4,5,6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{sm :1,md:2,lg:3}} spacing={10} padding='10px'>
        {isloading && skeletons.map(skeleton => <GameCardSkeleton/>)}
       {games.map((game) => <GameCard key={game.id} game={game}/>)}
    
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
