import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
	component: Component,
	auth: { isAuthenticated, loading, user },
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			(isAuthenticated) ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);
AdminRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
