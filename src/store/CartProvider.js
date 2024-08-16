import React, { useState, useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState ={
  items:[],
  totalAmount: 0
}


const cartReducer = ((state, action) =>{
  if(action.type === 'ADD'){
    const updatedTotalAmount = state.totalAmount + action.items.price * action.items.quantity

    const existingCartItemIndex  = state.items.findIndex((item) => item.id === action.items.id)
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if(existingCartItem){
      const updatedItem = {...existingCartItem, quantity:existingCartItem.quantity + action.items.quantity}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else{
      updatedItems = state.items.concat(action.items)
    }
 
    
    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState
})


const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD', items:item})
  }

  const updateItemInCartHandler = (item) =>{

  }

  const removeItemFromCartHandler = () => {

  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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