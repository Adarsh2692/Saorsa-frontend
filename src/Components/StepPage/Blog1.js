import React from 'react';
import AppBar from '../AppBar/AppBar';

const Blog1 = () => {
	return (
		<div style={{ background: '#4A6AD1', height: 'auto' }}>
			<AppBar bg='#09386F' />
			<div>
				<img
					src='https://i.ytimg.com/vi/J0BPoofmPkw/maxresdefault.jpg'
					style={{ width: '100%', height: '30rem' }}
				/>
			</div>
			<div
				style={{ position: 'absolute', marginTop: '-13.5rem', width: '100%' }}
			></div>
			<div
				style={{
					marginTop: '-7rem',
					height: '100vh',
					width: '96%',
					background: '#09386F',
					marginLeft: 'auto',
					marginRight: 'auto',
					position: 'relative',
				}}
			>
				<div style={{ height: '2rem' }}></div>
				<p
					style={{
						fontSize: '1.3rem',
						textAlign: 'left',
						width: '96%',
						marginLeft: '2vw',
					}}
				></p>
				<div style={{ height: '2rem' }}></div>
				<div style={{ height: '5rem' }}></div>
			</div>
			<div style={{ height: '100px' }}></div>
		</div>
	);
};

export default Blog1;
