import React, {Component} from 'react'
import classes from './Order.css'
import PopOver from './PopOver/PopOver'

class Order extends Component {
    state = {
        show: false,
        clickedSpan: null
    }

    showPopOverHandler = (e, ing) => {
        this.setState((prevState, props) => { 
            return {
                clickedSpan : ing.name,
            }
        })
    }

    render(){
        const style = {
            position: 'relative',
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }
        const ingredients = []

        for (let ingredientName in this.props.ingredients) {
            ingredients.push({
                name: ingredientName,
                amount: this.props.ingredients[ingredientName]
            })
        }

        const ingredientOutput = ingredients.map((ing, i) => (
            <span 
                onClick={e => {this.showPopOverHandler(e, ing)}} 
                style={style} 
                key={ing.name}>
                        {ing.name}: ({ing.amount})
                    {this.state.clickedSpan === ing.name?
                        <PopOver 
                            name={ing.name} 
                        /> 
                    : null}
            </span>
        ))

        return (
            
        
            <div className={classes.Order}>
                {ingredientOutput}
                <p >
                    Price : <b>NGN {Number.parseFloat(this.props.price).toFixed(2)}   </b>
                </p>
            </div>
        )
        
    }
    
}

export default Order