import { Button, Input, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
	});
	const [fileData, setFileData] = useState(null);
	const [images, setFile] = useState('');

	const { title, description } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	// const [r, setR] = useState(0);

	const onFileChange = ({ target }) => {
		if (target.files[0]) {
			setFileData(target.files[0]);
			setFile(target.value);
			console.log(target.files[0]);
		}
	};

	const handleSubmit = async () => {
		const data = new FormData();
		if (fileData != null) {
			await data.append('image', fileData);
		}
		await data.append('title', title);
		await data.append('description', description);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/home',
			data,
			config
		);
		if (res.status == 200) {
			alert('Homepage Data Updated');
			window.location.reload();
		}
		console.log(title, description, 'hello');
	};

	useState(() => {
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/home')
			.then((res) => {
				setFormData({
					...formData,
					title: res.data.title,
					description: res.data.description,
				});
				console.log(res);
				// setLoading(false);
			});
	}, []);

	return (
		<div className='adminHome'>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='title'
				label='Welcome Text'
				name='title'
				value={title}
				onChange={onChange}
				autoComplete='title'
				autoFocus
				className="adminTxtBox"
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				name='description'
				value={description}
				onChange={onChange}
				label='Small Description'
				type='description'
				id='description'
				autoComplete='current-description'
				className="adminTxtBox"
			/>
			<h5>
				<dt>Insert Homepage background</dt>
			</h5>
			<Input
				type='file'
				value={images}
				placeholder='image'
				name='image'
				onChange={onFileChange}
				className="adminTxtBox"
				inputProps={{ accept: 'image/*' }}
			/>
			<div style={{ marginTop: '10px' }}>
				<Button onClick={handleSubmit} color='primary' variant='contained'>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default HomePage;
