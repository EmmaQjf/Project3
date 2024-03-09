// export default function ClotheListPage(){
//     return(
//         <h1>ClotheListPage</h1>
//     )
// }

import ClothesList from '../../components/ClothesList/ClothesList'
import Header from '../../components/Header/Header'
import CategoryList from '../../components/CategoryList/CategoryList';
import * as ordersAPI from '../../utilities/orders-api';
import * as categoriesAPI from '../../utilities/categories-api';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function ClotheListPage(
    {
       user, setUser
    }
){

    const {name} = useParams()
    const[clothes, setClothes] = useState([])

    useEffect(() => {
          const fetchClothes = async () => {
            try {
              const fetchIndividualCategory = await categoriesAPI.individualCategory(name);
               if(fetchIndividualCategory){
                setClothes(fetchIndividualCategory.items);
               } else {
                setClothes([]);
               }  
             } catch(error) {
              console.error(error);
            }
          };
          fetchClothes();
        }, [name]);

        console.log(clothes)

    const navigate = useNavigate();

     // deal with the categories and decide which clothList to show 
     const [cart, setCart] = useState(null);
     const [showOrderCart, setShowOrderCart] =useState(false)
     useEffect(function(){
         async function getCart() {
         const cart = await ordersAPI.getCart();
         setCart(cart);
       }
       getCart();
     }, [])

    const [quantity, setQuantity] = useState(0)
    useEffect(()=> {
        async function aboutQuantity() {
            try {
                if (cart) {
                    setQuantity(cart.totalQty)
                } else {
                    setQuantity(0)
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        aboutQuantity()   
    },[cart]) 
 

    return(
       <>
       <Header setUser={setUser} quantity={quantity} setShowOrderCart={setShowOrderCart}/>
            <h3>Welcome! {user.name}</h3>

            <CategoryList/>

            <ClothesList 
                clothes={clothes}
                />
       </>
    )
}