import React, { useContext, useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"
import CartContext from "../../../store/cart-context"

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)
    const cartCtx = useContext(CartContext)
    const amountRef = useRef()

    const addItemToCart = (event) => {
        event.preventDefault()

        let quantity = amountRef.current.value
        let quantityValue = parseInt(quantity)

        if(quantity.trim().length ===0 ||
            quantityValue > 5 ||
            quantityValue < 1){
                setAmountIsValid(false)
                return
            }
        
        const newItem = {...props.items, quantity:quantityValue}
        cartCtx.addItem(newItem)
    }


    return (
        <div>
            <form className={classes.form} onSubmit={addItemToCart}>
                <Input 
                ref={amountRef}
                label='Amount' 
                input={{
                    id: 'amount' + props.items.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }} />
                <button type='submit'>+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount</p>}
            </form>
        </div>
    )
}
export default MealItemForm