import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './HeadCard.css';
import BlogCard from './BlogCard';

const HeadCard = ({ blogArray }) => {
	console.log(blogArray);
	return (
		<div className='headdiv'>
			<Card class='topcard'>
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
					{/* <CardContent>
						<div class='circle1'></div>
						<div class='circle2'></div>
						<div class='circle3'></div>
					</CardContent> */}
					{/* <CardContent>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<div
								style={{ height: '30px', width: '30px', background: 'black' }}
							></div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: '20%',
								}}
							>
								<div
									style={{ height: '30px', width: '30px', background: 'black' }}
								></div>
								<div
									style={{ height: '30px', width: '30px', background: 'black' }}
								></div>
							</div>
						</div>
					</CardContent> */}
				</CardActionArea>
			</Card>
		</div>
	);
};

export default HeadCard;
