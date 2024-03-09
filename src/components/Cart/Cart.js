import {useState} from 'react'
import {Link} from 'react-router-dom'
//import OrderDetail from '../../components/OrderDetail/OrderDetail'
export default function CartPage(){
    return (
        <>
        <h1>This is the order detail</h1>
        <button><Link to ={'/home'}> Home </Link></button>
        </>
        
    )
}