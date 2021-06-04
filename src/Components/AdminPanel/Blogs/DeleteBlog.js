import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';

const DeleteBlog = () => {
	const [formData, setFormData] = useState({
		title: '',
	});

	const { title } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = async () => {
		const body = JSON.stringify(formData);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios({
			method: 'DELETE',
			url: 'https://mighty-bastion-04883.herokuapp.com/api/blog/delete',
			data: {
				title,
			},
			config,
		});
		await alert(res.data);
		window.location.reload();
	};

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems:"center"
			}}
		>
			<h5>
				<dt>Create A new Blog</dt>
			</h5>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='title'
				label='Name of Blog to be deleted'
				name='title'
				value={title}
				onChange={onChange}
				autoComplete='title'
				style={{ width: '100%' }}
			/>
			<div>
				<Button onClick={handleSubmit} color='primary' variant='contained'>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default DeleteBlog;
