import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Paid.css';
import { Link } from 'react-router-dom';

const PaidCard = ({ image, txt }) => {
	return (
		<div>
			<Card class='paid'>
				<CardActionArea>
					<Link
						to={
							txt == 'DEPRESSION'
								? 'sc0'
								: txt == 'ANXIETY & STRESS'
								? 'sc1'
								: ''
						}
					>
						<img class='paidimage' src={image} />
						<div class='paidtext'>
							<p class='c1'>{txt}</p>
							<p class='c2'>START YOUR FREE INTRO NOW</p>
							<p class='c3'>
								MUSIC <i class='fas fa-lock'></i>
							</p>
							<p class='c4'>
								EXCERCISE<i class='fas fa-lock'></i>
							</p>
						</div>
					</Link>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default PaidCard;
