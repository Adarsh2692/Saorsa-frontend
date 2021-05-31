import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./HeadCard.css";

const HeadCard = () => {
	return (
		<div className="headdiv">
			<Card class="topcard">
				<CardActionArea>
					<CardContent class="wct">
						<p class="wc1">Group Meditation, New Age Therapy</p>
						<p class="wc2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
							vero!
						</p>
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default HeadCard;
