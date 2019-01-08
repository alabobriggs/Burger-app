import React, {PureComponent} from 'react'
import Aux from '../../../hoc/Auxillary/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends PureComponent { 
    // This can be a functional component doesn't have to be a class
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
                                        {this.props.ingredients[ingKey]}
                    </li>
                )
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><b>Total price: {this.props.price.toFixed(2)}</b></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        ) 
    }
}

export default OrderSummary