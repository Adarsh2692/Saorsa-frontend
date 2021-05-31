import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';
import Ddlink from './Ddlink';
import './AppBar.css';

const AppBar = ({ bg, auth: { isAuthenticated }, logout }) => {
	const openfunction = () => {
		document.getElementById('sb').style.width = '250px';
	};
	const closefunction = () => {
		document.getElementById('sb').style.width = '0px';
	};
	const ddopen = (e) => {
		if (document.getElementById('dd' + e).style.display === 'none') {
			document.getElementById('dd' + e).style.display = 'block';
			if (e == 1) document.getElementById('dd' + 2).style.display = 'none';
			else if (e == 2) document.getElementById('dd' + 1).style.display = 'none';
		} else {
			document.getElementById('dd' + e).style.display = 'none';
		}
	};

	const dddopen = (e) => {
		if (document.getElementById('ddd' + e).style.display === 'none') {
			document.getElementById('ddd' + e).style.display = 'block';
			if (e == 1) document.getElementById('ddd' + 2).style.display = 'none';
			else if (e == 2)
				document.getElementById('ddd' + 1).style.display = 'none';
		} else {
			document.getElementById('ddd' + e).style.display = 'none';
		}
	};
	const authLinks = (
		<Fragment>
			<Ddlink icon='fa-user' txt='Profile' loc='/profile' />
			<div style={{ margin: '15px' }}>
				<i class={'fas fa-sign-out-alt'}>
					<Link
						style={{ color: 'black' }}
						onClick={() => {
							logout();
						}}
					>
						Logout
					</Link>
				</i>
			</div>
		</Fragment>
	);
	const guestLinks = (
		<Fragment>
			<Ddlink icon='fa-sign-in-alt' txt='Login' loc='/login' />
			<Ddlink icon='fa-user-plus' txt='SignUp' loc='/signup' />
		</Fragment>
	);

	return (
		<div className='AppBar'>
			<div class='container-fluid nav' style={{ width: '100%' }}>
				<ul class='navList' style={{ background: bg }}>
					<Link to='/'>
						<p class='logo' style={{ color: 'white' }}>
							Saorsa Wellbeing
						</p>
					</Link>
					<i class='fa fa-bars fa-lg toggle' onClick={openfunction}></i>
					<div class='navlinks'>
						<Link to='/' class='dlink'>
							Home
						</Link>
						<Link to='/mood' class='dlink'>
							Mood Tracker
						</Link>
						<Link to='/bloglanding' class='dlink'>
							Blog
						</Link>
						<div class='dropdown dlink ddt'>
							<div
								class='dropdown-toggle'
								data-toggle='dropdown'
								onClick={(e) => dddopen(1)}
							>
								Steps
								<div class='ddd' id='ddd1' style={{ display: 'none' }}>
									<Ddlink txt='Blog landing' loc='/bloglanding' />
									<Ddlink txt='Step 1' loc='/s0' />
									<Ddlink txt='Step 2' loc='/s1' />
									<Ddlink txt='Step 3' loc='/s2' />
									<Ddlink txt='Step 4' loc='/s3' />
									<Ddlink txt='Step 5' loc='/s4' />
									<Ddlink txt='Step 6' loc='/s5' />
								</div>
							</div>
						</div>
						<div class='dropdown dlink last ddt'>
							<div
								class='dropdown-toggle'
								data-toggle='dropdown'
								onClick={() => {
									dddopen(2);
								}}
							>
								More
							</div>
							<div class='ddd' id='ddd2' style={{ display: 'none' }}>
								<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
							</div>
						</div>
					</div>
				</ul>
			</div>

			<div class='sidebar' id='sb'>
				<i
					class='fa fa-close fa-lg toggle'
					onClick={closefunction}
					style={{ color: 'white', padding: '0', marginLeft: '20px' }}
				></i>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						marginTop: '50px',
					}}
				>
					<Link to='/' class='mlink'>
						Home
					</Link>
					<Link to='/mood' class='mlink'>
						Mood Tracker
					</Link>
					<Link to='/bloglanding' class='mlink'>
						Blog
					</Link>
					<div class='dropdown mlink ddt'>
						<div
							class='dropdown-toggle'
							data-toggle='dropdown'
							onClick={() => {
								ddopen(1);
							}}
						>
							Steps
						</div>
						<div class='dds' id='dd1' style={{ display: 'none' }}>
							<Ddlink txt='Blog landing' loc='/bloglanding' />
							<Ddlink txt='Step 1' loc='/s0' />
							<Ddlink txt='Step 2' loc='/s1' />
							<Ddlink txt='Step 3' loc='/s2' />
							<Ddlink txt='Step 4' loc='/s3' />
							<Ddlink txt='Step 5' loc='/s4' />
							<Ddlink txt='Step 6' loc='/s5' />
						</div>
					</div>
					<div class='dropdown mlink ddt'>
						<div
							class='dropdown-toggle'
							data-toggle='dropdown'
							onClick={() => {
								ddopen(2);
							}}
						>
							More
						</div>
						<div class='dds' id='dd2' style={{ display: 'none' }}>
							<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AppBar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AppBar);

// class AppBar extends React.Component {
// 	state = {
// 		left: false,
// 	};

// 	toggleDrawer = () => {
// 		// if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 		//   return;
// 		// }

// 		this.setState({ left: false });
// 	};

// 	openDrawer = () => {
// 		this.setState({
// 			left: true,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="AppBar">
// 				<ToolbarComponent openDrawerHandler={this.openDrawer} />
// 				<DrawerComponent
// 					left={this.state.left}
// 					toggleDrawerHandler={this.toggleDrawer}
// 				/>
// 			</div>
// 		);
// 	}
// }
