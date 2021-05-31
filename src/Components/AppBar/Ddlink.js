import React, { Fragment } from 'react';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Ddlink = ({ icon, txt, loc, logout }) => {
	return (
		<div>
			<i class={'fas ' + icon}>
				<Link to={loc} style={{ color: 'black' }}>
					{txt}
				</Link>
			</i>
		</div>
	);
};

export default Ddlink;
