import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
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
			<p style={{ fontSize: "1.5rem"}}>
				<u style={{ background:"black",width:"auto" }}>
					Go back to <Link to='/'>Homepage</Link>
				</u>
			</p>
		</div>
	);
};

export default Error;
