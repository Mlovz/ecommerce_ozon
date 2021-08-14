import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { deleteToCart } from "../redux/actions/authAction";
import axios from "axios";

const Cart = () => {
	const { pathname } = useLocation();
	const { auth, alert } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [cart, setCart] = useState([]);
	const [idx, setIdx] = useState(0)

	useEffect(() => {
		if (auth.token) {
			setCart(auth.user.cart);
		}
	}, [auth.token, alert]);

	const deleteCart = async(id) => {
		// cart.forEach((item, index) => {
        //     if(item._id === id){
        //         cart.splice(index, 1)
        //     }
        // })
		
		// // setCart([...cart])
		// await axios.patch('/user/addcart', {cart},{
		// 	headers: {Authorization: auth.token}
		// })

		dispatch(deleteToCart(id, cart, auth))
		
	}
	
	return (
		<div className="cart">
			<div className="container">
				<div className="location_pos">
					<span>Главная </span>
					<span> > </span>
					<span>{pathname === "/cart" && "Корзина"} </span>
				</div>

				<div className="title cart__title">
					<span> {cart.length === 0 ? "Корзина пуста" : "Корзина"}</span>
				</div>

				{cart.length === 0 && (
					<div className="cart__text">
						<p>Воспользуйтесь поиском, чтобы найти всё что нужно.</p>
						{!auth.token && (
							<p>
								Если в корзине были товары –
								<span
									onClick={() =>
										dispatch({ type: GLOBALTYPES.LOGIN_MODAL, payload: true })
									}>
									войдите
								</span>
								, чтобы посмотреть список.
							</p>
						)}
					</div>
				)}
				{cart.length > 0 && (
					<div className="cart__body">
						<div className="cart__body__items">
							<div className="cart__body__items-header">
								<div className="cart__body__items-length">
									<span>{cart.length} товаров</span>
								</div>
								<div className="cart__body__items-detele">
									<div>
										<input type="checkbox" />
										<span className="radio_input_check">Выбрать все</span>
									</div>
									<span className="radio__delete__span">удалить выбранные</span>
								</div>
							</div>
							{cart.map((c, index) => {
								return (
									<div key={c._id} className="cart__body__item">
										<div className="cart__body__item-img">
											<input type="checkbox" />
											<div className='cart__body__item-img__bottom'>
												<img src={c.images[0].url} alt="" />
												
											</div>
											<div className="cart__body__item-text">
												<div className="text__wrap">
													<h3>{c.title}</h3>
													<span>Gucci</span>
													<strong>{c.product_id}</strong>
												</div>
												<div className="cart__body__item-btn">
													<button className="btn-favorite">В избранное</button>
													<button onClick={() => deleteCart(c._id)} className="btn-delete">удалить</button>
												</div>
											</div>
										</div>

										<div className="cart__body__item-count">
											<div className="count_price">{c.price} ₽</div>
											<div className="count__body">
												<span className="count__body__prev">-</span>
												<strong className="count__body__result">1</strong>
												<span className="count__body__next">+</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="cart__body__buy">
							<span>Общая стоимость</span>
							<h4 className="cart__body__buy-price"> 12 465 р</h4>
							<button>Оформить покупку</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
