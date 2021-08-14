import {PRODUCT_ACTIONS} from '../actions/productAction'

const initialState = {
    loading: false,
    arrProducts: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                arrProducts: [...state.arrProducts, action.payload]
            }
        case PRODUCT_ACTIONS.LOADING_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case PRODUCT_ACTIONS.GET_PRODUCT:
            return {
                ...state,
                arrProducts: action.payload.product
            }
        default:
            return state;
    }
}

export default productReducer