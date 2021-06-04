import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/ProfilePage/Profile';
import Login from './Components/Auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/routing/PrivateRoute';
import SignUp from './Components/Auth/SignUp';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Step1 from './Components/StepPage/Step1';
import Mood from './Components/Mood/Mood';
import Animated from './Components/AnimatedPage/Animated';
import Landing from './Components/HomePage/Landing';
import BlogLanding from './Components/Blogs/BlogLanding';
import Blog from './Components/Blogs/Blog';
import EditProfile from './Components/ProfilePage/EditProfile';
import CourseName from './Components/StepPage/CourseName';
import StepName from './Components/StepPage/StepName';
import axios from 'axios';
import Resend from './Components/Auth/Resend';
import CreateBlog from './Components/Blogs/CreateBlog';
import SubsStep from './Components/Subscription/SubsStep';
import SubsCourse from './Components/Subscription/SubsCourse';
import PanelMain from './Components/AdminPanel/PanelMain';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	const [courseData, setCourseData] = useState([]);
	const [subsData, setSubsData] = useState([]);
	const [blogArray, setBlogArray] = useState([]);
	let courses = [];
	let subsCourses = [];
	for (let i = 0; i < courseData.length; i++) {
		let p = courseData[i].courses;
		courses.push(p);
	}
	for (let i = 0; i < subsData.length; i++) {
		let p = subsData[i].courses;
		subsCourses.push(p);
	}
	useEffect(() => {
		store.dispatch(loadUser());
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/blog/all')
			.then((res) => {
				setBlogArray(res.data);
			});
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/step')
			.then((res) => {
				setCourseData(res.data);
			});
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/courses/all')
			.then((res) => {
				setSubsData(res.data);
			});
	}, []);
	return (
		<Fragment>
			<Provider store={store}>
				<Router>
					<Fragment>
						<Route
							exact
							path='/'
							component={() => <Landing steps={courseData} />}
						/>
						<section>
							<Switch>
								<Route exact path='/login' component={Login} />
								<Route exact path='/signup' component={SignUp} />
								<PrivateRoute exact path='/profile' component={Profile} />
								<PrivateRoute
									exact
									path='/editprofile'
									component={EditProfile}
								/>
								<Route exact path='/step1' component={Step1} />
								<Route exact path='/mood' component={Mood} />
								<Route exact path='/animated' component={Animated} />
								<Route exact path='/bloglanding' component={BlogLanding} />
								<Route exact path='/resend' component={Resend} />
								<Route exact path='/createblog' component={CreateBlog} />
								<Route exact path='/adminpanel' component={PanelMain} />
								{blogArray.map((val, i) => {
									return (
										<Route
											exact
											path={'/blog' + i}
											component={() => (
												<Blog
													title={val.title}
													content={val.content}
													image={val.image}
													description={val.description}
												/>
											)}
										/>
									);
								})}
								{courseData.map((step, p) => {
									return (
										<Route
											exact
											path={'/s' + p}
											component={() => (
												<StepName
													step={step}
													course={step.courses}
													p={p}
													length={step.courses.length}
												/>
											)}
											key={p}
										/>
									);
								})}
								{courses.map((course, p) =>
									course.map((c, i) => {
										return (
											<Route exact path={'/s' + p + '/c' + i} key={i}>
												<CourseName
													allSteps={courseData}
													p={p}
													course={c}
													index={i}
													length={course.length}
												/>
											</Route>
										);
									})
								)}

								{subsData.map((step, p) => {
									return (
										<Route
											exact
											path={'/sc' + p}
											component={() => (
												<SubsStep
													step={step}
													course={step.courses}
													p={p}
													length={step.courses.length}
												/>
											)}
											key={p}
										/>
									);
								})}
								{subsCourses.map((course, p) =>
									course.map((c, i) => {
										return (
											<Route exact path={'/sc' + p + '/pc' + i} key={i}>
												<SubsCourse
													allSteps={subsData}
													p={p}
													course={c}
													index={i}
													length={course.length}
												/>
											</Route>
										);
									})
								)}
							</Switch>
						</section>
					</Fragment>
				</Router>
			</Provider>
		</Fragment>
	);
};

export default App;
