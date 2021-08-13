import React, { Fragment, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";
import axios from "axios";
import "./Steps.css";
import ReactPaginate from "react-paginate";
import "../Pagination/Pagination.css";

const Form = ({ list, name }) => {
	const [responses, setResponses] = useState([]);
	const [r, setR] = useState(false);

	let questions = [];
	let answers = [];
	let values = {};
	const [pageNumber, setPageNumber] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const submitForm = async (e) => {
		e.preventDefault();
		for (let i = 1; i < list.length + 1; i++) {
			let q = "q" + i;
			questions.push(document.getElementById(q).name);
			let val = {};
			val.ans = document.getElementById(q).value;
			answers.push(val);
		}
		values.questions = questions;
		values.name = name;
		values.answers = answers;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const body = JSON.stringify(values);
		const res = await axios.post(
			"https://mighty-bastion-04883.herokuapp.com/api/formsubmit",
			body,
			config
		);
		alert("Your response has been submitted");
		window.location.reload();
	};

	useEffect(async () => {
		if (!r) {
			let res = await axios.get(
				`https://mighty-bastion-04883.herokuapp.com/api/formsubmit/${name}`
			);
			if (res.data.qnaResponses) {
				const rev = [];
				for (let i = res.data.qnaResponses.length - 1; i >= 0; i--) {
					rev.push(res.data.qnaResponses[i]);
				}
				await setPageCount(
					Math.ceil(res.data.qnaResponses.length / usersPerPage)
				);
				setResponses(rev);
				console.log(rev);
				setR(true);
			}
		}
	}, []);
	return (
		<Fragment>
			<form onSubmit={submitForm}>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
						alignItems: "center",
					}}
				>
					{list.map((val, i) => {
						return (
							<div className={"div" + val.size + " division"}>
								<p className='boxlabel'>{val.label}</p>
								<textarea
									className={val.size + " divtxt"}
									placeholder={val.placeholder}
									name={val.label}
									required
									id={"q" + (i + 1)}
								/>
							</div>
						);
					})}
				</div>
				<button className='mcqSubmit' type='submit'>
					Save
				</button>
			</form>
			<div style={{ height: "20px" }}></div>
			{r && (
				<Fragment>
					<Accordion
						defaultActiveKey='0'
						style={{ color: "white", borderRadius: "15px" }}
					>
						{responses
							.slice(pagesVisited, pagesVisited + usersPerPage)
							.map((val, i) => {
								return (
									<Card
										style={{ background: "#4A6AD1", cursor: "pointer" }}
										key={i}
									>
										<Accordion.Toggle
											as={Card.Header}
											eventKey={i + 1}
											className='accordheader'
										>
											Your Response of{" "}
											{dayjs(val.date).format("DD/MM/YYYY") +
												" " +
												dayjs(val.date).hour() +
												":" +
												dayjs(val.date).minute() +
												":" +
												dayjs(val.date).second()}
										</Accordion.Toggle>
										<Accordion.Collapse eventKey={i + 1}>
											<Card.Body style={{ background: "#09386F" }}>
												{val.questions.map((ques, i) => {
													return (
														<Fragment>
															<div className='query'>{val.questions[i]}</div>
															<div className='answer'>
																{val.answers[i].ans}
																<br />
																{val.answers[i].score >= 0
																	? `Score: ${val.answers[i].score}`
																	: ""}
															</div>
															<br />
														</Fragment>
													);
												})}
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								);
							})}
					</Accordion>
					<div style={{ height: "20px" }}></div>
					<ReactPaginate
						previousLabel='Previous'
						nextLabel='Next'
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"paginationBttns"}
						previousLinkClassName={"previousButton"}
						nextLinkClassName={"nextButton"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					/>
					<div style={{ height: "20px" }}></div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Form;
