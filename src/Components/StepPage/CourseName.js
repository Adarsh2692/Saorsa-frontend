import React, { Fragment, useEffect, useState } from "react";
import AppBar from "./../AppBar/AppBar";
import "./Steps.css";
import Normal from "./Normal";
import CourseCards from "./CourseCards";
import Form from "./Form";
import Video from "./Video";
import PNbutton from "./PNbutton";
import axios from "axios";
import Footer from "../Footer/Footer";

const CourseName = ({ allSteps, course, index, p }) => {
	let steps = [];
	steps = allSteps;
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [loading, setLoading] = useState(true);
	let [currentCourse, setCurrentCourse] = useState({});
	let [length, setLength] = useState(0);
	let [courseData, setData] = useState({});
	let [sname, setSname] = useState("");
	const [r, setR] = useState(0);

	useEffect(async () => {
		if (length == 0) {
			async function getData() {
				const res = await axios.get(
					"https://mighty-bastion-04883.herokuapp.com/api/step"
				);
				currentCourse = await res.data[p].courses[index];
				await setR(allSteps.length);
				await setData(currentCourse);
				await setSname(res.data[p].name);
				await setLength(currentCourse.data.length);
				await setLoading(false);
			}
			await getData();
		}
		let interval = null;
		if (isActive) {
			interval = setInterval(async () => {
				setSeconds((seconds) => seconds + 1);
				if (seconds == 60) {
					clearInterval(interval);
					setIsActive(false);
					const config = {
						headers: {
							"Content-Type": "application/json",
						},
					};
					let final = {
						step: sname,
						course: courseData.name,
					};
					const body = JSON.stringify(final);
					const res = await axios.put(
						"https://mighty-bastion-04883.herokuapp.com/api/progress",
						body,
						config
					);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	return (
		<Fragment>
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
				<div style={{ background: "#4A6AD1", height: "auto", color: "white" }}>
					<AppBar bg='#09386F' />
					<div>
						<img src={course.img} style={{ width: "100%", height: "40rem" }} />
					</div>
					<div
						style={{ position: "absolute", marginTop: "-11rem", width: "100%" }}
					>
						<p style={{ color: "white", marginLeft: "3vw" }}>
							<p className='cname'>{course.name}</p>
						</p>
					</div>
					<div
						style={{
							marginTop: "-7rem",
							height: "auto",
							width: "96%",
							background: "#09386F",
							marginLeft: "auto",
							marginRight: "auto",
							position: "relative",
						}}
					>
						<div style={{ height: "3rem", display: "flex" }}></div>
						<div
							style={{
								fontSize: "1.3rem",
								textAlign: "left",
								width: "96%",
								marginLeft: "2vw",
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
							}}
						>
							{/* {courseData.data.map((val, i) => {
								return (
									<Fragment>
										{!val.video ? (
											<Fragment>
												{!val.coursecards ? (
													<Normal val={val} />
												) : (
													<CourseCards val={val} steps={steps} />
												)}
											</Fragment>
										) : (
											<Video val={val} />
										)}
									</Fragment>
								);
							})}
							{courseData.form && <Form list={courseData.form} />} */}
							{courseData.data.map((val, i) => {
								switch (val.category) {
									case "normal":
										return (
											<Fragment>
												<Normal val={val} />
											</Fragment>
										);
									case "basic_form":
										return (
											<Fragment>
												<Form list={val.questions} name={val.name} />
											</Fragment>
										);
									case "coursecards":
										return (
											<Fragment>
												<CourseCards val={val} steps={steps} />
											</Fragment>
										);
									default:
										return "pending";
								}
							})}
							<div style={{ textAlign: "center" }}>
								{index === 0 ? (
									<div>
										<PNbutton to={"/s" + p + "/c" + (index + 1)} name='Next' />
									</div>
								) : (
									<div>
										{index < r - 1 ? (
											<div>
												<p style={{ textAlign: "center" }}>
													<PNbutton
														to={"/s" + p + "/c" + (index - 1)}
														name='Previous'
													/>
													<PNbutton
														to={"/s" + p + "/c" + (index + 1)}
														name='Next'
													/>
												</p>
											</div>
										) : (
											<div>
												<PNbutton
													to={"/s" + p + "/c" + (index - 1)}
													name='Previous'
												/>
											</div>
										)}
									</div>
								)}
							</div>
						</div>
						<div style={{ height: "5rem" }}></div>
					</div>
					<div style={{ height: "100px" }}></div>
					<Footer />
				</div>
			)}
		</Fragment>
	);
};

export default CourseName;
