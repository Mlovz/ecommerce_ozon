import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductImages from "../../utils/ProductImages";
import {addToCart} from '../../redux/actions/authAction'


const ProductCard = ({ products }) => {
	const dispatch = useDispatch();
	const {auth} = useSelector(state => state)
	// const { products } = useSelector((state) => state);


	const addCart = (product) => {
		dispatch(addToCart(product, auth))
	}

	return (
		<>
			{products.arrProducts.map((product) => {
				return (
					<div className="menu__blocks__item">
						<div className="menu__blocks__item-wrap">
							<Link to={`/menu/${product._id}`}>
								<ProductImages images={product.images} id={product._id} />
							</Link>
							{product.discount && (
								<span className="menu__blocks__item-discounts">
									{product.discount}%
								</span>
							)}

							<div className="menu__blocks__item-delivery">
								<span>Доставим на дом или по почте</span>
								<i class="far fa-truck-pickup"></i>
							</div>
							<div className="menu__blocks__item-text">
								<div className="price">
									{product.discount && (
										<h5 style={{ color: "crimson" }}>
											{product.price - (product.price * product.discount) / 100}{" "}
											₽
										</h5>
									)}
									{product.discount && (
										<h6 className={`${product.discount ? "price__before" : ""}`}>
											{product.price} ₽
										</h6>
									)}
									{
										!product.discount && <h6
										style={{ margin: !product.discount && "0" }}
										className={`${product.discount ? "price__before" : ""}`}>
										{product.price} ₽
									</h6>
									}
								</div>
								<small>Лучшая цена на An-nisa</small>
								<p>{product.title}</p>

								<div className="show_sizes">
									{product.size.map((s, index) => (
										<span key={index}>{s}</span>
									))}
								</div>
							</div>
							<div className="menu__blocks__item-btn">
								<button onClick={() => addCart(product)}>В корзину</button>
							</div>
							<span>Магазин An-nisa</span>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ProductCard;
