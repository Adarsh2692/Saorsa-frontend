import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./BCard1.css";

const BCard1 = () => {
	return (
		<div>
			<Card class="bcard1">
				<CardActionArea>
					<img
						class="bcimg1"
						src="https://t4.ftcdn.net/jpg/03/06/45/45/360_F_306454530_PTzMtm7GAiNvVDPBLnfCwH1pGutx1MuH.jpg"
					/>
					<CardContent class="bctxt1">
						<p class="bct1">Group Meditation, New Age Therapy</p>
						<p class="bct2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
							vero!
						</p>
						<div class="kct1"></div>
						<div class="kct2"></div>
						<div class="kct3"></div>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default BCard1;
/*https://t4.ftcdn.net/jpg/03/06/45/45/360_F_306454530_PTzMtm7GAiNvVDPBLnfCwH1pGutx1MuH.jpg*/
