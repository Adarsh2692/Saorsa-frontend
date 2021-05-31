import axios from "axios";
import { setAlert } from "./alert";
import {ADD_STEP,DISPLAY_STEP,STEP_ERROR} from "./types";

export const displaySteps = () => async (dispatch) => {
	try {
		const res = await axios.get("https://mighty-bastion-04883.herokuapp.com/api/step");

		await dispatch({
			type: GET_STEP,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: STEP_ERROR,
			payload: { msg: err.data },
		});
	}
};