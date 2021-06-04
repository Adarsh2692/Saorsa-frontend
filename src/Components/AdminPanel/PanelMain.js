import React from 'react';
import AppBar from '../AppBar/AppBar';
import Blogs from './Blogs/Blogs';
import HomePage from './HomePage/HomePage';
import User from './User/User';

const PanelMain = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<AppBar bg='#09386f' />
			<div
				style={{
					marginTop: '90px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2 style={{ marginTop: '15px' }}>
					<dt>HomePage</dt>
				</h2>
				<HomePage />
				<h2 style={{ marginTop: '15px' }}>
					<dt>Blogs</dt>
				</h2>
				<Blogs />
				<h2 style={{ marginTop: '15px' }}>
					<dt>Users</dt>
				</h2>
				<User />
				<br/>
			</div>
		</div>
	);
};

export default PanelMain;
