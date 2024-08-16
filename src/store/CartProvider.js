import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

  const [cartItems, setCartItems] = useState([])

  const addItemToCartHandler = (item) => {



    setCartItems((prevState) =>{
      
      return [...prevState, item]
    })
  }

  const removeItemFromCartHandler = () => {

  }

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider