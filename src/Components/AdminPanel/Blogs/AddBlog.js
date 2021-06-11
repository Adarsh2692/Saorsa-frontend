import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CreateBlog from '../../Blogs/CreateBlog';

const AddBlog = () => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<br />
			<h5>
				<dt>Create A new Blog</dt>
			</h5>
			<CreateBlog />
		</div>
	);
};

export default AddBlog;
