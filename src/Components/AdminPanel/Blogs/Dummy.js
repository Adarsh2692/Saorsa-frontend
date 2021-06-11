import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';

const Dummy = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	// const [r, setR] = useState(0);

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
		console.log(email, password, 'hello');
	};

	return (
		<div>
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
			<div>
				<Button onClick={handleSubmit} color='primary' variant='contained'>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default Dummy;
