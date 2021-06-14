import React, { Fragment } from 'react';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Ddlink = ({ icon, txt, loc, logout }) => {
	return (
		<Link to={loc} className='drdlink'>
			<div style={{ width: '100%' }} className='drd'>
				{txt}
			</div>
		</Link>
	);
};

export default Ddlink;
