import { GET_STEP } from '../actions/types';

const initialState = {
	step: [],
	loading: true,
	hello: 'hello everyone',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_STEP:
			return {
				...state,
				step: payload,
				loading: false,
			};
		default:
			return state;
	}
};
