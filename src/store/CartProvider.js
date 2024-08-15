import React from 'react'
import Card from '../components/UI/Card'

const CartProvider = () => {
  return (
    <Card>
        <p>Sushi</p>
        <div>
            <h3>Total Amount</h3>
            <h3>{price}</h3>
        </div>
        <div>
            <button type='click' >Close</button>
            <button type='click' >Order</button>
        </div>
    </Card>
  )
}

export default CartProvider