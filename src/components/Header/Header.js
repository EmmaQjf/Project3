import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from '../Logo/Logo'
import { ShoppingCart, UserRound } from 'lucide-react';


export default function Header(
    {setUser, 
    quantity,
    setShowOrderCart}
){
    
    return (
        <div className={styles.Header}>
            
           <div className={styles.flex}>
            <Link to ='/home'><Logo /></Link>
            <Link to ='/home' className={styles.link}><h1>Victorian Vintage Clothes</h1></Link>
           </div>
           <UserLogOut setUser={setUser}/>
           <button><Link to="/orders">orders</Link></button>
           <div>
          {/* <Link to = {'/auth'}><UserRound size={32}/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           <div className={styles.container}onClick={()=>setShowOrderCart(true)}><ShoppingCart  size={48}/> <span className={styles.cartQuantity}>{quantity}</span></div>
           </div>
  
        </div>
    )
}