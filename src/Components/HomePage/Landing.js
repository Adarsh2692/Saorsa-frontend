import React, { useEffect, useState } from "react";
import AppBar from "./../AppBar/AppBar";
import Paid from "./Paid";
import SixStep from "./SixStep";
import "./Landing.css";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const Landing = ({ steps }) => {
	const [navColor, setNavColor] = useState("transparent");
	const [loading, setLoading] = useState(true);
	const [homeData, setHomeData] = useState({});

	const changeColor = () => {
		if (window.scrollY >= 150) {
			setNavColor("#09386F");
		} else {
			setNavColor("transparent");
		}
	};

	window.addEventListener("scroll", changeColor);

	useEffect(async () => {
		let res = await axios.get(
			"https://mighty-bastion-04883.herokuapp.com/api/home"
		);
		await setHomeData(res.data);
		await setLoading(false);
	}, []);

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<div style={{ overflow: "hidden" }}>
					<AppBar bg={navColor} />
					<div class='mainbg' style={{ background: "#09386F" }}>
						<img
							src={homeData.image}
							style={{
								borderRadius: "0px 0px 30px 30px",
								boxShadow: "0 4px 5px 0 rgb(0,0,0,0.5)",
								width: "100%",
							}}
						/>
						<div class='bgtext'>
							<p class='p1'>{homeData.title}</p>
							<p class='p2'>{homeData.description}</p>
						</div>
					</div>
					<div class='mergedsection'>
						<div class='freesection'>
							<div style={{ height: "50px" }}></div>
							<h1
								class='heading'
								style={{ textAlign: "center", color: "white" }}
							>
								<dt>FREE EMOTIONAL REGULATION COURSES</dt>
							</h1>
							<div style={{ height: "10px" }}></div>
							<SixStep steps={steps} />
						</div>
						<hr />
						<div class='paidsection'>
							<div style={{ height: "20px" }}></div>
							<h1
								class='heading'
								style={{ textAlign: "center", color: "white" }}
							>
								<dt>SAORSA+ COURSES</dt>
							</h1>
							<div style={{ height: "20px" }}></div>
							<Paid />
						</div>
						<div style={{ height: "100px" }}></div>
						<Footer />
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Landing;
