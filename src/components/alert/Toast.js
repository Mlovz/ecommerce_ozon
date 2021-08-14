import React from "react";

const Toast = ({ bgColor, msg, text, handleShow, alert }) => {
	return (
		<div
			style={{ top: "10px", right: "30px", zIndex: 999 }}
			className={`toast position-fixed show ${bgColor}`}>
			<div className={`toast-header`}>
				{alert.error ? (
					<i
						style={{ fontSize: "30px", color: "crimson" }}
						className="far fa-exclamation"></i>
				) : (
					<i
						style={{ fontSize: "30px", color: "green" }}
						className="far fa-thumbs-up"></i>
				)}

				<strong
					style={{
						fontSize: "20px",
						color: alert.error ? "crimson" : "green",
						marginLeft: "10px",
					}}
					className="me-auto">
					{text}
				</strong>
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="toast"
					aria-label="Close"
					onClick={handleShow}></button>
			</div>
			<div style={{ fontSize: "20px" }} className="toast-body text-light">
				{msg}
			</div>
		</div>
	);
};

export default Toast;
