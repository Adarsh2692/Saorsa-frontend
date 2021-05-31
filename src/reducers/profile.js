import {
	GET_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	ADD_MOOD,
	MOOD_ERROR,
	DISPLAY_MOODS
} from "../actions/types";

const initialState = {
	profile: null,
	profiles: [],
	moods:[],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			};
		case PROFILE_ERROR:
		case MOOD_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				loading: false,
			};
		case ADD_MOOD:
		case DISPLAY_MOODS:
			return {
				...state,
				moods: payload,
				loading: false
			}
		default:
			return state;
	}
}
