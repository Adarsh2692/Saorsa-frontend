import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const AddBlog = () => {
	return (
		<div style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
			<br/>
			<h5>
				<dt>Create A new Blog</dt>
			</h5>
			<Button color='primary' variant='contained'>
				<Link to='/createblog' style={{ color: 'white' }}>
					CreateBlog
				</Link>
			</Button>
		</div>
	);
};

export default AddBlog;
