import React from 'react';
import AddBlog from './AddBlog';
import BlogLanding from './BlogLanding';
import DeleteBlog from './DeleteBlog';
import './Blog.css';
import EditBlog from './EditBlog';

const Blogs = () => {
	return (
		<div className='adminBlog'>
			<BlogLanding />
			<br />
			<DeleteBlog />
			<br />
		</div>
	);
};

export default Blogs;
