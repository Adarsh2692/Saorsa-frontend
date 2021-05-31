import axios from "axios";
import { setAlert } from "./alert";
import {
	COURSE_ERROR,
    DISPLAY_COURSES
} from "./types";
//import { loadUser } from './auth';

// //Get current users profile
// export const getCurrentProfile = () => async (dispatch) => {
// 	try {
// 		const res = await axios.get("https://mighty-bastion-04883.herokuapp.com/api/profile/me");

// 		dispatch({
// 			type: GET_PROFILE,
// 			payload: res.data,
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		dispatch({
// 			type: PROFILE_ERROR,
// 			payload: { msg: err.data },
// 		});
// 	}
// };

//Create or update profile

export const createCourse = ({
	courseName,
	courseImage,
	musicLink,
	exerciseLink,
}) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify({
		courseName,
		courseImage,
		musicLink,
		exerciseLink,
	});

	try {
		const res = await axios.post("https://mighty-bastion-04883.herokuapp.com/api/courses/new", body, config);

		dispatch(setAlert("Course Added"));
	} catch (err) {
		dispatch(setAlert("You are not authorized for to access this functionality", "danger"));

		dispatch({
			type: COURSE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

export const displayCourses = () => async (dispatch) => {
	try {
		const res = await axios.get("https://mighty-bastion-04883.herokuapp.com/api/courses/all");

		dispatch({
			type: DISPLAY_COURSES,
			payload: res.data,
		});
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}
		dispatch({
			type: COURSE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
