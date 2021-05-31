import React, { Fragment } from 'react';
import AppBar from '../AppBar/AppBar';
import StepsCard from './StepsCard';
import { Link } from 'react-router-dom';
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
			<div
				style={{
					marginTop: '-7rem',
					height: 'auto',
					width: '96%',
					background: '#09386F',
					marginLeft: 'auto',
					marginRight: 'auto',
					position: 'relative',
					borderRadius: '20px',
				}}
			>
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
							<Link
								to={'/sc' + (p + 1)}
								style={{ textDecoration: 'none', color: '#09386F' }}
							>
								<button
									style={{
										height: '30px',
										width: '100px',
										borderRadius: '10px',
										textAlign: 'center',
										margin: '10px',
									}}
								>
									<div
										style={{
											textDecoration: 'none',
											fontSize: '15px',
											color: '#09386F',
										}}
									>
										Next Step
									</div>
								</button>
							</Link>
						</div>
					) : (
						<div>
							{p < length - 1 ? (
								<div>
									<p style={{ textAlign: 'center' }}>
										<Link
											to={'/sc' + (p - 1)}
											style={{ textDecoration: 'none', color: '#09386F' }}
										>
											<button
												style={{
													height: '30px',
													width: '100px',
													borderRadius: '10px',
													textAlign: 'center',
													margin: '10px',
												}}
											>
												<div
													style={{
														textDecoration: 'none',
														fontSize: '15px',
														color: '#09386F',
													}}
												>
													Previous Step
												</div>
											</button>
										</Link>
										<Link
											to={'/sc' + (p + 1)}
											style={{ textDecoration: 'none', color: '#09386F' }}
										>
											<button
												style={{
													height: '30px',
													width: '100px',
													borderRadius: '10px',
													textAlign: 'center',
													margin: '10px',
												}}
											>
												<div
													style={{
														textDecoration: 'none',
														fontSize: '15px',
														color: '#09386F',
													}}
												>
													Next Step
												</div>
											</button>
										</Link>
									</p>
								</div>
							) : (
								<div>
									<Link
										to={'/sc' + (p - 1)}
										style={{ textDecoration: 'none', color: '#09386F' }}
									>
										<button
											style={{
												height: '30px',
												width: '100px',
												borderRadius: '10px',
												textAlign: 'center',
												margin: '10px',
											}}
										>
											<div
												style={{
													textDecoration: 'none',
													fontSize: '15px',
													color: '#09386F',
												}}
											>
												Previous Step
											</div>
										</button>
									</Link>
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
