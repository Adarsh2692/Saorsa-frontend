import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "./../utils/setAuthToken";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_PROFILE,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("https://mighty-bastion-04883.herokuapp.com/api/auth");

		await dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify({ name, email, password });

	try {
		const res = await axios.post("https://mighty-bastion-04883.herokuapp.com/api/user", body, config);
		await dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		await dispatch(loadUser());
		await alert("A verification mail has been sent to "+email+". Please click the verification link in the mail")
		return (true);
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => alert(error.msg));
		}

		dispatch({
			type: REGISTER_FAIL,
		});

		return(false)
	}
};

//Facebook Login/Register
export const socialLogin = ({ name, email }) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify({ name, email });

	try {
		const res = await axios.post("https://mighty-bastion-04883.herokuapp.com/api/user/social", body, config);
		await dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		await dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		dispatch({ type: LOGIN_FAIL });
		dispatch({ type: CLEAR_PROFILE });
		dispatch({ type: LOGOUT });
	}
};

// Login User
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post("https://mighty-bastion-04883.herokuapp.com/api/auth", body, config);
		const auth = res.data.user.confirmed;
		if (auth) {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			dispatch(loadUser());
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		alert("Invalid Credentials");

		dispatch({ type: LOGIN_FAIL });
		dispatch({ type: CLEAR_PROFILE });
		dispatch({ type: LOGOUT });
	}
};

//Logout / Clear Profile
export const logout = () => (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });
	dispatch({ type: LOGOUT });
};
