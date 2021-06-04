import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Step.css';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const StepCard = ({ img, to, text }) => {
	const [loading, setLoading] = useState(true);
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		let interval = null;
		if (loading) {
			interval = setInterval(async () => {
				setSeconds((seconds) => seconds + 1);
				if (seconds == 1) {
					clearInterval(interval);
					setLoading(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [loading, seconds]);

	return (
		<div>
			{!loading ? (
				<Link to={to}>
					<Card class='free'>
						<CardActionArea>
							<img class='freeimage' src={img} />
							<div class='freetext'>
								<p class='f1'>Step {Number(to[1]) + 1}</p>
								<p class='f2'>{text}</p>
							</div>
						</CardActionArea>
					</Card>
				</Link>
			) : (
				<div className='free'>
					<SkeletonTheme color='#09386f' highlightColor='#496ad1'>
						<Skeleton
							className='freeimage'
							duration={1}
							style={{
								border: 'solid',
								borderColor: '#496ad1',
								borderWidth: '1px',
								borderRadius: '2vw',
							}}
						/>
					</SkeletonTheme>
				</div>
			)}
		</div>
	);
};

export default StepCard;
