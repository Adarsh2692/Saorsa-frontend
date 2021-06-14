import React, { useEffect, useState } from 'react';
import BCard1 from './BCard1';
import AppBar from './../AppBar/AppBar';
import './Blog.css';
import BlogText from './BlogText';
import axios from 'axios';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';

const Blog = ({ title, content, image, description }) => {
	const [loading, setLoading] = useState(true);
	const [blogArray, setBlogArray] = useState([]);

	useEffect(async () => {
		let content = document.querySelector('div');
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/blog/all'
		);
		setBlogArray(res.data);
		console.log(blogArray);
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
				<div class='contentblogbg'>
					<AppBar bg='#09386F' />
					<div>
						<img className='contentblogimg' src={image} />
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
							<BCard1 blog={blogArray[blogArray.length - 1]} i={blogArray.length - 1} />
							<div class='contentblogm1'></div>
							<BCard1 blog={blogArray[blogArray.length - 2]} i={blogArray.length - 2} />
							<div class='contentblogm1'></div>
							<BCard1 blog={blogArray[blogArray.length - 3]} i={blogArray.length - 3} />
						</div>
					</div>
					<div style={{ height: '50px' }}></div>
					<Footer />
				</div>
			)}
		</Fragment>
	);
};

export default Blog;
