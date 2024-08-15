import React from 'react'
import classes from "./Card.module.css"

const Card = (props) => {

    const summaryClass = props.className + ' ' + classes.card

    return (
        <div className={summaryClass}>
            <p>Delivious Food Delivered To You</p>
            <p>Choose your favorite meal from our broad selection of available meals and have them delivered to your home</p>
            <p>All our meals are cooked with high-quality ingredients just-in-time and ofcourse by experienced chefs!</p>
        </div>
    )
}

export default Card