import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";
import {getDataApi} from '../../utils/fetchDataApi'



export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await axios.post("/user/login", userData);
    localStorage.setItem("firstlogin", true);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: res.data,
    });
    dispatch({type: GLOBALTYPES.AUTH_MODAL, payload: false})
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem("firstlogin");
  if (firstLogin) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    try {
      const res = await axios.get("/user/refresh_token");
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: res.data,
      });
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  }
};


export const logout = () => async (dispatch) => {
  try {
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
    localStorage.removeItem('firstlogin')
    const res = await axios.post('/user/logout')
    window.location.href = '/'
    dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
}


export const addToCart = (product, auth) => async (dispatch) => {
  const {cart} = auth.user
  try {
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading :true}})
    const check = cart.every(item => {
      return (item._id !== product._id)
    })

    if(check){
      await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]},{
        headers: {Authorization: auth.token}
      })
      dispatch({
        type: GLOBALTYPES.ADD_CART,
        payload: product,
      });
      dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
      
    }else{
      dispatch({type: GLOBALTYPES.ALERT, payload: {error: 'Вы уже добавили этот товар в корзину. Для изменения количество или оформление заказа, перейдите в корзину!'}})
    }

    
    
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
}

export const deleteToCart = (id, cart, auth) => async(dispatch) => {
  // console.log(cart);
  // const newCart  = {cart: [...auth.user.cart.filter(item => item._id !== id)]}

  // console.log(newCart);
  
  // dispatch({
  //   type: GLOBALTYPES.ADD_CART,
  //   payload: newCart,
  // });
  
  // console.log(id, cart);
}

