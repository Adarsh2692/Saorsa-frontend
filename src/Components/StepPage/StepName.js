import React, { Fragment, useEffect, useState } from 'react';
import AppBar from '../AppBar/AppBar';
import StepsCard from './StepsCard';
import { Link } from 'react-router-dom';
import PNbutton from './PNbutton';
import './Steps.css';
import axios from 'axios';

const StepName = ({ step, course, p, length }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let content = document.querySelector('div');
		axios.get('https://mighty-bastion-04883.herokuapp.com/api/home').then((res) => {
			setLoading(false);
		});
	}, []);

	return (
		<Fragment>
			{loading ? (
				<div
					style={{
						background: 'white',
						height: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img
						style={{
							background: 'white',
							height: '200px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						src='https://acegif.com/wp-content/uploads/loading-36.gif'
					/>
					<p style={{ fontSize: '30px', color: '#496ad1' }}>
						<dt>Loading...</dt>
					</p>
				</div>
			) : (
				<div style={{ background: '#4A6AD1', height: 'auto', color: 'white' }}>
					<AppBar bg='#09386F' />
					<div>
						<img src={step.image} style={{ width: '100%', height: '40rem' }} />
					</div>
					<div
						style={{
							position: 'absolute',
							marginTop: '-15rem',
							width: '100%',
						}}
					>
						<p style={{ color: 'white', marginLeft: '6vw' }}>
							<p className='sname1'>{step.name}</p>
							<p className='sname2'>{step.title}</p>
						</p>
					</div>
					<div className="stepcontainer"
					>
						<div style={{ height: '2rem' }}></div>
						<p className='sntext'>{step.headingText}</p>
						<div style={{ height: '2rem' }}></div>
						<div class='scc'>
							{course.map((courses, i) => {
								return (
									<div class='scci' key={i}>
										<Link to={'/s' + p + '/c' + i}>
											<StepsCard imgLink={courses.img}>
												{courses.name}
											</StepsCard>
										</Link>
									</div>
								);
							})}
						</div>
						<div style={{ height: '2rem' }}></div>
						<div style={{ textAlign: 'center' }}>
							{p === 0 ? (
								<div>
									<PNbutton to={'/s' + (p + 1)} name='Next Step' />
								</div>
							) : (
								<div>
									{p < length - 1 ? (
										<div>
											<p style={{ textAlign: 'center' }}>
												<PNbutton to={'/s' + (p - 1)} name='Previous Step' />
												<PNbutton to={'/s' + (p + 1)} name='Next Step' />
											</p>
										</div>
									) : (
										<div>
											<PNbutton to={'/s' + (p - 1)} name='Previous Step' />
										</div>
									)}
								</div>
							)}
						</div>
						<div style={{ height: '5rem' }}></div>
					</div>
					<div style={{ height: '100px' }}></div>
				</div>
			)}
		</Fragment>
	);
};

export default StepName;
