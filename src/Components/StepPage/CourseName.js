import React, { Fragment, useEffect, useState } from 'react';
import AppBar from './../AppBar/AppBar';
import './Steps.css';
import Normal from './Normal';
import CourseCards from './CourseCards';
import Form from './Form';
import Video from './Video';
import PNbutton from './PNbutton';
import axios from 'axios';

const CourseName = ({ allSteps, course, index, length, p }) => {
	let steps = [];
	steps = allSteps;
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(async () => {
				setSeconds((seconds) => seconds + 1);
				if (seconds == 60) {
					clearInterval(interval);
					setIsActive(false);
					const config = {
						headers: {
							'Content-Type': 'application/json',
						},
					};
					let final = {
						step: steps[p].name,
						course: course.name,
					};
					const body = JSON.stringify(final);
					const res = await axios.put(
						'https://mighty-bastion-04883.herokuapp.com/api/progress',
						body,
						config
					);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	return (
		<div style={{ background: '#4A6AD1', height: 'auto', color: 'white' }}>
			<AppBar bg='#09386F' />
			<div>
				<img src={course.img} style={{ width: '100%', height: '40rem' }} />
			</div>
			<div style={{ position: 'absolute', marginTop: '-11rem', width: '100%' }}>
				<p style={{ color: 'white', marginLeft: '3vw' }}>
					<p className='cname'>{course.name}</p>
				</p>
			</div>
			<div
				style={{
					marginTop: '-7rem',
					height: 'auto',
					width: '96%',
					background: '#09386F',
					marginLeft: 'auto',
					marginRight: 'auto',
					position: 'relative',
				}}
			>
				<div style={{ height: '3rem', display: 'flex' }}></div>
				<div
					style={{
						fontSize: '1.3rem',
						textAlign: 'left',
						width: '96%',
						marginLeft: '2vw',
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
					}}
				>
					{course.data.map((val, i) => {
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
					{course.form && <Form list={course.form} />}
					<div style={{ textAlign: 'center' }}>
						{index === 0 ? (
							<div>
								<PNbutton to={'/s' + p + '/c' + (index + 1)} name='Next' />
							</div>
						) : (
							<div>
								{index < length - 1 ? (
									<div>
										<p style={{ textAlign: 'center' }}>
											<PNbutton
												to={'/s' + p + '/c' + (index - 1)}
												name='Previous'
											/>
											<PNbutton
												to={'/s' + p + '/c' + (index + 1)}
												name='Next'
											/>
										</p>
									</div>
								) : (
									<div>
										<PNbutton
											to={'/s' + p + '/c' + (index - 1)}
											name='Previous'
										/>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
				<div style={{ height: '5rem' }}></div>
			</div>
			<div style={{ height: '100px' }}></div>
		</div>
	);
};

export default CourseName;
