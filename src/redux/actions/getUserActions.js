import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";


// export const infoUser = (token) => async (dispatch) => {
//     try {
//       dispatch({type: GLOBALTYPES.ALERT, payload: {loading :true}})
     
  
//       const res = await axios.get('/user/infor', {
//         headers: {Authorization: token}
//       }) 
//       dispatch({type: GLOBALTYPES.GET_USER, payload: res.data })
//       console.log(res);
  
      
//       dispatch({type: GLOBALTYPES.ALERT, payload: {loading :false}})
      
//     } catch (err) {
//       dispatch({
//         type: GLOBALTYPES.ALERT,
//         payload: {
//           error: err.response.data.msg,
//         },
//       });
//     }
//   }

  // export const addToCart = (product, cart, token) => async (dispatch) => {
  //   try {
  //     dispatch({type: GLOBALTYPES.ALERT, payload: {loading :true}})
  //     const check = cart.every(item => {
  //       return (item._id !== product._id)
  //     })
  
  //     if(check){
  //       const res = await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]},{
  //         headers: {Authorization: token}
  //       })
  //       console.log(res);
  //       // dispatch({type: GLOBALTYPES.ADD_CART, payload: product})
  //       dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
        
  //     }else{
  //       dispatch({type: GLOBALTYPES.ALERT, payload: {error: 'Вы уже добавили этот товар в корзину. Для изменения количество или оформление заказа, перейдите в корзину!'}})
  //     }
  
      
      
  //   } catch (err) {
  //     dispatch({
  //       type: GLOBALTYPES.ALERT,
  //       payload: {
  //         error: err.response.data.msg,
  //       },
  //     });
  //   }
  // }