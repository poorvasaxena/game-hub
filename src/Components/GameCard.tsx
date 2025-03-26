import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import croppedImageUrl from '../Services/image-url'
import Emoji from './Emoji'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={croppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
       <PlatformIconList platforms={game.parent_platforms!=null?game.parent_platforms.map(p =>p.platform):[]}/>
       <CriticScore score={game.metacritic}></CriticScore>
       </HStack>
       <Heading fontSize='2xl' textAlign='start'>{game.name}<Emoji rating = {game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard;
