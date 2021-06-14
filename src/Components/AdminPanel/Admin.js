import React, { useState } from 'react';
import { Fragment } from 'react';
import './Admin.css';
import AddBlog from './Blogs/AddBlog';
import Blogs from './Blogs/Blogs';
import HomePage from './HomePage/HomePage';
import User from './User/User';

const Admin = () => {
	const [r, setR] = useState(1);
	let sidebar = document.getElementById('admin_sidebar');
	let close = document.getElementById('sb_close');

	const setOpen = () => {
		sidebar.className = 'adminSb';
	};
	const setClose = () => {
		if (sidebar != null) sidebar.className = 'adminSb smAdminSb';
	};

	const AdminContent = () => {
		let i;
		for (i = 1; i < 5; i++) {
			let element = document.getElementById(`link${i}`);
			if (r == i && !element.className == 'adminSbLink sbActive') {
				element.className = 'adminSbLink sbActive';
			} else if (r != i) element.className = 'adminSbLink';
		}
		if (r == 1) {
			return (
				<Fragment>
					<h2 style={{ marginTop: '15px' }}>
						<dt>HomePage</dt>
					</h2>
					<HomePage />
				</Fragment>
			);
		} else if (r == 2) {
			return (
				<Fragment>
					<h2 style={{ marginTop: '15px' }}>
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
					<h2 style={{ marginTop: '15px' }}>
						<dt>Users</dt>
					</h2>
					<User />
				</Fragment>
			);
		}
	};

	return (
		<div className='adminMain'>
			<div className='mainContainer'>
				<div>
					<div className='adminNav'>
						<div
							style={{
								marginLeft: '10px',
								position: 'absolute',
								marginTop: '7px',
							}}
						>
							<i className='fas fa-bars sb_open' onClick={() => setOpen()}></i>
						</div>
						Saorsa Admin Panel
					</div>
				</div>
				<div>
					<div className='adminContent'>
						<div>
							<div className='adminSb smAdminSb' id='admin_sidebar'>
								<div id='sb_close'>
									<i class='far fa-times-circle' onClick={() => setClose()}></i>
								</div>
								<p className='adminSbLink'>Statistics</p>
								<p
									onClick={() => setR(1)}
									className='adminSbLink sbActive'
									id='link1'
								>
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
									display: 'flex',
									flexDirection: 'column',
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

export default Admin;
