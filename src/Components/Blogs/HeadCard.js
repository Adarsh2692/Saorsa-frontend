import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './HeadCard.css';
import { Link } from 'react-router-dom';

const HeadCard = ({ blogArray, i }) => {
	console.log(blogArray);
	return (
		<div className='headdiv'>
			<Card class='topcard'>
				<Link to={'blog' + i}>
					<CardActionArea>
						<CardContent class='wct'>
							<div>
								<p class='wc1'>{blogArray.title}</p>
								<p class='wc2'>Some Information about the blog</p>
							</div>
							<div style={{ bottom: '0' }}>
								<div class='circle1'></div>
								<div class='circle2'></div>
								<div class='circle3'></div>
							</div>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default HeadCard;
