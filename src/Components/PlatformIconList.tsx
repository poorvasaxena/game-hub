import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import {FaWindows,FaPlaystation, FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons';
import { color } from 'framer-motion';

interface Props{
   platforms : Platform[] 
}

const PlatformIconList = ({platforms}:Props) => {
 const iconMap :{[key:string]:IconType}={
    pc:FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    nintendo : SiNintendo,
    mac: FaApple,
    linux : FaLinux,
    android : FaAndroid,
    ios : MdPhoneIphone,
    web :BsGlobe
 }
    return (
    <HStack marginY={1}>
        {platforms.map((platform) => {
         return <Icon as={iconMap[platform.slug]} color="gray.500"  key={platform.id}/>;
})}
</HStack>
  );
}

export default PlatformIconList;
