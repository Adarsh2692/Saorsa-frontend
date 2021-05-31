import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { createCourse } from "../../actions/courses";

const AddPaid = ({ setAlert, createCourse }) => {
	const [formData, setFormData] = useState({
		courseName: "",
		courseImage: "",
		musicLink: "",
		exerciseLink: "",
	});

	const { courseName, courseImage, musicLink, exerciseLink } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		createCourse({ courseName, courseImage, musicLink, exerciseLink });
	};

	return (
		<Fragment>
			{/* <MyNav /> */}
			<h1 className="large text-primary">Admin section</h1>
			<p className="lead">
				<i className="fas fa-user" /> Create Course
			</p>
			<form className="form" onSubmit={onSubmit}>
				<div className="form-group">
					<input
						type="text"
						placeholder="CourseName"
						name="courseName"
						value={courseName}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="CourseImage"
						name="courseImage"
						value={courseImage}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="MusicLink"
						name="musicLink"
						value={musicLink}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="ExerciseLink"
						name="exerciseLink"
						value={exerciseLink}
						onChange={onChange}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="AddPaid" />
			</form>
		</Fragment>
	);
};

AddPaid.propTypes = {
	setAlert: PropTypes.func.isRequired,
	createCourse: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, createCourse })(
	AddPaid
);
