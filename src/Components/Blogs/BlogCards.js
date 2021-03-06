import React, { Fragment, useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogCards = ({ blogArray }) => {
	console.log(blogArray, 'hiii');
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
			{blogArray.map((val, i) => {
				return (
					<BlogCard
						title={val.title}
						i={i}
						image={val.image}
						key={i}
						description={val.description}
					/>
				);
			})}
		</div>
	);
};

export default BlogCards;
