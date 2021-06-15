import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import courses from './courses';
import progress from './progress';
import step from './step';

export default combineReducers({
	alert,
	auth,
	profile,
	courses,
	progress,
	step,
});
