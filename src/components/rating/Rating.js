import React, { useState } from "react";

const Rating = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return (
		<div className="rating__list">
			{[...Array(5)].map((star, index) => {
				const ratingValue = index + 1;
				return (
					<label>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<i
							style={{
								color: ratingValue <= (hover || rating) ? "#fd7302" : "",
							}}
							className="star fas fa-star"
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}></i>
						
					</label>
				);
			})}
			{/* <span>{rating}</span> */}
		</div>
	);
};

export default Rating;
