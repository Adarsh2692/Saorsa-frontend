import React from 'react';
import { Fragment } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const PNbutton = ({ to, name }) => {
	return (
		<Link to={to} style={{ textDecoration: 'none', color: '#09386F' }}>
			<Button className='button1'>
				{name == 'Previous' && (
					<Fragment>
						<i class='fas fa-angle-double-left' />
						{' ' + name}
					</Fragment>
				)}
				{name == 'Next' && (
					<Fragment>
						{name + ' '}
						<i class='fas fa-angle-double-right' />
					</Fragment>
				)}
			</Button>
		</Link>
	);
};

export default PNbutton;
