import React, { Fragment, useEffect, useState } from 'react';
import AppBar from './../AppBar/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displayMoods, getCurrentProfile } from '../../actions/profile';
import Tab1Data from './Tab1Data';
import Tab2Data from './Tab2Data';
import Tab3Data from './Tab3Data';
import './Profile.css';
import { Link, useLocation } from 'react-router-dom';
import EditProfile from './EditProfile';
import axios from 'axios';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 'auto',
		background: '#09386E',
	},
}));

const Profile = (props) => {
	let {
		getCurrentProfile,
		auth: { user },
		profile: { profile, loading },
	} = props;
	const classes = useStyles();
	const [edit, setEdit] = useState(false);
	const [moods, setMoodData] = useState([]);
	const [progress, setProgressData] = useState([]);
	const [r, setR] = useState('0');
	let k = 0;

	const clickEdit = () => {
		setEdit(true);
	};
	const clickBack = () => setEdit(false);

	const tabShift = (e) => {
		let i;
		for (i = 1; i <= 3; i++) {
			if (i === e) {
				document.getElementById('tbt' + i).className = 'tbutton activeclass';
				document.getElementById('tab' + i).style.display = 'block';
			} else {
				document.getElementById('tbt' + i).className = 'tbutton';
				document.getElementById('tab' + i).style.display = 'none';
			}
		}
	};
	useEffect(() => {
		getCurrentProfile();
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/mood/all')
			.then((res) => {
				setMoodData(res.data);
			});
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/progress')
			.then((res) => {
				setProgressData(res.data);
				setR('1');
			});
		console.log('idhar.....', props);
		setEdit(false);
	}, []);

	return (
		<div>
			{loading === true || profile === null || r == 0 ? (
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
				<div
					style={{
						background: 'linear-gradient(to bottom, #cccccc 30rem, #496AD1 0%)',
						height: 'auto',
						marginTop: '-10rem',
					}}
				>
					<AppBar bg='#09386F' />
					<Grid
						container
						alignItems='center'
						justify='center'
						style={{
							marginTop: '5rem',
						}}
					>
						<Grid
							item
							xs={11}
							alignItems='center'
							justify='center'
							style={{ marginTop: '18rem', marginBottom: '10rem' }}
						>
							<Paper
								className={classes.paper}
								alignItems='center'
								justify='center'
								elevation={3}
							>
								<p
									style={{
										color: 'white',
										fontSize: '2rem',
										textAlign: 'center',
									}}
								>
									<Card
										style={{
											borderRadius: '50%',
											border: 'solid',
											width: '10rem',
											height: '10rem',
											marginTop: '-6rem',
											marginLeft: 'auto',
											marginRight: 'auto',
											borderColor: 'white',
											boxShadow: '1px 3px 3px 0px grey, -1px -2px 3px 0px grey',
										}}
									>
										<CardMedia
											media='picture'
											alt='Contemplative Reptile'
											image={
												profile.coverImage
													? profile.coverImage
													: 'https://drive.google.com/uc?id=16JdlZT-WaGOmxU0E5xph5XcoQc1fDBuY'
											}
											title='Profile picture'
											style={{
												height: '14rem',
												width: '14rem',
												marginLeft: '-30px',
												marginTop: '-28px',
											}}
										/>
									</Card>
									<div>
										<p
											style={{
												color: 'white',
												fontSize: '2.2rem',
												textAlign: 'center',
												marginTop: '1rem',
											}}
										>
											{user.name}
											<p
												style={{
													color: 'white',
													fontSize: '1rem',
													textAlign: 'center',
												}}
											>
												{user.email}
											</p>
										</p>
									</div>
								</p>
								{!edit ? (
									<Fragment>
										<div style={{ marginBottom: '10px' }}>
											<button
												className='editSubmit'
												onClick={() => {
													clickEdit();
												}}
											>
												<div>
													<Link
														style={{
															textDecoration: 'none',
															color: 'white',
														}}
													>
														Edit Profile
													</Link>
												</div>
											</button>
										</div>
										<p
											style={{
												color: 'white',
												fontSize: '1.2rem',
												textAlign: 'center',
											}}
										>
											{profile.bio == '' ||
											profile.bio == 'undefined' ||
											!profile.bio ? (
												<p>Enter something about yourself</p>
											) : (
												<p>{profile.bio}</p>
											)}
										</p>
										<p>
											<p
												style={{
													color: 'white',
													fontSize: '1rem',
													textAlign: 'center',
													paddingTop: '0.5rem',
												}}
											>
												Here is the complete data of your profile
											</p>
											<div class='selector'>
												<div
													class={k != 1 ? 'tbutton activeclass' : 'tbutton'}
													id='tbt1'
													onClick={() => tabShift(1)}
												>
													<p class='tbtext'>Progress</p>
												</div>
												<div
													class='tbutton'
													id='tbt2'
													onClick={() => tabShift(2)}
												>
													<p class='tbtext'>Mood Report</p>
												</div>
												<div
													class={k == 1 ? 'tbutton activeclass' : 'tbutton'}
													id='tbt3'
													onClick={() => tabShift(3)}
												>
													<p class='tbtext'>Your Plan</p>
												</div>
											</div>
											<div
												class='tab1'
												id='tab1'
												style={{ display: k != 1 ? 'block' : 'none' }}
											>
												<Tab1Data progress={progress} />
											</div>
											<div class='tab2' id='tab2'>
												<Tab2Data moods={moods} />
											</div>
											<div
												class='tab3'
												id='tab3'
												style={{ display: k == 1 ? 'block' : 'none' }}
											>
												<Tab3Data />
											</div>
										</p>
									</Fragment>
								) : (
									<Fragment>
										<button onClick={() => clickBack()} className='editSubmit'>
											Back
										</button>
										<EditProfile b={profile.bio} edit={() => clickBack()} />
									</Fragment>
								)}
							</Paper>
						</Grid>
					</Grid>
					<Footer />
				</div>
			)}
		</div>
	);
};

Profile.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
