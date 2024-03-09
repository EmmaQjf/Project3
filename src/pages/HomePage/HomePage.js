import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header'
import OrderDetail2 from '../../components/OrderDetail2/OrderDetail2';
import InitialDisplay from '../../components/InitialDisplay/initialDisplay';
import styles from './HomePage.module.scss'
import SearchedItem from  '../../components/SearchedItem/SearchedItem'
import SearchBar from '../../components/SearchBar/SearchBar'


export default function HomePage(
    { user, setUser }
){

    // deal with the categories and decide which clothList to show 
    const [cart, setCart] = useState(null);
  

    // toggle to see which page/components to show
    const [showOrderCart, setShowOrderCart] =useState(false)
    const navigate = useNavigate();
    useEffect(function(){
        async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, [])
       
          //deal with the cart 
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
    
         
        async function handleChangeQty(itemId, newQty) {
            const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
            setCart(updatedCart);
          }
        
          async function handleCheckout() {
            await ordersAPI.checkout();
            navigate('/orders');
          }


          
          const [allClothes, setAllClothes]= useState(null)
        useEffect(() => {
        async function getAllClothes() {
            try {
                const clothes = await itemsAPI.getAll();
                setAllClothes(clothes);
            } catch (error) {
                console.error(error);
            }
        }
        getAllClothes();
       }, []);

          const [input, setInput] = useState('')
          
     
          
    return(

        <div className={styles.HomePage}>
           
           <Header setUser={setUser} quantity={quantity} setShowOrderCart={setShowOrderCart}/>
            <h3>Welcome! {user.name}</h3>
            <SearchBar input={input} setInput={setInput}/>

            <CategoryList/>
            {
                input?
                <SearchedItem  input={input} allClothes={allClothes}/>:<InitialDisplay/>
            }
            
             
        

            {showOrderCart?
                <div className={styles.DarkOverlay}>
                <OrderDetail2 
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
                setQuantity ={setQuantity}
                showOrderCart = {showOrderCart}
                setShowOrderCart = {setShowOrderCart}
                />
                </div>:
                <></>}

        </div>
)
}