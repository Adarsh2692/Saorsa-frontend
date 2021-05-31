import React, { useState } from 'react';
import AppBar from './../AppBar/AppBar';
import Paid from './Paid';
import SixStep from './SixStep';
import './Landing.css';
import Footer from '../Footer/Footer';

const Landing = ({ steps }) => {
	const [navColor, setNavColor] = useState('transparent');

	const changeColor = () => {
		if (window.scrollY >= 150) {
			setNavColor('#09386F');
		} else {
			setNavColor('transparent');
		}
	};

	window.addEventListener('scroll', changeColor);

	return (
		<div style={{ overflow: 'hidden' }}>
			<AppBar bg={navColor} />
			<div class='mainbg' style={{ background: '#09386F' }}>
				<img
					src='https://wallpaperaccess.com/full/139155.jpg'
					style={{
						borderRadius: '0px 0px 30px 30px',
						boxShadow: '0 4px 5px 0 rgb(0,0,0,0.5)',
						width: '100%',
					}}
				/>
				<div class='bgtext'>
					<p class='p1'>Welcome to Saorsa</p>
					<p class='p2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
						totam perspiciatis laboriosam maiores beatae aliquam porro nobis
						consequuntur explicabo?
					</p>
				</div>
			</div>
			<div class='mergedsection'>
				<div class='freesection'>
					<div style={{ height: '50px' }}></div>
					<h1 class='heading' style={{ textAlign: 'center', color: 'white' }}>
						<dt>FREE EMOTIONAL REGULATION COURSES</dt>
					</h1>
					<div style={{ height: '10px' }}></div>
					<SixStep steps={steps} />
				</div>
				<hr />
				<div class='paidsection'>
					<div style={{ height: '20px' }}></div>
					<h1 class='heading' style={{ textAlign: 'center', color: 'white' }}>
						<dt>SAORSA+ COURSES</dt>
					</h1>
					<Paid />
				</div>
				<div style={{ height: '100px' }}></div>
				<Footer/>
			</div>
		</div>
	);
};

export default Landing;
