import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogCards = () => {
	const [blogArray, setBlogArray] = useState([]);
	const [load, setLoad] = useState(false);
	useEffect(async () => {
		const res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/blog/all'
		);
		setBlogArray(res.data);
		setLoad(true);
	}, []);
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				position: 'relative',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
			}}
		>
			{!load ? (
				<Fragment>Loading...</Fragment>
			) : (
				<Fragment>
					{blogArray.map((val, i) => {
						return (
							<BlogCard title={val.title} i={i} content={val.content} key={i} />
						);
					})}
				</Fragment>
			)}
		</div>
	);
};

export default BlogCards;
