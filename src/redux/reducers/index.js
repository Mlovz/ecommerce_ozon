import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import authModal from './authModalReducer'
import products from './productReducer'
import category from './categoryReducer'
import getUser from './getUserReducer'


const rootReducer = combineReducers({
    auth,
    alert,
    authModal,
    products,
    category,
    getUser
})

export default rootReducer