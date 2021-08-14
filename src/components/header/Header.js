import React, { useEffect, useState } from "react";
import Location from "../../images/header/Ellipse 48.png";
import Search from "../../images/header/search.png";
import { Link, useLocation } from "react-router-dom";
import Login from "../login/Login";
import Profile from "../profile/Profile";

import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Header = () => {
	const { auth, authModal } = useSelector((state) => state);
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	const isActive = (pn) => {
		if (pn === pathname) return "active";
	};

	const Router = () => {
		if (auth.user.role === 1) {
			return (
				<div>
					<Link className="header__top__link" to="/create_news">
						Добавить новости
					</Link>
					<Link className="header__top__link" to="/create_product">
						Добавить товары
					</Link>
					<Link className="header__top__link" to="/create_category">
						Добавить категории
					</Link>
				</div>
			);
		} else {
			return <div></div>;
		}
	};

	return (
		<div className="header">
			<div className="container">
				<div className="header__top">
					<div className="header__top__left">
						<div className="header__top__location">
							<span className="hd_top_span--fs">Ru</span>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Ingushetia.svg/1200px-Flag_of_Ingushetia.svg.png"
								alt=""
							/>
						</div>
						<div className="header__top__city">
							<svg
								width="15"
								height="19"
								viewBox="0 0 21 29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.5 0C4.71027 0 0 4.71149 0 10.5027C0 17.6897 9.39647 28.2407 9.79653 28.6863C10.1723 29.1049 10.8284 29.1042 11.2035 28.6863C11.6035 28.2407 21 17.6897 21 10.5027C20.9999 4.71149 16.2897 0 10.5 0ZM10.5 15.7868C7.58704 15.7868 5.21724 13.4164 5.21724 10.5027C5.21724 7.58895 7.5871 5.21853 10.5 5.21853C13.4129 5.21853 15.7827 7.589 15.7827 10.5027C15.7827 13.4164 13.4129 15.7868 10.5 15.7868Z"
									fill="white"
								/>
							</svg>
							<span className="hd_top_span--fs">Назрань</span>
						</div>
					</div>
					<div className="header__top__right">
						<div className="header__top__menu">
							{auth.token && <Router />}
							<Link className="header__top__link" to="!#">
								Оплата
							</Link>
							<Link className="header__top__link" to="!#">
								Возврат
							</Link>
							{auth.token ? (
								<Profile />
							) : (
								<div
									className="header__top__link"
									onClick={() =>
										dispatch({ type: GLOBALTYPES.AUTH_MODAL, payload: true })
									}>
									Войти
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__bottom__wrap">
						<div className="header__bottom__logo">
							<Link to="/">AN-NISA</Link>
						</div>
						<div className="header__bottom__search">
							<input type="text" placeholder="Искать товары" />
							<img src={Search} alt="" />
						</div>
					</div>
					<div className="header__bottom__menu">
						<>
							<Link
								to="/menu"
								className={`header__bottom__item ${isActive("/menu")}`}>
								<svg
									width="30"
									height="30"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="shopping-bag"
									className="svg-inline--fa fa-shopping-bag fa-w-14"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512">
									<path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
								</svg>
								<span>Каталог</span>
							</Link>
							<Link
								to="/favorite"
								className={`header__bottom__item ${isActive("/favorite")}`}>
								<svg
									width="30"
									height="30"
									viewBox="0 0 46 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M33.7812 0C31.2851 0 28.9966 0.779115 26.9794 2.31575C25.0456 3.78894 23.758 5.66531 23 7.02973C22.242 5.66522 20.9544 3.78894 19.0206 2.31575C17.0034 0.779115 14.7149 0 12.2188 0C5.25298 0 0 5.61212 0 13.0543C0 21.0945 6.55347 26.5955 16.4746 34.9232C18.1593 36.3374 20.0689 37.9404 22.0538 39.6501C22.3154 39.8758 22.6514 40 23 40C23.3486 40 23.6846 39.8758 23.9462 39.6502C25.9312 37.9403 27.8408 36.3373 29.5265 34.9223C39.4465 26.5955 46 21.0945 46 13.0543C46 5.61212 40.747 0 33.7812 0Z"
										fill="white"
									/>
								</svg>
								<span>Избранное</span>
							</Link>
							<Link
								to="/cart"
								className={`header__bottom__item ${isActive("/cart")}`}>
								<svg
									width="30"
									height="30"
									viewBox="0 0 46 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M14.7554 26.6668H38.8445C39.441 26.6668 39.9642 26.2723 40.1257 25.6994L45.4593 7.03258C45.5739 6.63015 45.4954 6.19786 45.243 5.86349C44.9902 5.53016 44.5972 5.33329 44.1777 5.33329H11.6773L10.7242 1.04444C10.5888 0.433677 10.0471 0 9.42214 0H1.33332C0.596523 0 0 0.596522 0 1.33332C0 2.07047 0.596523 2.66664 1.33332 2.66664H8.35201L13.1669 24.3331C11.7502 24.9491 10.7555 26.3591 10.7555 28.0001C10.7555 30.2056 12.5499 32.0001 14.7554 32.0001H38.8445C39.5816 32.0001 40.1778 31.4039 40.1778 30.6667C40.1778 29.9299 39.5816 29.3334 38.8445 29.3334H14.7554C14.0211 29.3334 13.4221 28.7359 13.4221 28.0001C13.4221 27.2643 14.0211 26.6668 14.7554 26.6668Z"
										fill="white"
									/>
									<path
										d="M13.4219 36C13.4219 38.2059 15.2163 40 17.4222 40C19.6277 40 21.4222 38.2059 21.4222 36C21.4222 33.7945 19.6277 32.0001 17.4222 32.0001C15.2163 32.0001 13.4219 33.7945 13.4219 36Z"
										fill="white"
									/>
									<path
										d="M32.1777 36C32.1777 38.2059 33.9722 40 36.1777 40C38.3836 40 40.1777 38.2059 40.1777 36C40.1777 33.7945 38.3836 32.0001 36.1777 32.0001C33.9722 32.0001 32.1777 33.7945 32.1777 36Z"
										fill="white"
									/>
								</svg>
								<span>Корзина</span>
								{auth.user.cart && (
									auth.user.cart.length === 0 ? null : <small>{auth.user.cart.length}</small>
								)}
							</Link>
						</>
					</div>
				</div>

				<div className="header__main">
					<div className="header__main__menu">
						<Link to="!#">Мужская</Link>
						<Link to="!#">Женская</Link>
						<Link to="!#">Детская</Link>
						<Link to="!#">Разное</Link>
					</div>
				</div>

				{authModal && <Login />}
			</div>
		</div>
	);
};

export default Header;
