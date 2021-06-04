import React from 'react';
import AddBlog from './AddBlog';
import BlogLanding from './BlogLanding';
import DeleteBlog from './DeleteBlog';

const Blogs = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<AddBlog />
			<br/>
			<BlogLanding/>
			<br/>
			<DeleteBlog />
			<br/>
		</div>
	);
};

export default Blogs;
