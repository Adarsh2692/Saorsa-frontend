import { Button, Input, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogLanding = () => {
	const [fileData, setFileData] = useState(null);
	const [images, setFile] = useState('');

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
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/home/bloglanding',
			data,
			config
		);
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
				alignItems: 'center',
			}}
		>
			<h5>
				<dt>Insert Blog Page background</dt>
			</h5>
			<Input
				type='file'
				value={images}
				accept='image/*'
				placeholder='image'
				name='image'
				onChange={onFileChange}
				style={{ marginTop: '5px' }}
				inputProps={{ accept: 'image/*' }}
			/>
			<br />
			<div style={{ marginTop: '10px' }}>
				<Button onClick={handleSubmit} color='primary' variant='contained'>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default BlogLanding;
