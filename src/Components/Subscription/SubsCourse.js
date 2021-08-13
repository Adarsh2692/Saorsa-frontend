import React, { Fragment, useEffect } from "react";
import AppBar from "./../AppBar/AppBar";
import "../StepPage/Steps.css";
import Normal from "../StepPage/Normal";
import CourseCards from "../StepPage/CourseCards";
import Form from "../StepPage/Form";
import SmartForm from "../StepPage/SmartForm";
import Video from "../StepPage/Video";
import PNbutton from "../StepPage/PNbutton";
import MCQ from "./MCQ";
import axios from "axios";

const SubsCourse = ({ allSteps, course, index, length, p }) => {
	let steps = [];
	steps = allSteps;

	return (
		<Fragment>
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
						{course.data.map((val, i) => {
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
								case "smart_form":
									return (
										<Fragment>
											<SmartForm list={val.questions} name={val.name} />
										</Fragment>
									);
								default:
									return <div>{console.log(val)}</div>;
							}
						})}
						{course.mcq && (
							<MCQ list={course.mcq.mcqs} name={course.mcq.name} />
						)}
						<div style={{ textAlign: "center" }}>
							{index === 0 ? (
								<div>
									<PNbutton to={"/sc" + p + "/pc" + (index + 1)} name='Next' />
								</div>
							) : (
								<div>
									{index < length - 1 ? (
										<div>
											<p style={{ textAlign: "center" }}>
												<PNbutton
													to={"/sc" + p + "/pc" + (index - 1)}
													name='Previous'
												/>
												<PNbutton
													to={"/sc" + p + "/pc" + (index + 1)}
													name='Next'
												/>
											</p>
										</div>
									) : (
										<div>
											<PNbutton
												to={"/sc" + p + "/pc" + (index - 1)}
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
			</div>
		</Fragment>
	);
};

export default SubsCourse;
