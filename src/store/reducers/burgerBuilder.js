import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utitlity'

// create inital state
const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false,
    building: false
}

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    // accept ingredient
    const updatedIngredient = {
        [action.ingredientName]:
            state.ingredients[action.ingredientName] + 1
    }

    // update state ingredients
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)

    // update state
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIng = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        building: true
    }

    const updatedIngs = updateObject(state.ingredients, updatedIng)

    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
    }
    return updateObject(state, updatedSt)

}


const setIngredients = (state,action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 0,
        error: false,
        building:false
    })
}

const fetchIngredientFailed = (state) => {
    return updateObject(state, {
        error: true
    })
}

// create reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return addIngredient(state, action)

        case actionTypes.REMOVE_INGREDIENT :
            return removeIngredient(state, action)    

        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state,action)
    
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientFailed(state)

        default:
            return state
    }

}

export default reducer
