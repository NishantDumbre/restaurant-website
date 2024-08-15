import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css"

export const Cart = () => {
    return (
        <div className='cart-container'>
            <FaShoppingCart size={40} />
            <p className='cart-name'>Cart</p>
            <div className='cart-value-container'>
                <p className='cart-value'>5</p>
            </div>
        </div>
    )
}
