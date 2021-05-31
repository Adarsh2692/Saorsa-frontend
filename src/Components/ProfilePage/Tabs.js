import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Line, Bar } from "react-chartjs-2";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
			style={{ background: "#09386F" }}
		>
			{value === index && (
				<Box p={3} style={{ borderRadius: "2rem", background: "white" }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100%",
		backgroundColor: "grey",
	},
	tab1: {
		[theme.breakpoints.down("xs")]: {
			maxWidth: "100%",
			width: "100%",
		},
	},
}));

export default function ScrollableTabsButtonAuto() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
					style={{ borderRadius: "10px", backgroundColor: "transparent" }}
					varient="fullWidth"
				>
					<Tab className="tab1" label="Progress" {...a11yProps(0)} />
					<Tab className="tab2" label="Mood Report" {...a11yProps(1)} />
					<Tab className="tab3" label="Your Plan" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<div style={{ background: "#09386F", height: "1rem" }}></div>
			<TabPanel value={value} index={0}>
				<div>
					<img
						src="https://www.r-graph-gallery.com/piechart-ggplot2_files/figure-html/thecode3-1.png"
						style={{
							height: "auto",
							width: "50%",
							marginLeft: "auto",
							marginRight: "auto",
							display: "block",
						}}
					/>
					<Bar
						data={{
							labels: [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday",
								"Saturday",
								"Sunday",
							],
							datasets: [
								{
									label: "Mood chart",
									data: [1, 2, 4, 2, 3, 4, 2, 3, 4, 4, 2, 1, 2, 4, 2, 3, 4, 2],
								},
							],
						}}
						options={{
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZero: "true",
										},
									},
								],
							},
						}}
					/>
				</div>
				<div style={{ height: "100px" }}></div>
				<div
					style={{
						height: "auto",
						width: "auto",
						background: "grey",
						border: "solid",
						textAlign: "center",
						color: "white",
					}}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					vero dolorem odio, nisi quam ad distinctio! Deserunt cum dolorum
					cumque dignissimos voluptatem maiores doloribus impedit quia minus?
					Exercitationem, animi dolore.
				</div>
			</TabPanel>
			<TabPanel value={value} index={1} style={{ background: "#09386F" }}>
				<Line
					data={{
						labels: [
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
							"Date and time",
						],
						datasets: [
							{
								label: "Mood chart",
								data: [1, 2, 4, 2, 3, 4, 2, 3, 4, 4, 2, 1, 2, 4, 2, 3, 4, 2, 5],
								fill: false,
								borderColor: "blue",
							},
						],
					}}
					options={{
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: "true",
									},
								},
							],
						},
					}}
				/>
				{/* <Card style={{ background: "grey", marginBottom: "10px" }}>
					<CardActionArea>
						<CardContent>You were happy at this date and time</CardContent>
					</CardActionArea>
				</Card>
				<Card style={{ background: "grey", marginBottom: "10px" }}>
					<CardActionArea>
						<CardContent>You were happy at this date and time</CardContent>
					</CardActionArea>
				</Card>
				<Card style={{ background: "grey", marginBottom: "10px" }}>
					<CardActionArea>
						<CardContent>You were happy at this date and time</CardContent>
					</CardActionArea>
				</Card>
				<Card style={{ background: "grey", marginBottom: "10px" }}>
					<CardActionArea>
						<CardContent>You were happy at this date and time</CardContent>
					</CardActionArea>
				</Card> */}
			</TabPanel>
			<TabPanel value={value} index={2}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea ipsa
				sunt tempora, magnam eius vero et eos doloribus! Facere quo explicabo
				tempora aliquid libero animi fugiat quae? Est eos doloribus distinctio
				vitae explicabo temporibus, illum minima quia nisi deleniti alias fugit
				quisquam possimus consequuntur recusandae deserunt expedita sit, eum
				aspernatur quasi officia tenetur necessitatibus? Qui, nam cupiditate
				omnis sequi, quod asperiores fuga labore blanditiis maiores, voluptate
				hic voluptatem adipisci et porro officia quo. Perspiciatis placeat
				ratione et velit quisquam, voluptates atque architecto in beatae quasi
				quaerat doloremque debitis deserunt iure rem facere illo iusto,
				repellendus ipsum. Quaerat, harum earum.
				<div
					style={{
						height: "auto",
						background: "grey",
						border: "solid",
						textAlign: "center",
						color: "white",
					}}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					vero dolorem odio, nisi quam ad distinctio! Deserunt cum dolorum
					cumque dignissimos voluptatem maiores doloribus impedit quia minus?
					Exercitationem, animi dolore.
				</div>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div
					style={{
						height: "auto",
						border: "solid",
						textAlign: "center",
						color: "grey",
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					voluptates repellat mollitia at fugit molestias alias, accusamus sunt
					odio vel, id perspiciatis velit magnam fugiat! Officia vel possimus
					praesentium ducimus incidunt dicta ipsum corporis, voluptates esse
					impedit, non nostrum, dolorum cumque pariatur sit repudiandae culpa
					quam consequuntur aspernatur distinctio numquam? Expedita repudiandae
					necessitatibus eum consequuntur ex quae dicta, molestias dolor?
					Dolorem impedit laudantium nostrum. Qui alias impedit delectus non
					beatae quos eaque omnis ducimus perspiciatis id, eligendi nulla harum
					consequatur. Accusamus, sapiente? Temporibus vitae animi praesentium
					voluptates, quisquam, provident delectus sequi sunt unde laudantium
					porro cupiditate quod eos itaque numquam.
				</div>
				<div
					style={{
						height: "auto",
						background: "grey",
						border: "solid",
						textAlign: "center",
						color: "white",
					}}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					vero dolorem odio, nisi quam ad distinctio! Deserunt cum dolorum
					cumque dignissimos voluptatem maiores doloribus impedit quia minus?
					Exercitationem, animi dolore.
				</div>
			</TabPanel>
		</div>
	);
}
