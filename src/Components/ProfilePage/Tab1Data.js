import React, { Fragment } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Tab1Data = ({ progress }) => {
	const percentages = [];
	const progressArray = progress.progressArray;
	let r = 0;
	let i;
	let c1 = '#09386F';
	for (i = 0; i < progressArray.length; i++) {
		percentages.push(progressArray[i].percentage);
		if (progressArray[i].percentage == 0) r = r + 1;
	}

	return (
		<div
			style={{
				marginTop: '40px',
				marginBottom: '40px',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div className='pie'>
				<Doughnut
					data={{
						labels: ['STEP 1', 'STEP 2', 'STEP 3', 'STEP 4', 'STEP 5'],
						datasets: [
							{
								data: [100, 100, 100, 100, 100],
								backgroundColor: [c1, c1, c1, c1, c1],
								borderWidth: 10,
								hoverOffset: 2,
							},
						],
					}}
					options={{
						maintainAspectRatio: false,
						tooltips: {
							callbacks: {
								label: function (tooltipItem, data) {
									var tooltipLabel = data.labels[tooltipItem.index];
									var tooltipPercentage = Math.round(
										percentages[tooltipItem.index]
									);
									return tooltipLabel + ': ' + ' ' + tooltipPercentage + '%';
								},
							},
						},
						title: {
							display: true,
							text: 'Steps Progress',
						},
					}}
				/>
			</div>
			{r != percentages.length && (
				<div style={{ marginTop: '30px', height: '80vh', width: '100%' }}>
					<Bar
						data={{
							labels: ['STEP 1', 'STEP 2', 'STEP 3', 'STEP 4', 'STEP 5'],
							datasets: [
								{
									label: 'Progress Chart',
									data: percentages,
									backgroundColor: [
										'rgba(255, 0, 0, 1)',
										'rgba(54, 162, 235, 1)',
										'rgba(255, 206, 86, 1)',
										'rgba(75, 192, 192, 1)',
										'rgba(153, 102, 255, 1)',
										'rgba(255, 159, 64, 1)',
									],
									borderColor: ['red'],
								},
							],
						}}
						options={{
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZero: true,
											max: 100,
										},
										gridLines: {
											display: false,
										},
									},
								],
								xAxes: [
									{
										gridLines: {
											display: false,
										},
									},
								],
							},
						}}
					/>
					<div style={{ height: '100px' }}></div>
				</div>
			)}
		</div>
	);
};

export default Tab1Data;
