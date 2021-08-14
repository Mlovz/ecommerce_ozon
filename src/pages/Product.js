import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../redux/actions/productAction";

import ProductCard from "../components/home/ProductCard";

import { useDispatch, useSelector } from "react-redux";

// const menuLinks = [
// 	{ name: "Все", to: "/menu", id: 0 },
// 	{ name: "Мужская одежда", to: "!#", id: 1 },
// 	{ name: "Женская одежда", to: "!#", id: 2 },
// 	{ name: "Детская одежда", to: "!#", id: 3 },
// 	{ name: "Разное", to: "!#", id: 4 },
// ];

const Menu = () => {
	const {pathname} = useLocation()
	const [active, setActive] = useState(0);
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state);
	const [arrDiscount, setArrDiscount] = useState([])

	const isActive = (index) => {
		setActive(index);
	};

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		if(products.arrProducts){
			products.arrProducts.filter(item => {
				if(item.discount) setArrDiscount(item)
			})
		}
	})

	
	return (
		<div className="menu">
			<div className="container">
				<div className="location_pos">
					<span>Главная </span>
					<span> > </span>
					<span>{pathname === "/menu" && "Каталог"} </span>
				</div>
				{products.arrProducts.length === 0 ? (
					<span className="title">Пока товаров нет</span>
				) : (
					<>
						<div className="menu__title">
							<h6 className="title">Каталог товаров</h6>
						</div>
					

						
						{/* <nav className="menu__nav">
							<ul className="menu__nav__list">
								{menuLinks.map((link, index) => {
									return (
										<li className="menu__nav__item" key={index}>
											<Link
												onClick={() => isActive(index)}
												className={`menu__nav__link ${
													active === index ? "active" : ""
												}`}>
												{link.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav> */}
						<div className="menu__blocks">
							<ProductCard products={products} />
						</div>
						{/* {
							products.arrProducts &&
							arrDiscount.map((prod, index) => (
								<div>{prod.title}</div>
							))
						} */}
					</>
				)}
			</div>
		</div>
	);
};

export default Menu;
