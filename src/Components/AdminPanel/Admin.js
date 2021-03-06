import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Admin.css";
import AddBlog from "./Blogs/AddBlog";
import Blogs from "./Blogs/Blogs";
import HomePage from "./HomePage/HomePage";
import Stats from "./Stats/Stats";
import User from "./User/User";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Admin = ({
	auth: {
		user: { isAdmin },
	},
}) => {
	const [r, setR] = useState(0);
	let sidebar = document.getElementById("admin_sidebar");
	let close = document.getElementById("sb_close");

	const setOpen = () => {
		sidebar.className = "adminSb";
	};
	const setClose = () => {
		if (sidebar != null) sidebar.className = "adminSb smAdminSb";
	};

	const AdminContent = () => {
		setClose();
		if (r == 0) {
			return (
				<Fragment>
					<h2 style={{ marginTop: "15px" }}>
						<dt>Statistics</dt>
					</h2>
					<Stats />
				</Fragment>
			);
		} else if (r == 1) {
			return (
				<Fragment>
					<h2 style={{ marginTop: "15px" }}>
						<dt>HomePage</dt>
					</h2>
					<HomePage />
				</Fragment>
			);
		} else if (r == 2) {
			return (
				<Fragment>
					<h2 style={{ marginTop: "15px" }}>
						<dt>Blogs</dt>
					</h2>
					<Blogs />
				</Fragment>
			);
		} else if (r == 3) {
			return (
				<Fragment>
					<AddBlog />
				</Fragment>
			);
		} else if (r == 4) {
			return (
				<Fragment>
					<h2 style={{ marginTop: "15px" }}>
						<dt>Users</dt>
					</h2>
					<User />
				</Fragment>
			);
		}
	};

	useEffect(() => {
		if (document.getElementById("link1")) {
			for (let i = 0; i <= 4; i++) {
				if (i == r) {
					document.getElementById("link" + i).className =
						"adminSbLink sbActive";
				} else {
					document.getElementById("link" + i).className = "adminSbLink";
				}
			}
		}
	});

	return (
		<div className='adminMain'>
			<div className='mainContainer'>
				<div>
					<div className='adminNav'>
						<div
							style={{
								marginLeft: "10px",
								position: "absolute",
								marginTop: "7px",
							}}
						>
							<i className='fas fa-bars sb_open' onClick={() => setOpen()}></i>
						</div>
						<Link to='/' style={{ color: "white", textDecoration: "none" }}>
							Saorsa Admin Panel
						</Link>
					</div>
				</div>
				<div>
					<div className='adminContent'>
						<div>
							<div className='adminSb smAdminSb' id='admin_sidebar'>
								<div id='sb_close'>
									<i class='far fa-times-circle' onClick={() => setClose()}></i>
								</div>
								<p
									onClick={() => setR(0)}
									className='adminSbLink sbActive'
									id='link0'
								>
									Statistics
								</p>
								<p onClick={() => setR(1)} className='adminSbLink' id='link1'>
									Homepage
								</p>
								<p onClick={() => setR(2)} className='adminSbLink' id='link2'>
									Blog
								</p>
								<p onClick={() => setR(3)} className='adminSbLink' id='link3'>
									Add Blog
								</p>
								<p onClick={() => setR(4)} className='adminSbLink' id='link4'>
									Users
								</p>
							</div>
						</div>
						<div className='adminSections'>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<AdminContent />
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Admin.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Admin);
