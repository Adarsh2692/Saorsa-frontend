import { COURSE_ERROR, DISPLAY_COURSES } from "../actions/types";

const initialState = {
	allCourses:[],
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case DISPLAY_COURSES:
			return {
				...state,
				allCourses: payload,
				loading: false,
			};
		case COURSE_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}
