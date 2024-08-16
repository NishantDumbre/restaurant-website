import React, { useContext } from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"
import CartContext from "../../../store/cart-context"

const MealItemForm = (props) => {

    const cartCtx = useContext(CartContext)

    const addItemToCart = (event) => {
        event.preventDefault()

        //getting the value from the DOM and converting to integer
        let quantity = document.getElementById('amount' + props.items.id).value
        quantity = parseInt(quantity)

        // checking if the product already existed, if yes, then added the new quantity to existing
        let itemFound = cartCtx.items.filter((item) =>{
            return item.id === props.items.id
        })
        if(itemFound.length){
            quantity = itemFound[0].quantity + quantity
        }

        // Created a new item and replaced old quantity with new and set it to cart
        const item = {...props.item, quantity:quantity}
        cartCtx.addItem(item)
    }


    return (
        <div>
            <form className={classes.form} onSubmit={addItemToCart}>
                <Input label='Amount' input={{
                    id: 'amount' + props.items.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1
                }} />
                <button type='submit'>+ Add</button>
            </form>
        </div>
    )
}
export default MealItemForm