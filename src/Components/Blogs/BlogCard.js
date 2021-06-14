import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, image, description, i }) => {
	return (
		<div>
			<Link to={'blog' + i}>
				<Card class='bcard'>
					<CardActionArea>
						<img class='bcimg' src={image} />
						<CardContent class='bctxt'>
							<p class='bc1'>{title}</p>
							<p class='bc2'>{description}</p>
							<div class='kc1'></div>
							<div class='kc2'></div>
							<div class='kc3'></div>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		</div>
	);
};

export default BlogCard;
/*https://t4.ftcdn.net/jpg/03/06/45/45/360_F_306454530_PTzMtm7GAiNvVDPBLnfCwH1pGutx1MuH.jpg*/
