import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateBlog from '../../Blogs/CreateBlog';

const EditBlog = () => {
	const [blog, setBlog] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(async () => {
		let title = 'Title Of Blog';
		const body = JSON.stringify(title);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.get(
			`https://mighty-bastion-04883.herokuapp.com/api/blog/one/${title}`
		);
		await setBlog(res.data);
		await setLoading(false);
		if (!loading) console.log(blog, 'okay done');
	}, []);
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="editblog"
		>
			<br />
			<h5>
				<dt>Edit a blog</dt>
			</h5>
			<CreateBlog storedData={blog}/>
		</div>
	);
};

export default EditBlog;
