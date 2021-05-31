import React from 'react';

const Video = ({ val }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<video poster={val.thumbnail} className='coursevideo' controls>
				<source src={val.video} />
			</video>
		</div>
	);
};

export default Video;
