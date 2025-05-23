import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { SelectField, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCradcontainer from "./GameCradcontainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";


interface Props{
  gameQurey: GameQuery;
}
const GameGrid = ({gameQurey}: Props)=>{

 const {data,error,isloading}=  useGames(gameQurey);
 console.log("games",data[0])
 const skeletons =[1,2,3,4,5,6];

 if(error) return<Text>{error}</Text>;
  return (
      <SimpleGrid columns={{sm :1,md:2,lg:3,xl:4}} spacing={6} padding='10px'>
        {isloading && skeletons.map(skeleton => <GameCradcontainer key={skeleton}><GameCardSkeleton/></GameCradcontainer>)}
       {data.map((game) =>(<GameCradcontainer key={game.id}><GameCard game={game}/></GameCradcontainer>))}
    
      </SimpleGrid>
  );
};

export default GameGrid;
