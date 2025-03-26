import { Button, Heading, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import croppedImageUrl from '../Services/image-url';
import { normalizePath } from 'vite';


interface Props{
    onSelectGenre : (genre:Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({onSelectGenre,selectedGenre}: Props) => {
    const {data} = useGenres();
    console.log("Data",data)

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
   <List>
    {data.map(genre => <ListItem key ={genre.id} paddingY='5px'><HStack>
        <Image boxSize='32px' 
        objectFit='cover'
        borderRadius={8}
        src={croppedImageUrl(genre.image_background)}>
            </Image>
            <Button  whiteSpace ='normal' textAlign ='left' fontSize='lg' fontWeight={genre.id===selectedGenre?.id ? 'bold': 'normal'} variant='link' onClick={()=>{
                onSelectGenre(genre)}}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
   </List>
   </>
  )
}

export default GenreList;
