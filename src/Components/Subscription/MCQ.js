import React, { Fragment, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import '../StepPage/Steps.css';

const MCQ = ({ list, name }) => {
	let [scores, setScores] = useState([]);
	let [numbers, setNumbers] = useState([]);
	let [r, setR] = useState(false);
	let [load, setLoad] = useState(true);

	let values = [];
	let k = 0;

	const Count = (e) => {
		for (let i = 0; i < e; i++) {
			setNumbers((arr) => [...arr, i + 1]);
			setR(true);
		}
	};
	useEffect(async () => {
		if (!r) {
			const res = await axios.get(
				`https://mighty-bastion-04883.herokuapp.com/api/mcq/${name}`
			);
			if (res.data.sumArray) {
				setScores(res.data.sumArray);
				Count(res.data.sumArray.length);
			}
		}
	}, []);

	const Click = (e) => {
		const k = e.target.value;
		const a = parseInt(k[0]);
		const b = parseInt(k[2]);
		const c = parseInt(k[4]);
		const p = e.target.id;
		const i = parseInt(p[0]);
		for (let l = 0; l < c; l++) {
			document.getElementById(i + '' + l).className = 'mcqButton';
		}
		e.target.className = 'active';
		values[b] = a;
	};

	const mcqSubmit = async () => {
		setLoad(false);
		let score = 0;
		for (let i = 0; i < values.length; i++) {
			score += values[i];
		}
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const mcq = name;
		const final = { mcq, score };
		const body = JSON.stringify(final);
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/mcq',
			body,
			config
		);
		if ((k = 0)) k = 1;
		else k = 0;
		alert('Your score is ' + score);
		window.location.reload();
	};

	const Graph = () => {
		return (
			<Fragment>
				<div
					className='lineGraph'
					style={{
						width: '100%',
						height: '75vh',
						padding: '10px',
						borderRadius: '20px',
						marginTop: '30px',
						padding: '0',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							width: '85vw',
							height: '70vh',
							padding: '10px',
							background: 'white',
							borderRadius: '20px',
							marginTop: '30px',
							padding: '0',
						}}
					>
						<Line
							data={{
								labels: numbers,
								datasets: [
									{
										label: 'Q-Score',
										data: scores,
										fill: false,
										borderColor: ['#09386E'],
										tension: 0.1,
									},
								],
							}}
							options={{
								maintainAspectRatio: false,
								responsive: true,
								title: { text: `${name} Scores`, display: true },
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true,
											},
											gridLines: {
												display: false,
											},
										},
									],
									xAxes: [
										{
											gridLines: {
												display: false,
											},
										},
									],
								},
							}}
						/>
					</div>
				</div>
			</Fragment>
		);
	};

	return (
		<div>
			{load ? (
				<div>
					{list.map((val, i) => {
						return (
							<div style={{ marginTop: '25px' }}>
								<p className='mcqquestion'>{val.question}</p>
								<div className='mcqbuttondiv'>
									{val.options.map((opt, j) => {
										return (
											<button
												value={opt.value + ' ' + i + ' ' + val.options.length}
												onClick={Click}
												id={i + '' + j}
												className={j == 0 ? 'active' : 'mcqButton'}
											>
												<div style={{ display: 'none' }}>
													{j == 0 && values.push(opt.value)}
												</div>
												{opt.option}
											</button>
										);
									})}
								</div>
							</div>
						);
					})}
					{r && (
						<button className='mcqSubmit' onClick={mcqSubmit}>
							Submit
						</button>
					)}
					{r && <Graph />}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default MCQ;
