import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text, VStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
          <VStack align='start' spacing={2}>
            <Heading fontSize='2xl'>{game.name}</Heading>
       <PlatformIconList platforms={game.parent_platforms.map(p =>p.platform)}/>
       </VStack>
        </CardBody>
    </Card>
  )
}

export default GameCard;
