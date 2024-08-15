import React from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"

const MealItemForm = () => {

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input label='Amount' input={{
                    id: 'amount',
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