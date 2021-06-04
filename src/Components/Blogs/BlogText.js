import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./BlogText.css"

const BlogText = ({ title, content }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p className="mainBlogTxt">{ReactHtmlParser(content)}</p>
		</div>
	);
};

export default BlogText;
