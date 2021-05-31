import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import courses from './courses';
import progress from './progress';

export default combineReducers({
	alert,
	auth,
	profile,
	courses,
	progress,
});
