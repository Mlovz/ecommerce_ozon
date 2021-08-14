import {GLOBALTYPES} from '../actions/globalTypes'


const AuthModalReducer = (state = false, action) => {
    switch(action.type){
        case GLOBALTYPES.AUTH_MODAL:
            return action.payload
        default:
            return state
    }
}

export default AuthModalReducer