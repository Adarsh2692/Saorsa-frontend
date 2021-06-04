import React, { useEffect, useState } from 'react';
import HeadCard from './HeadCard';
import AppBar from './../AppBar/AppBar';
import BlogCards from './BlogCards';
import './BlogLanding.css';
import { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogLanding = () => {
	const [navColor, setNavColor] = useState('transparent');
	const [blogArray, setBlogArray] = useState([]);
	const [blogData, setBlogData] = useState({});
	const [loading, setLoading] = useState(true);

	const changeColor = () => {
		if (window.scrollY > 100) {
			setNavColor('#09386F');
		} else {
			setNavColor('transparent');
		}
	};

	window.addEventListener('scroll', changeColor);
	useEffect(async () => {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/blog/all'
		);
		setBlogArray(res.data);
		const response = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/home/bloglanding'
		);
		setBlogData(response.data);
		setLoading(false);
	}, []);

	return (
		<Fragment>
			{loading ? (
				<div
					style={{
						background: 'white',
						height: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img
						style={{
							background: 'white',
							height: '200px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						src='https://acegif.com/wp-content/uploads/loading-36.gif'
					/>
					<p style={{ fontSize: '30px', color: '#496ad1' }}>
						<dt>Loading...</dt>
					</p>
				</div>
			) : (
				<div class='bloglandingbg'>
					<AppBar bg={navColor} />
					<div>
						<img className='blogimg' src={blogData.image} />
					</div>
					<div>
						<HeadCard blogArray={blogArray[blogArray.length - 1]} />
					</div>
					<div style={{ height: '50px' }}></div>
					<div class='bcards'>
						<BlogCards blogArray={blogArray} />
					</div>
					<div style={{ height: '100px' }}></div>
				</div>
			)}
		</Fragment>
	);
};

export default BlogLanding;
