import React, { Fragment, useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";
import StepsCard from "./StepsCard";
import { Link } from "react-router-dom";
import PNbutton from "./PNbutton";
import "./Steps.css";
import { connect } from "react-redux";
import { displaySteps } from "../../actions/step";
import PropTypes from "prop-types";
import Normal from "./Normal";
import Form from "./Form";
import CourseCards from "./CourseCards";

const StepName = ({ displaySteps, step: { step }, p }) => {
	const [loading, setLoading] = useState(true);
	let [currentStep, setCurrentStep] = useState({});
	let [length, setLength] = useState(0);
	let [courses, setCourses] = useState([]);
	let [stepData, setData] = useState({});
	const [r, setR] = useState(0);

	useEffect(async () => {
		async function getData() {
			const res = await displaySteps();
			currentStep = await res[p];
			await setR(step.length);
			await setData(currentStep);
			await setLength(currentStep.courses.length);
			await setCourses(currentStep.courses);
			// await console.log(res[p], res[p].name);
			console.log(p+" kkkk ");
			await setLoading(false);
		}
		await getData();
	}, []);

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
					 {/* <div>
						<img src={stepData.image} style={{ width: "100%", height: "40rem" }} />
					</div>
					<div
						style={{
							position: "absolute",
							marginTop: "-15rem",
							width: "100%",
						}}
					>
						<p style={{ color: "white", marginLeft: "6vw" }}>
							<p className='sname1'>
								{stepData.name}
								{console.log(stepData.name, " h1")}
							</p>
							<p className='sname2'>{stepData.title}</p>
						</p>
					</div> */}
					<div>
						<img src={stepData.image} style={{ width: "100%", height: "45rem" }} />
					</div>
					<div
						style={{ position: "absolute", marginTop: "-11rem", width: "100%" }}
					>
						<p style={{ color: "white", marginLeft: "3vw" }}>
							<p className='cname'>{stepData.name}</p>
						</p>
					</div>
						{/* <div style={{ height: "2rem" }}></div>
						<p className='sntext'>{stepData.headingText}</p> */}
						{/* <div style={{ height: "2rem" }}></div>
						<div class='scc'>
							{courses.map((course, i) => {
								return (
									<div class='scci' key={i}>
										<Link to={"/s" + p + "/c" + i}>
											<StepsCard imgLink={course.img}>{course.name}</StepsCard>
										</Link>
									</div>
								);
							})}
						</div> */}
						<div
						style={{
							marginTop: "-7rem",
							height: "auto",
							width: "96%",
							background: "#09386F",
							marginLeft: "auto",
							marginRight: "auto",
							position: "relative",
							borderRadius:"1.5rem"
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
							{stepData.data.map((val, i) => {
									return (
									<>
									   <Normal sd={stepData.name} val={val} k={1} num={i} />
									</>);
								})}
						</div>
						<div style={{ height: "2rem" }}></div>
						<div style={{ textAlign: "center" }}>
							{p === 0 ? (
								<div>
									<PNbutton to={"/s" + (p + 1)} name='Next Step' />
								</div>
							) : (
								<div>
									{p < r - 1 ? (
										<div>
											<p style={{ textAlign: "center" }}>
												<PNbutton to={"/s" + (p - 1)} name='Previous Step' />
												<PNbutton to={"/s" + (p + 1)} name='Next Step' />
											</p>
										</div>
									) : (
										<div>
											<PNbutton to={"/s" + (p - 1)} name='Previous Step' />
										</div>
									)}
								</div>
							)}
						</div>
						<div style={{ height: "5rem" }}></div>
						</div>
					<div style={{ height: "100px" }}></div>
				</div>
			)}
		</Fragment>
	);
};

StepName.propTypes = {
	displaySteps: PropTypes.func.isRequired,
	step: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	step: state.step,
});

export default connect(mapStateToProps, { displaySteps })(StepName);
