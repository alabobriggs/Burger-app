import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
import {withRouter} from 'react-router-dom'

const burger = (props) => {
    let tranformedIngredients =
        // create an array with the values being the key of props.ingredients
        Object.keys(props.ingredients).map(ingKey => {
            return (
                // creates an array with the number of values entering based on the numbers specified
                [...Array(props.ingredients[ingKey])].map((_, i) => (
                    <BurgerIngredient key={ingKey + i} type={ingKey} />
                ))
            )
        })
        .reduce((prevValue, currentValue) => {
            return prevValue.concat(currentValue)
        }, [])


    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients!</p>;
    }
    
    return (
        <div className={classes.Burger}> 
            <BurgerIngredient type='bread-top'/>
            {tranformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default withRouter(burger)
