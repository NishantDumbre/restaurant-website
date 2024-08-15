import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'

const Cart = () => {

    const cartItems = [{id:1, name:'Sushi', amount:1, price:12.33}].map((item) =>{
        return <li key={item.id} >{item.name}</li>
    })

  return (
    <Modal>
        <ul>
        {cartItems}
        </ul>
        <div className={classes.total} >
            <span>Total Amount</span>
            <span>35.32</span>
        </div>
        <div className={classes.actions} >
            <button type='click' className={classes['button--alt']}  >Close</button>
            <button type='click' className={classes.button}  >Order</button>
        </div>
    </Modal>
  )
}

export default Cart