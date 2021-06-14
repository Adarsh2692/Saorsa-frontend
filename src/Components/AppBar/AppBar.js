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
		} else {
			document.getElementById('dd' + e).style.display = 'none';
		}
	};

	const dddopen = (e) => {
		if (e == 1) document.getElementById('ddd1').style.display = 'block';
		else if (e == 2) document.getElementById('ddd1').style.display = 'none';
	};

	const authLinks = (c) => {
		return (
			<Fragment>
				<Link to='/profile' className={c}>
					<i class={'fas fa-user'}></i>
					{'  '}Profile
				</Link>
				<Link
					onClick={() => {
						logout();
					}}
					className={c == 'mlink' ? 'mlink' : 'dlink last'}
				>
					<i class={'fas fa-sign-out-alt'}></i>
					{'  '}Logout
				</Link>
			</Fragment>
		);
	};
	const guestLinks = (c) => {
		return (
			<Fragment>
				<Link to='/login' className={c}>
					<i class={'fas fa-sign-in-alt'}></i>
					{'  '}Login
				</Link>
				<Link to='/signup' className={c == 'mlink' ? 'mlink' : 'dlink last'}>
					<i class={'fas fa-user-plus'}></i>
					{'  '}Sign Up
				</Link>
			</Fragment>
		);
	};

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
								class='dropdown-toggle dtoggle'
								data-toggle='dropdown'
								onClick={(e) => dddopen(1)}
								onMouseLeave={(e) => dddopen(2)}
								style={{ fontSize: '1.3rem' }}
							>
								Steps{'  '}
								<div class='ddd' id='ddd1' style={{ display: 'none' }}>
									<Ddlink txt='Step 1' loc='/s0' />
									<Ddlink txt='Step 2' loc='/s1' />
									<Ddlink txt='Step 3' loc='/s2' />
									<Ddlink txt='Step 4' loc='/s3' />
									<Ddlink txt='Step 5' loc='/s4' />
									<Ddlink txt='Step 6' loc='/s5' />
								</div>
							</div>
						</div>
						<Fragment>
							{isAuthenticated ? authLinks('dlink') : guestLinks('dlink')}
						</Fragment>
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
					<div class='dropdown mlink ddt' onClick={(e) => ddopen(1)}>
						<div
							class='dropdown-toggle'
							data-toggle='dropdown'
							style={{ fontSize: '1.5rem' }}
						>
							Steps{'  '}
						</div>
						<div class='dds' id='dd1' style={{ display: 'none' }}>
							<Ddlink txt='Step 1' loc='/s0' />
							<Ddlink txt='Step 2' loc='/s1' />
							<Ddlink txt='Step 3' loc='/s2' />
							<Ddlink txt='Step 4' loc='/s3' />
							<Ddlink txt='Step 5' loc='/s4' />
							<Ddlink txt='Step 6' loc='/s5' />
						</div>
					</div>
					<Fragment>
						{isAuthenticated ? authLinks('mlink') : guestLinks('mlink')}
					</Fragment>
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
