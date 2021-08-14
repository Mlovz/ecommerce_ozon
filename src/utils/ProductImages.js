import React, { useState } from "react";

const ProductImages = ({ images }) => {
	const [idx, setIdx] = useState(0);

	const isActive = (index) => {
		if (index === idx) return "active";
	};

	
	return (
		<div className="img__wrap">
			<img src={images[idx].url} className="product_img"  alt="" />
			<div className="img__dots">
				{images.map((img, index) => {
					return (
						<>
							<li className={`img__dots--dot ${isActive(index)}`}></li>
						</>
					);
				})}
			</div>
			<div className="div_flex">
				{images.map((img, index) => {
					return (
						<div
							onMouseMove={() => setIdx(index)}
							className="img__dots__block"></div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductImages;
