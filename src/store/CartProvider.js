import React, { useState, useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState = {
  items: [],
  totalAmount: 0
}


const cartReducer = ((state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.items.price * action.items.quantity

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.items.id)
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + action.items.quantity }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else {
      updatedItems = state.items.concat(action.items)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
    const existingItem = state.items[existingItemIndex]

    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems

    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    }
    else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }

  }

  return defaultCartState
})


const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', items: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
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