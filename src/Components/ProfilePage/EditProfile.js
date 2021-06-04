import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';
import AppBar from './../AppBar/AppBar';
import axios from 'axios';
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	Input,
	TextField,
} from '@material-ui/core';

const EditProfile = ({ setAlert, createProfile, history, edit, b }) => {
	const [bio, setBio] = useState(b);
	const [fileData, setFormData] = useState(null);
	const [images, setFile] = useState('');

	const onChange = (e) => setBio(e.target.value);

	const onFileChange = ({ target }) => {
		if (target.files[0]) {
			setFormData(target.files[0]);
			setFile(target.value);
			console.log(target.files[0]);
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		if (fileData != null) {
			await formData.append('image', fileData);
		}
		await formData.append('bio', bio);
		await createProfile(formData);
		await edit();
		window.location.reload();
	};

	return (
		<Fragment>
			<div style={{ height: '50px' }}></div>
			<h3 style={{ color: 'white' }}>
				<dt>Edit your profile</dt>
			</h3>
			<form
				className='form'
				style={{
					width: '300px',
					height: '300px',
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '25px',
				}}
				onSubmit={onSubmit}
			>
				{/* <div className='form-group'>
					<div className='form-group'>
						<input
							type='text'
							placeholder='bio'
							name='bio'
							value={bio}
							onChange={onChange}
							class='epinp'
						/>
					</div>
					<div className='form-group'>
						<input
							type='file'
							value={images}
							accept='image/*'
							placeholder='image'
							name='image'
							onChange={onFileChange}
							style={{ marginLeft: '40px' }}
						/>
					</div>
				</div>
				<input
					type='submit'
					className='btn btn-primary'
					value='Update'
					style={{ height: '3rem', width: '5rem' }}
				/> */}
				<Card
					style={{
						width: '300px',
						height: '300px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<CardContent>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							label='About you'
							autoComplete='Bio'
							type='text'
							placeholder='Bio'
							name='bio'
							value={bio}
							onChange={onChange}
							autoFocus
						/>
						<br/>
						<br/>
						<Input
							type='file'
							value={images}
							accept='image/*'
							placeholder='image'
							name='image'
							onChange={onFileChange}
						/>
					</CardContent>
					<br/>
					<CardActionArea>
						<Button type='submit' color='primary' variant='contained'>
							Submit
						</Button>
					</CardActionArea>
				</Card>
			</form>
			<div style={{ height: '50px' }}></div>
		</Fragment>
	);
};

EditProfile.propTypes = {
	setAlert: PropTypes.func.isRequired,
	createProfile: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, createProfile })(EditProfile);
