import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

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
				<Loading/>
			) : (
				<div
					className='errorbg'
					style={{
						textAlign: "center",
						height: "100vh",
						color: "white",
						background:"#09386f"
					}}
				>
					<p style={{ fontSize: "2.5rem",paddingTop:"40vh" }}>
						<dt>Error 404, Page Not found</dt>
					</p>
					<p style={{ fontSize: "1.2rem" }}>
						<u style={{ width: "auto" }}>
							Go back to <Link to='/' style={{color:"grey"}}>Homepage</Link>
						</u>
					</p>
				</div>
			)}
		</div>
	);
};

export default Error;
