import React, {useContext} from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = (itemId) =>{
        

    }

    const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        // onRemove={cartItemRemoveHandler.bind(null, item.id)}
        // onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>


    const onCloseHandler = () =>{
        props.onClose()
    }

    

  return (
    <Modal onClick={onCloseHandler}>
        {cartItems}
        <div className={classes.total} >
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions} >
            <button type='click' className={classes['button--alt']} onClick={onCloseHandler} >Close</button>
            <button type='click' className={classes.button}  >Order</button>
        </div>
    </Modal>
  )
}

export default Cart