import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';
import { Redirect } from 'react-router';

const Logout = ({ logout }) => {
	useState(() => {
		logout();
		alert('Email not authenticated');
	}, []);
	return <div>hello</div>;
};

logout.propTypes = {
	logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);
