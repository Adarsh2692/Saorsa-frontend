import React, { Fragment, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs';
import axios from 'axios';
import './Steps.css';

const SmartForm = ({ list, name }) => {
	const [responses, setResponses] = useState([]);
	const [r, setR] = useState(false);
	const [k, setK] = useState(0);

	let questions = [];
	let answers = [];
	let values = {};

	const letters = ['S', 'M', 'A', 'R', 'T'];
	const [smart_values, setValues] = useState([
		list[0].smart_text,
		list[1].smart_text,
		list[2].smart_text,
		list[3].smart_text,
		list[4].smart_text,
	]);

	const stored_values = [
		list[0].smart_text,
		list[1].smart_text,
		list[2].smart_text,
		list[3].smart_text,
		list[4].smart_text,
	];

	const submitForm = async (e) => {
		e.preventDefault();
		for (let i = 1; i < list.length + 1; i++) {
			let q = 'q' + i;
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
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify(values);
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/formsubmit',
			body,
			config
		);
		alert('Your response has been submitted');
		window.location.reload();
	};

	const resetValues = () => {
		for (let i = 0; i < list.length; i++) {
			smart_values[i] = '';
		}
		setK(1);
	};

	const setData = () => {
		for (let i = 0; i < list.length; i++) {
			smart_values[i] = stored_values[i];
		}
		setK(0);
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
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					{list.map((val, i) => {
						return (
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<div className='smartText'>
									<p>{letters[i]}</p>
								</div>
								<div className={'smartdivbig' + ' division'}>
									<p className='boxlabel'>{val.label}</p>
									<textarea
										className={'smartbig' + ' divtxt'}
										placeholder={val.placeholder}
										name={val.label}
										required
										id={'q' + (i + 1)}
										value={smart_values[i]}
										onChange={(e) =>
											setValues([(smart_values[i] = e.target.value)])
										}
									/>
								</div>
							</div>
						);
					})}
				</div>
				{k != 1 ? (
					<button className='mcqSubmit' onClick={() => resetValues()}>
						Make your own smart goal
					</button>
				) : (
					<Fragment>
						<button className='mcqSubmit' type='submit'>
							Save
						</button>
						<button className='mcqSubmit' onClick={() => setData()}>
							See original goals
						</button>
						<br />
					</Fragment>
				)}
			</form>
			<div style={{ height: '20px' }}></div>
			{r && (
				<Fragment>
					<Accordion
						defaultActiveKey='0'
						style={{ color: 'white', borderRadius: '15px' }}
					>
						{responses.map((val, i) => {
							return (
								<Card
									style={{ background: '#4A6AD1', cursor: 'pointer' }}
									key={i}
								>
									<Accordion.Toggle
										as={Card.Header}
										eventKey={i + 1}
										className='accordheader'
									>
										Your Response of{' '}
										{dayjs(val.date).format('DD/MM/YYYY') +
											' ' +
											dayjs(val.date).hour() +
											':' +
											dayjs(val.date).minute() +
											':' +
											dayjs(val.date).second()}
									</Accordion.Toggle>
									<Accordion.Collapse eventKey={i + 1}>
										<Card.Body style={{ background: '#09386F' }}>
											{val.questions.map((ques, i) => {
												return (
													<Fragment>
														<div className='query'>{val.questions[i]}</div>
														<div className='answer'>
															{val.answers[i].ans}
															<br />
															{val.answers[i].score >= 0
																? `Score: ${val.answers[i].score}`
																: ''}
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
					<div style={{ height: '20px' }}></div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default SmartForm;
