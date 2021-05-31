import React from 'react';
import AppBar from '../AppBar/AppBar';

const Resend = () => {
	return (
		<div style={{ height: '100vh' }}>
			<AppBar bg='#09386F' />
			<div
				style={{
					position: 'absolute',
					marginTop: '40vh',
					width: '100%',
				}}
			>
				<p style={{ textAlign: 'center', color: 'black' }}>
					Click the below button to receive confirmation email
				</p>
				<button
					className='btn btn-primary'
					style={{
						display: 'block',
						margin: 'auto',
						height: '4rem',
					}}
				>
					Resend Mail
				</button>
			</div>
		</div>
	);
};

export default Resend;
