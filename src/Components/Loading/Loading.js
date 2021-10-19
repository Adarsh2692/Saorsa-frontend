import React from 'react';

const Loading = () => {
	return (
		<div
			style={{
				background: 'white',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{/* <img
				style={{
					background: 'white',
					height: '200px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				src='https://res.cloudinary.com/adarshsingh/video/upload/v1634604654/Untitled_uifuqc.mp4'
			/> */}
			<video autoPlay loop muted style={{
					background: 'white',
					height: '200px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<source type='video/mp4' src='https://res.cloudinary.com/adarshsingh/video/upload/v1634604654/Untitled_uifuqc.mp4' />
			</video>
			<p style={{ fontSize: '30px', color: '#496ad1' }}>
				<dt>Loading...</dt>
			</p>
		</div>
	);
};

export default Loading;
