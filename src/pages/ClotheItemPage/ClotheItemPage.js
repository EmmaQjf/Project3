
import * as ordersAPI from '../../utilities/orders-api';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Cloth from '../../components/Cloth/Cloth'
import * as itemsAPI from '../../utilities/items-api'
import Header from '../../components/Header/Header'
import CategoryList from '../../components/CategoryList/CategoryList';
import * as categoriesAPI from '../../utilities/categories-api';
import { useState, useEffect, useRef } from 'react';
import styles from './ClotheItemPage.module.scss'
export default function ClotheItemPage(
    {
        user, setUser
     }
){
     const {id} = useParams()
     const navigate = useNavigate();
     const [currentCloth, showCurrentCloth] = useState({})

     useEffect(function(){
        async function getCloth(){
            try {
                const data = await itemsAPI.getOneItem(id)
                showCurrentCloth(data)
            }catch(error){
                console.error(error)
            }
        }
        getCloth()  
     },[])

      
       // functions to deal with the cart/order
        async function handleAddToOrder(itemId) {
            const updatedCart = await ordersAPI.addItemToCart(itemId);
            setCart(updatedCart);
          }
        
          async function handleChangeQty(itemId, newQty) {
            const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
            setCart(updatedCart);
          }
        
          async function handleCheckout() {
            await ordersAPI.checkout();
            navigate('/orders');
          }
     
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
         <div className={styles.ClotheItemPage}>
            <Header setUser={setUser} quantity={quantity} setShowOrderCart={setShowOrderCart}/>
            <h3>Welcome! {user.name}</h3>
            <CategoryList/>
            <div className={styles.ClothPage}>
                    
                        <Cloth 
                       cloth = {currentCloth}
                        handleAddToOrder={handleAddToOrder}
                        />
                    
            
                    
                        <OrderDetail 
                        order={cart}
                        handleChangeQty={handleChangeQty}
                        handleCheckout={handleCheckout}
                        setQuantity ={setQuantity}
                        />
                    

            </div>
        </div>

    )
}