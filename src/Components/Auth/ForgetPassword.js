import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = ({ p = 0 }) => {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	// const [r, setR] = useState(0);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async () => {
		const body = JSON.stringify(formData);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/user/forgot',
			body,
			config
		);
		if (res.data == 'Email Sent')
			await alert(
				'You have received a confirmation mail, Click the link provided to change your password'
			);
		else await alert(res.data);
		window.location.reload();
	};
	return (
		<div>
			<Link href='#' variant='body2' onClick={handleOpen}>
				Forgot password?
			</Link>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'Forgot your password?'}
				</DialogTitle>
				<DialogContent>
					<div>
						If the email address that you enter is registered, you will receive
						a confirmation link on that email address, on clicking of
						which, your password will be changed to the new password that you
						put here
					</div>
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
						label='New Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubmit} color='primary' variant='contained'>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ForgetPassword;
