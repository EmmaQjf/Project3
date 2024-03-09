import ClothesList from "../ClothesList/ClothesList"
import {useState, useEffect} from 'react'
export default function SearchedItem (
    {input, allClothes}
){

    const[searchedItems, setSearchedItems] = useState([])
   useEffect(function(){
       const foundClothes = allClothes.filter(cloth => cloth.title.toLowerCase().includes(input.toLowerCase().trim()));
       setSearchedItems(foundClothes);
   },[input])

    // const searchedClothes = () => {
    //     return allClothes.filter(cloth => cloth.title.toLowerCase().includes(input.toLowerCase().trim()))}
    //    console.log(searchedClothes())
       
    return (
        <>
         {
            searchedItems.length?
            <ClothesList clothes={searchedItems}/>:'NO match items'

         }
        </>
    )
       
}