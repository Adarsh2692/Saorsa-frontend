import React, { Fragment } from 'react';

const Normal = ({ val }) => {
	return (
		<Fragment>
			<p className='chtext'>{val.title}</p>
			<div style={{ height: '15px' }} />
			<img src={val.img} className='courseimg' />
			<div style={{ height: '15px' }} />
			<div className='cntext'>{val.description}</div>
			<br />
		</Fragment>
	);
};

export default Normal;
