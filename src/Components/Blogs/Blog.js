import React, { useState } from 'react';
import BCard1 from './BCard1';
import AppBar from './../AppBar/AppBar';
import './Blog.css';
import BlogText from './BlogText';

const Blog = ({ title, content }) => {
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
		<div class='contentblogbg'>
			<AppBar bg={navColor} />
			<div>
				<img
					className='contentblogimg'
					src='http://madeira-inner-alchemy.com/wp-content/uploads/2018/04/DSC02782.jpg'
				/>
			</div>
			<div class='contentblogm1'></div>
			<div class='contentblogmix'>
				<div class='contentblogtext'>
					<p class='contentblogpara'>
						<BlogText title={title} content={content} />
					</p>
				</div>
				<div class='contentblogcards'>
					<div class='contentblogm1'></div>
					<BCard1 />
					<div class='contentblogm1'></div>
					<BCard1 />
					<div class='contentblogm1'></div>
					<BCard1 />
				</div>
			</div>
		</div>
	);
};

export default Blog;
