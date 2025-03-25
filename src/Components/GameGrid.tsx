import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCradcontainer from "./GameCradcontainer";
import { Genre } from "../hooks/useGenres";


interface Props{
  selectedGenre : Genre |null
}
const GameGrid = ({selectedGenre}: Props)=>{

 const {data,error,isloading}=  useGames(selectedGenre);
 console.log("games",data[0])
 const skeletons =[1,2,3,4,5,6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{sm :1,md:2,lg:3}} spacing={3} padding='10px'>
        {isloading && skeletons.map(skeleton => <GameCradcontainer key={skeleton}><GameCardSkeleton/></GameCradcontainer>)}
       {data.map((game) =>(<GameCradcontainer key={game.id}><GameCard game={game}/></GameCradcontainer>))}
    
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
