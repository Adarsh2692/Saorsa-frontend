import axios from 'axios';
import React, { useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import AppBar from '../AppBar/AppBar';

const CreateBlog = () => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');

	const contentChange = (e) => {
		setContent(e);
	};

	const titleChange = (e) => {
		setTitle(e.target.value);
	};

	const blogSubmit = async (e) => {
		alert('start');
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const form = { title, content };
		const body = JSON.stringify(form);
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/blog',
			body,
			config
		);
		alert(res.data);
	};
	return (
		<div style={{ background: '#09386f' }}>
			<div>
				<AppBar bg='#09386F' />
			</div>
			<div>
				<div
					style={{
						marginTop: '100px',
						textAlign: 'center',
						fontWeight: 'bolder',
						fontSize: '1.5rem',
						color: 'white',
					}}
				>
					Write your blog content Here
				</div>
				<div
					style={{
						marginTop: '15px',
						display: 'flex',
						width: '100%',
					}}
				>
					<input
						style={{
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
							textAlign: 'center',
							width: '50vw',
							height: '50px',
							borderRadius: '15px',
							outline: 'none',
						}}
						placeholder='Blog Title'
						value={title}
						name='title'
						onChange={(e) => titleChange(e)}
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
				<button
					type='submit'
					style={{
						display: 'block',
						marginLeft: 'auto',
						marginRight: 'auto',
						textAlign: 'center',
					}}
					onClick={() => blogSubmit()}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default CreateBlog;
