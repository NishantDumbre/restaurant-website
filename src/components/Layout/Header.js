import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"

import { Cart } from './Cart'

export const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <Cart></Cart>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A food table' />
            </div>
        </Fragment>
    )
}
