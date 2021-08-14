import {GLOBALTYPES} from '../actions/globalTypes'


const initialState = {
    user: {},
    token: '',
}

const authReducer = (state = initialState, action)=> {
    switch(action.type){
        case GLOBALTYPES.AUTH:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.accesstoken
            }
        case GLOBALTYPES.ADD_CART: {
            return{
                ...state,
                user: {...state.user, cart: [...state.user.cart, action.payload]}
            }
        }
        case GLOBALTYPES.DELETE_CART: {
            return{
                ...state,
                user: {...state.user, cart: [...state.user.cart, action.payload]}
            }
        }
        default:
            return state
    }
}

export default authReducer