import { GET_PROGRESS, POST_PROGRESS } from '../actions/types';

const initialState = {
	progress: {},
	loading: true,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_PROGRESS:
		case POST_PROGRESS:
			return {
				...state,
				progress: payload,
				loading: false,
			};
		default:
			return state;
	}
};
