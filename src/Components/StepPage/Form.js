import React, { Fragment, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs';
import axios from 'axios';
import './Steps.css';

const Form = ({ list }) => {
	const [responses, setResponses] = useState([]);
	const [r, setR] = useState(false);

	let values = {};

	const submitForm = async (e) => {
		e.preventDefault();
		for (let i = 1; i < 8; i++) {
			let q = 'q' + i;
			let a = 'a' + i;
			values[a] = document.getElementById(q).value;
			values[q] = document.getElementById(q).name;
		}
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
		alert(res);
		window.location.reload();
	};

	useEffect(async () => {
		if (!r) {
			let res = await axios.get(
				'https://mighty-bastion-04883.herokuapp.com/api/formsubmit'
			);
			const rev = [];
			for (let i = res.data.responses.length - 1; i >= 0; i--) {
				rev.push(res.data.responses[i]);
			}
			setResponses(rev);
			setR(true);
		}
	}, []);
	return (
		<div>
			<form onSubmit={submitForm}>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					{list.map((val, i) => {
						return (
							<div className={'div' + val.section.size + ' division'}>
								<p className="boxlabel">{val.section.label}</p>
								<textarea
									className={val.section.size + ' divtxt'}
									rows='7'
									placeholder={val.section.placeholder}
									name={val.section.label}
									required
									id={'q' + (i + 1)}
								/>
							</div>
						);
					})}
				</div>
				<button className='mcqSubmit'
					type='submit'
				>
					Save
				</button>
			</form>
			<div style={{ height: '100px' }}></div>
			{r && (
				<Accordion
					defaultActiveKey='0'
					style={{ color: 'white', borderRadius: '15px' }}
				>
					{responses.reverse().map((val, i) => {
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
										<div className='query'>{val.q1}</div>
										<div className='answer'>{val.a1}</div>
										<br />
										<div className='query'>{val.q2}</div>
										<div className='answer'>{val.a2}</div>
										<br />
										<div className='query'>{val.q3}</div>
										<div className='answer'>{val.a3}</div>
										<br />
										<div className='query'>{val.q4}</div>
										<div className='answer'>{val.a4}</div>
										<br />
										<div className='query'>{val.q5}</div>
										<div className='answer'>{val.a5}</div>
										<br />
										<div className='query'>{val.q6}</div>
										<div className='answer'>{val.a6}</div>
										<br />
										<div className='query'>{val.q7}</div>
										<div className='answer'>{val.a7}</div>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						);
					})}
				</Accordion>
			)}
		</div>
	);
};

export default Form;
