import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Error = () => {
	const [loading, setLoading] = useState(true);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let interval = null;
		if (loading) {
			interval = setInterval(async () => {
				setSeconds((seconds) => seconds + 1);
				if (seconds == 5) {
					clearInterval(interval);
					setLoading(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [loading, seconds]);

	return (
		<div>
			{loading ? (
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
			) : (
				<div
					className='errorbg'
					style={{
						textAlign: "center",
						background:
							"url('https://res.cloudinary.com/adarshsingh/image/upload/v1627514576/Subscription/Mindfullness/kobby-mendez-d0oYF8hm4GI-unsplash_mdmxst.jpg')",
						height: "100vh",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						color: "white",
					}}
				>
					<p style={{ fontSize: "3.5rem" }}>
						<dt>Error 404, Page Not found</dt>
					</p>
					<p style={{ fontSize: "1.5rem" }}>
						<u style={{ background: "black", width: "auto" }}>
							Go back to <Link to='/'>Homepage</Link>
						</u>
					</p>
				</div>
			)}
		</div>
	);
};

export default Error;
