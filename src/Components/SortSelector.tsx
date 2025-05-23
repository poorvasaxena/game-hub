import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
  onSelectOrder : (sortOrder:string) => void; 
   sortOrder:string;
}

const SortSelector = ({onSelectOrder,sortOrder}: Props) => {
    const sortOrders = [
        {value:'', label : 'Relevance'},
        {value:'-added', label : 'Date added'},
        {value:'name', label : 'Name'},
        {value:'-released', label : 'Release Date'},
        {value:'-metacritic', label : 'Popularity'},
        {value:'-rating', label : 'Average Rating'}
    ];
    const currentSortorder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
         <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by : Relevance {currentSortorder?.label}</MenuButton>
         <MenuList>
           {sortOrders.map(order => <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
         </MenuList>
        </Menu>
       )

}

export default SortSelector;
