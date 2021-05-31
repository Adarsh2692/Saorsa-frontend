import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./BlogText.css"

const BlogText = ({ title, content }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p className="mainBlogtxt">{ReactHtmlParser(content)}</p>
			<p className="mainBlogtxt1"><h1>abc</h1></p>
		</div>
	);
};

export default BlogText;
