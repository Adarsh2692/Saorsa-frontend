import React, { Fragment } from 'react';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Ddlink = ({ icon, txt, loc, logout }) => {
	return (
		<div style={{ width: '100%' }} className="drd">
			<Link to={loc} className='drdlink'>
				{txt}
			</Link>
		</div>
	);
};

export default Ddlink;
