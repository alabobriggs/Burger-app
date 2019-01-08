import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'

// REDUX
import {connect} from 'react-redux'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        error: null
    }

    componentDidMount(){
        document.title = 'Burger App - Home'
        this.props.onInitIngredients()
    }

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({purchasing: true})
        } else {
            this.props.onSetRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }

    purchaseCancelHandler = () => {
        this.setState((prevState,props) => {
            return {
                purchasing: false
            }
        })
    }

    updatePurchaseStateHandler = (ingredients) => {
        // check if Order button can be clicked
        const sum = Object.keys(ingredients) 
                    .map(ingKey => ingredients[ingKey])
                    .reduce((sum,element) => { 
                        return sum + element;
                    }, 0)
        return sum > 0
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        let burger = this.props.error ? <p>Not today human. Come another day</p> : <Spinner />

        if (this.props.ings) {

            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />

                    <BuildControls
                        ingredientRemoved={this.props.onIngredientRemove}
                        ingredientAdded={this.props.onIngredientAdded}
                        disabled={disabledInfo}
                        purchaseable={this.updatePurchaseStateHandler(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice}
                        isAuth = {this.props.isAuthenticated}
                    />
                </Aux>)

            orderSummary = <OrderSummary
            purchaseCanceled={this.purchaseCancelHandler}
            ingredients={this.props.ings}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.props.totalPrice}
            />

        }   


        return <Aux>
            <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
               {orderSummary}
            </Modal>
            {burger}
        </Aux>
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated : state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),

        onIngredientRemove: (ingName) => dispatch(actions.removeIngredient(ingName)),

        onInitIngredients: () => dispatch(actions.initIngredients()),

        onInitPurchase: () => dispatch(actions.purchaseInit()),

        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios) )