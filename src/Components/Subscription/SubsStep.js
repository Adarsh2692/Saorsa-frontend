import React, { Fragment } from 'react';
import AppBar from '../AppBar/AppBar';
import StepsCard from './StepsCard';
import { Link } from 'react-router-dom';
import PNbutton from '../StepPage/PNbutton';
import '../StepPage/Steps.css';

const SubsStep = ({ step, course, p, length }) => {
	return (
		<div style={{ background: '#4A6AD1', height: 'auto', color: 'white' }}>
			<AppBar bg='#09386F' />
			<div>
				<img src={step.image} style={{ width: '100%', height: '40rem' }} />
			</div>
			<div
				style={{ position: 'absolute', marginTop: '-11.5rem', width: '100%' }}
			>
				<p style={{ color: 'white', marginLeft: '3vw' }}>
					<p className='sname2'>{step.name}</p>
					{/* <p className='sname'>{step.title}</p> */}
				</p>
			</div>
			<div className='stepcontainer'>
				<div style={{ height: '2rem' }}></div>
				<p className='sntext'>{step.headingText}</p>
				<div style={{ height: '2rem' }}></div>
				<div class='scc'>
					{course.map((courses, i) => {
						return (
							<div class='scci' key={i}>
								<Link to={'/sc' + p + '/pc' + i}>
									<StepsCard imgLink={courses.img}>{courses.name}</StepsCard>
								</Link>
							</div>
						);
					})}
				</div>
				<div style={{ height: '2rem' }}></div>
				<div style={{ textAlign: 'center' }}>
					{p === 0 ? (
						<div>
							<PNbutton to={'/sc' + (p + 1)} name='Next Step' />
						</div>
					) : (
						<div>
							{p < length - 1 ? (
								<div>
									<p style={{ textAlign: 'center' }}>
										<PNbutton to={'/sc' + (p - 1)} name='Previous Step' />
										<PNbutton to={'/sc' + (p + 1)} name='Next Step' />
									</p>
								</div>
							) : (
								<div>
									<PNbutton to={'/sc' + (p - 1)} name='Previous Step' />
								</div>
							)}
						</div>
					)}
				</div>
				<div style={{ height: '5rem' }}></div>
			</div>
			<div style={{ height: '100px' }}></div>
		</div>
	);
};

export default SubsStep;
