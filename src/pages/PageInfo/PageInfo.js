import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as categoriesAPI from '../../utilities/categories-api';
import * as ordersAPI from '../../utilities/orders-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import ClothesList from '../../components/ClothesList/ClothesList'
import Header from '../../components/Header/Header'
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Cloth from '../../components/Cloth/Cloth'
import OrderDetail2 from '../../components/OrderDetail2/OrderDetail2';
import InitialDisplay from '../../components/InitialDisplay/initialDisplay';
import styles from './HomePage.module.scss'

export default function HomePage(
    { user, setUser }
){

    // deal with the categories and decide which clothList to show
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);

    // toggle to see which page/components to show
    const [showOrderCart, setShowOrderCart] =useState(false)
    const[showClothPage, setShowClothPage] = useState(true)

    const navigate = useNavigate();

    useEffect(function() {
        async function getAllCategories(){
            try {
                const categories = await categoriesAPI.getAll()
                setCategories(categories)
                //   categoriesRef.current = categories.reduce((cats, item) => {
                //     const cat =item.name;
                //     return [...cats, cat]}
                // ,[])
                categoriesRef.current = categories.map(category => category.name);
                // setActiveCat(categoriesRef.current[0]);
                setActiveCat(null);
            } catch (error) {
                console.error(error);
            }
          
    }
        getAllCategories();
    }, []);

    useEffect(function(){
        async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, [])
       

     //figure out on the clothlist page, which button to click and what detailed info page of cloth to show
        const[currentItem, setCurrentItem] = useState({})
       

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
     
          
    return(

        <div className={styles.HomePage}>
           
           <Header setUser={setUser} quantity={quantity} setShowOrderCart={setShowOrderCart}/>
            <h3>Welcome! {user.name}</h3>

            <CategoryList
            categories={categories}
            allcategories = {categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            setShowClothPage={setShowClothPage}
            />

            {activeCat? null: <InitialDisplay/> }
        

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

            
            {
                showClothPage? 
                <ClothesList 
                activeCat={activeCat}
                categories={categories}
                setCurrentItem={setCurrentItem}
                showClothPage={showClothPage}
                setShowClothPage={setShowClothPage}
                />
                :<div className={styles.ClothPage}>
                    <div>
                        <Cloth 
                       cloth = {currentItem}
                        handleAddToOrder={handleAddToOrder}
                        />
                    </div>
            
                    <div>
                        <OrderDetail 
                        order={cart}
                        handleChangeQty={handleChangeQty}
                        handleCheckout={handleCheckout}
                        setQuantity ={setQuantity}
                        />
                    </div>

                </div>
            }
            
    </div>
)
}