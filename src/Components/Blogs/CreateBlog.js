import { Button, Input, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import AppBar from '../AppBar/AppBar';

const CreateBlog = () => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [fileData, setFileData] = useState(null);
	const [images, setFile] = useState('');

	const onTitleChange = (e) => setTitle(e.target.value);
	const onDescriptionChange = (e) => setDescription(e.target.value);

	const onFileChange = ({ target }) => {
		if (target.files[0]) {
			setFileData(target.files[0]);
			setFile(target.value);
			console.log(target.files[0]);
		}
	};

	const contentChange = (e) => {
		setContent(e);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData();
		if (fileData != null) {
			await data.append('image', fileData);
		}
		await data.append('title', title);
		await data.append('description', description);
		await data.append('content', content);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/blog',
			data,
			config
		);
		console.log('Blog Uploaded');
	};

	return (
		<div style={{ background: '#09386f' }}>
			<div>
				<AppBar bg='#09386F' />
			</div>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					background: 'white',
					marginBottom: '20px',
				}}
				onSubmit={handleSubmit}
			>
				<div
					style={{
						marginTop: '100px',
						textAlign: 'center',
						fontWeight: 'bolder',
						fontSize: '1.5rem',
					}}
				>
					Write your blog content Here
				</div>
				<div
					style={{
						marginTop: '15px',
						display: 'flex',
						flexDirection: 'column',
						width: '70%',
					}}
				>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='title'
						label='Welcome Text'
						name='title'
						value={title}
						onChange={onTitleChange}
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='description'
						value={description}
						onChange={onDescriptionChange}
						label='Small Description'
						type='description'
						id='description'
						style={{
							notchedOutline: {
								borderWidth: '1px',
								borderColor: 'yellow !important',
							},
						}}
					/>
					<h5>
						<dt>Insert Homepage background</dt>
					</h5>
					<Input
						type='file'
						value={images}
						accept='image/*'
						placeholder='image'
						name='image'
						onChange={onFileChange}
					/>
				</div>
				<div
					style={{
						marginTop: '15px',
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<SunEditor
						height='80vh'
						width='80vw'
						setOptions={{ buttonList: buttonList.complex }}
						onChange={contentChange}
						style={{
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
							textAlign: 'center',
						}}
					/>
				</div>
				<div style={{ marginTop: '10px' }}>
					<Button type='submit' color='primary' variant='contained'>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateBlog;
