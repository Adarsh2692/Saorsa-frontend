import axios from 'axios';
import { setAlert } from './alert';
import {
	GET_PROFILE,
	PROFILE_ERROR,
	ADD_MOOD,
	MOOD_ERROR,
	DISPLAY_MOODS,
} from './types';
//import { loadUser } from './auth';

//Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/profile/me'
		);

		await dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		await dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.data },
		});
	}
};

//Create or update profile
export const createProfile = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};
	try {
		const res = await axios.post(
			'https://mighty-bastion-04883.herokuapp.com/api/profile',
			formData,
			config
		);

		await console.log(res.data, 'here', formData);

		await alert('The profile has been successfully updated');
		await dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//Add new mood
export const addMood =
	({ mood, rating, score }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ mood, rating, score });

		try {
			const res = await axios.post(
				'https://mighty-bastion-04883.herokuapp.com/api/mood/new',
				body,
				config
			);

			dispatch({
				type: ADD_MOOD,
				payload: res.data,
			});

			alert('You are currently ' + mood);
		} catch (err) {
			const errors = err.response.data.errors;

			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
			}

			dispatch({
				type: MOOD_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
		}
	};

export const displayMoods = () => async (dispatch) => {
	try {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/mood/all'
		);

		dispatch({
			type: DISPLAY_MOODS,
			payload: res.data,
		});
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: MOOD_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
