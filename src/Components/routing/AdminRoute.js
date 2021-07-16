import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
	component: Component,
	auth: {
		loading,
		user: { isAdmin },
	},
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			loading ? (
				<div>Loading...</div>
			) : isAdmin ? (
				<Component {...props} />
			) : (
				<Redirect to="/profile" />
			)
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
