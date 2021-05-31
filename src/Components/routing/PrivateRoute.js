// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({
// 	component: Component,
// 	auth: { isAuthenticated, loading },
// 	...rest
// }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
// 		}
// 	/>
// );
// PrivateRoute.propTypes = {
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);

import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const PrivateRoute = ({
	component: Component,
	auth: {
		isAuthenticated,
		loading,
	},
	logout,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			loading ? (
				<div>Loading...</div>
			) : isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(PrivateRoute);
