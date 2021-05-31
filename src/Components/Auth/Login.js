import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './../AppBar/AppBar';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, socialLogin } from '../../actions/auth';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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

function Login({ login, isAuthenticated, socialLogin }) {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	const responseGoogle = async (response) => {
		await socialLogin({
			name: response.profileObj.name,
			email: response.profileObj.email,
		});
		isAuthenticated = true;
	};

	//Redirect if logged in
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
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								value={email}
								onChange={onChange}
								autoComplete='email'
								autoFocus
							/>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								value={password}
								onChange={onChange}
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
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
								Sign In
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
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link to='/signup' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
		</>
	);
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	socialLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, socialLogin })(Login);
