import React, { useState, useEffect } from 'react';
import StepCard from './StepCard';
import './Step.css';

const SixStep = () => {
	return (
		<div class='stepcard'>
			<div class='free1'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509657/All%20Course%20BG/STEPS-01_ggejtm.jpg"
					to='s0'
					text="Emotional Awareness"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509668/All%20Course%20BG/STEPS-02_wpixkd.jpg"
					to='s1'
					text="Uncertainty: Worry And Anxiety"
				/>
			</div>
			<div class='free1'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509682/All%20Course%20BG/STEPS-03_gqq9ff.jpg"
					to='s2'
					text="LEARNING TO SELF SOOTHE"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509696/All%20Course%20BG/STEPS-04_hi8x5c.jpg"
					to='s3'
					text="CHANGING UNHEALTHY COPING BEHAVIOURS"
				/>
			</div>
			<div class='free1'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509723/All%20Course%20BG/STEPS-05_rmpvjf.jpg"
					to='s4'
					text="SLEEP BETTER"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://res.cloudinary.com/adarshsingh/image/upload/v1627509751/All%20Course%20BG/STEPS-06_gqmbtr.jpg"
					to='profile'
					text="Your Personal Plan"
				/>
			</div>
		</div>
	);
};

export default SixStep;
