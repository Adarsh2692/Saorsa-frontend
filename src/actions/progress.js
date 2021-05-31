import axios from 'axios';
import { GET_PROGRESS, POST_PROGRESS } from './types';

export const getProgress = () => async (dispatch) => {
	try {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/progress'
		);

		await dispatch({
			type: GET_PROGRESS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const postProgress =
	({ step, course }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({ step, course });
		try {
			const res = await axios.post(
				'https://mighty-bastion-04883.herokuapp.com/api/progress',
				body,
				config
			);

			await dispatch({
				type: POST_PROGRESS,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
