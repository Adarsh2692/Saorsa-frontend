import React, { useState } from 'react';
import HeadCard from './HeadCard';
import AppBar from './../AppBar/AppBar';
import BlogCards from './BlogCards';
import './BlogLanding.css';
import { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const BlogLanding = () => {
	const [navColor, setNavColor] = useState('transparent');
	const changeColor = () => {
		if (window.scrollY > 100) {
			setNavColor('#09386F');
		} else {
			setNavColor('transparent');
		}
	};
	window.addEventListener('scroll', changeColor);
	return (
		<div class='bloglandingbg'>
			<AppBar bg={navColor} />
			<div>
				<img
					className='blogimg'
					src='http://madeira-inner-alchemy.com/wp-content/uploads/2018/04/DSC02782.jpg'
				/>
			</div>
			<Fragment>
				<HeadCard />
			</Fragment>
			<div style={{ height: '50px' }}></div>
			<div class='bcards'>
				<BlogCards />
			</div>
			<Button
				style={{
					background: 'white',
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '30px',
				}}
			>
				<Link to='/createblog'>CreateBlog</Link>
			</Button>
			<div style={{ height: '100px' }}></div>
		</div>
	);
};

export default BlogLanding;
