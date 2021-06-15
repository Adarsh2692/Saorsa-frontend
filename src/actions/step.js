import axios from 'axios';
import { setAlert } from './alert';
import { ADD_STEP, DISPLAY_STEP, STEP_ERROR, GET_STEP } from './types';

export const displaySteps = () => async (dispatch) => {
	try {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/step'
		);

		await dispatch({
			type: GET_STEP,
			payload: res.data,
		});
		return res.data;
	} catch (err) {
		alert('cant load steps');
	}
};
