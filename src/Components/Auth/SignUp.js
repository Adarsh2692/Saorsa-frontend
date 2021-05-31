import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './../AppBar/AppBar';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register, socialLogin } from '../../actions/auth';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './formstyle.css';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://c4.wallpaperflare.com/wallpaper/776/117/310/sunset-reflection-boat-in-peaceful-lake-lake-ringerike-norway-landscape-photos-desktop-hd-wallpaper-for-mobile-phones-tablet-and-pc-3840%C3%972400-wallpaper-preview.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignUp({ register, isAuthenticated, socialLogin }) {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			alert('Passwords do not match');
		} else {
			register({ name, email, password });
		}
	};

	const responseGoogle = async (response) => {
		await socialLogin({
			name: response.profileObj.name,
			email: response.profileObj.email,
		});
		isAuthenticated = true;
	};

	//Redirect if registered
	if (isAuthenticated) {
		return <Redirect to='/profile' />;
	}
	const responseFacebook = async (response) => {
		await socialLogin({ name: response.name, email: response.email });
		isAuthenticated = true;
	};
	return (
		<>
			<AppBar bg='#09386F' />
			<Grid container component='main' className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<form className={classes.form} onSubmit={onSubmit}>
							<TextField
								variant='outlined'
								margin='normal'
								fullWidth
								id='name'
								label='Name'
								name='name'
								autoComplete='name'
								value={name}
								onChange={onChange}
								autoFocus
							/>
							<TextField
								variant='outlined'
								margin='normal'
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={email}
								onChange={onChange}
								autoFocus
							/>
							<TextField
								variant='outlined'
								margin='normal'
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={onChange}
							/>
							<TextField
								variant='outlined'
								margin='normal'
								fullWidth
								name='password2'
								label='Confirm Password'
								type='password'
								id='password2'
								autoComplete='current-password'
								value={password2}
								onChange={onChange}
							/>
							{/* <FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/> */}
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit + ' submit'}
							>
								Sign Up
							</Button>
							<div class='social'>
								<FacebookLogin
									appId='856263918564266'
									buttonText='Login'
									autoLoad={false}
									fields='name,email,picture'
									cssClass='btnFacebook'
									callback={responseFacebook}
									icon={
										<i
											className='fa fa-facebook'
											style={{ marginLeft: '5px' }}
										/>
									}
									textButton='&nbsp;&nbsp;Sign In with Facebook'
								/>
								<GoogleLogin
									clientId='778384695581-ehr6ia5p2rjfgbtk9h1ke40k6a41ir1q.apps.googleusercontent.com'
									buttonText='Sign in with google'
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									className='btnGoogle'
								/>
							</div>
						</form>
						<Grid container>
							<Grid item xs>
								<Link to='/login' variant='body2'>
									{'Already have an account? Sign In'}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</div>
				</Grid>
			</Grid>
		</>
	);
}

SignUp.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	socialLogin: PropTypes.func.isRequired,
	createProfile: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
	setAlert,
	register,
	createProfile,
	socialLogin,
})(SignUp);
