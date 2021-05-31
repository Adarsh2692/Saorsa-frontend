import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Skeleton from 'react-loading-skeleton';
import './Step.css';
import { Link } from 'react-router-dom';

const StepCard = ({ img, to, text }) => {
	return (
		<div>
			<Link to={to}>
				<Card class='free'>
					<CardActionArea>
						{<img class='freeimage' src={img} /> || <Skeleton />}
						<div class='freetext'>
							{<p class='f1'>Step {Number(to[1]) + 1}</p> || <Skeleton />}
							{<p class='f2'>{text}</p> || <Skeleton />}
						</div>
					</CardActionArea>
				</Card>
			</Link>
		</div>
	);
};

export default StepCard;
