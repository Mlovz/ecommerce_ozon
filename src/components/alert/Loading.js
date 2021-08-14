import React from "react";

const Loading = () => {
	return (
		<div className="loading">
			<svg
				width="200px"
				height="200px"
				viewBox="0 0 100 100"
				>
				<path
					fill="none"
					stroke="#106df9"
					stroke-width="7"
					stroke-dasharray="42.76482137044271 42.76482137044271"
					d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
					>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.1764705882352942s"
						keyTimes="0;1"
						values="0;256.58892822265625"
						></animate>
				</path>
			</svg>
		</div>
	);
};

export default Loading;