import React from "react";

const Loading = () => {
	return (
		<div
			style={{
				background: "white",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<img
				style={{
					background: "white",
					height: "200px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				src='https://acegif.com/wp-content/uploads/loading-36.gif'
			/>
			<p style={{ fontSize: "30px", color: "#496ad1" }}>
				<dt>Loading...</dt>
			</p>
		</div>
	);
};

export default Loading;
