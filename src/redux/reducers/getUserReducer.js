import {GLOBALTYPES} from '../actions/globalTypes'


const initialState = {
    user: [],
    cart: []
}

const getUserReducer = (state = initialState, action)=> {
    switch(action.type){
        case GLOBALTYPES.GET_USER:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        // case GLOBALTYPES.ADD_CART:
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.payload]
        //     }
        default:
            return state
    }
}

export default getUserReducer