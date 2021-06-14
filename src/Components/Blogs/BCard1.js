import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './BCard1.css';
import { Link } from 'react-router-dom';

const BCard1 = ({ blog, i }) => {
	return (
		<div>
			<Link to={'blog' + i}>
				<Card class='bcard1'>
					<CardActionArea>
						<img class='bcimg1' src={blog.image} />
						<CardContent class='bctxt1'>
							<p class='bct1'>{blog.title}</p>
							<p class='bct2'>{blog.description}</p>
							<div class='kct1'></div>
							<div class='kct2'></div>
							<div class='kct3'></div>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		</div>
	);
};

export default BCard1;
/*https://t4.ftcdn.net/jpg/03/06/45/45/360_F_306454530_PTzMtm7GAiNvVDPBLnfCwH1pGutx1MuH.jpg*/
