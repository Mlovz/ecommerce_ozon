import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ShowSize from "../../components/ShowSize";

import {addToCart} from '../../redux/actions/authAction'

import ZoomScale from "react-medium-image-zoom";
import { getProducts } from "../../redux/actions/productAction";
import "react-medium-image-zoom/dist/styles.css";
import DeliveryModal from "./DeliveryModal";
import { Text } from "./DetailText";

const DetailProduct = () => {
	const params = useParams();
	const { pathname } = useLocation();
	const { products, auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [detail, setDetail] = useState([]);
	const [idx, setIdx] = useState(0);
	const [selectCheck, setSelectCheck] = useState("50 RU / S");
	const [selectOpen, setSelectOpen] = useState(false);
	const [sizeOpen, setSizeOpen] = useState(false);
	const [deliveryGar, setDeliveryGar] = useState(false);
	const [delivery, setDelivery] = useState(false);

	const isActive = (index) => {
		if (index === idx) return "active";
	};

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch, params.id]);

	useEffect(() => {
		if (params) {
			products.arrProducts.forEach((product) => {
				if (product._id === params.id) setDetail(product);
			});
		}
	}, [params]);

	

	const addCart = () => {
		dispatch(addToCart(detail, auth))
	}
	
	if (detail.length === 0) return null;
	return (
		<div className="detail">
			<div className="container mb-4">
				<div className="location_pos">
					<span>Главная </span>
					<span> > </span>
					<span>
						{pathname === `/menu/${detail._id}` &&
							`Каталог > Мужская одежда > ${detail.title}`}{" "}
					</span>
				</div>
			</div>
			<div className="container">
				<div className="detail__title">
					<h5>{detail.title}</h5>
				</div>

				<div className="detail__img__wrap">
					<div className="detail__img">
						<div className="small__img">
							{detail.images.map((img, index) => (
								<img
									src={img.url}
									width="500"
									className={isActive(index)}
									onMouseMove={() => setIdx(index)}
								/>
							))}
						</div>
						<div className="big__img">
							<ZoomScale zoomMargin={100}>
								<img src={detail.images[idx].url} width="400" alt="" />
							</ZoomScale>
						</div>
					</div>

					<div className="detail__about">
						<div className="detail__about__title">О товаре</div>
						<div className="detail__about__body">
							<div className="detail__about__body__item">
								<strong>
									Сезон<span>............................................</span>
								</strong>
								<strong>Демисезон</strong>
							</div>
							<div className="detail__about__body__item">
								<strong>
									Материал<span>.................................</span>
								</strong>
								<strong>Полиэстер</strong>
							</div>
							<div className="detail__about__body__item">
								<strong>
									Состав материала<span>...........</span>
								</strong>
								<div>Полиэстер 100%</div>
							</div>
							<div className="detail__about__body__item">
								<strong>
									Материал подклада<span>........</span>
								</strong>
								<strong>Полиэстер</strong>
							</div>
							<div className="detail__about__body__item">
								<strong>
									Коллекция<span>..................................</span>
								</strong>
								<strong>Весна-Лето 2021</strong>
							</div>
						</div>
					</div>

					<div className="detail__body">
						<div className="detail__body__wrap">
							<div className="detail__body__title">
								<span>{detail.title}</span>
								<span className="detail__body__title--discount">
									{detail.discount}%
								</span>
							</div>

							<div className="price detail__body__title--price">
								{detail.discount && (
									<h5 style={{ color: "crimson" }}>
										{detail.price - (detail.price * detail.discount) / 100} ₽
									</h5>
								)}
								{detail.discount && (
									<h6 className={`${detail.discount ? "price__before" : ""}`}>
										{detail.price} ₽
									</h6>
								)}
								{!detail.discount && (
									<h6
										style={{ margin: !detail.discount && "0" }}
										className={`${detail.discount ? "price__before" : ""}`}>
										{detail.price} ₽
									</h6>
								)}
							</div>

							<div className="detail__rating">
								<Rating />
								<div className="detail__rating__rewievs">
									<span>5 отзывов</span>
								</div>
							</div>

							<div className="detail__body__options">
								<div className="detail__body__options--text">
									<label>Выберите размер:</label>
									<span onClick={() => setSizeOpen(true)}>
										Таблица размеров
									</span>
								</div>
								<div
									onClick={() => setSelectOpen(!selectOpen)}
									className="detail__body__options--select">
									<span className="select-check__span">
										{selectCheck}
										{selectCheck === "46" && <strong>RU / S</strong>}
										{selectCheck === "48" && <strong>RU / M</strong>}
										{selectCheck === "50" && <strong>RU / L</strong>}
										{selectCheck === "52" && <strong>RU / XL</strong>}
										{selectCheck === "54" && <strong>RU / XXL</strong>}
									</span>
									{selectOpen && (
										<div className="detail__body__options__selectModal">
											{detail.size.map((s, index) => {
												return (
													<li
														key={detail._id}
														onClick={() => setSelectCheck(s)}>
														<span>{s}</span>
														{s === "46" && <strong>RU / S</strong>}
														{s === "48" && <strong>RU / M</strong>}
														{s === "50" && <strong>RU / L</strong>}
														{s === "52" && <strong>RU / XL</strong>}
														{s === "54" && <strong>RU / XXL</strong>}
													</li>
												);
											})}
										</div>
									)}

									<i className="fas fa-angle-down"></i>
								</div>
							</div>

							<div className="detail__body__btn">
								<button className="btn" onClick={addCart}>Добавить в корзину</button>
								<span>
									<i className="far fa-heart"></i>
								</span>
							</div>
						</div>
						<div className="detail__body__delivery">
							<div className="detail__body__delivery__item">
								<i className="far fa-truck"></i>
								<div className="detail__body__delivery__item--title">
									<span>
										Удобная примерка
										<i onClick={() => setDelivery(!delivery)} className="fad fa-exclamation-circle"></i>
									</span>
									<span>При доставке курьером</span>
								</div>
								{delivery && <DeliveryModal setDelivery={setDelivery} text={Text.deliveryText}/>}
								
							</div>
							
							<div className="detail__body__delivery__item">
								<i className="far fa-exchange-alt"></i>
								<div className="detail__body__delivery__item--title">
									<span>
										Гарантия легкого возврата{" "}
										<i
											onClick={() => setDeliveryGar(!deliveryGar)}
											className="fad fa-exclamation-circle"></i>
									</span>
									<span>До 7 дней на возврат, полная гарантия</span>
								</div>
								{deliveryGar && <DeliveryModal setDeliveryGar={setDeliveryGar} text={Text.grant}/>}

							</div>
						</div>
					</div>

					{sizeOpen && <ShowSize setSizeOpen={setSizeOpen} />}
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
