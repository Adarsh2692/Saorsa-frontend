import React, { useState, useEffect } from 'react';
import StepCard from './StepCard';
import './Step.css';

const SixStep = () => {
	return (
		<div class='stepcard'>
			{/* <div class='free1'>
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
			</div> */}
			<div class='free1'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1635924862/Step_1_Emotional_Awareness_Thumbnail_i5e0jn.png'
					to='s0'
					text='Emotional Awareness'
				/>
			</div>
			<div class='free2'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1635924862/Step_2_Understanding_Worry_anxiety_and_Uncertainty_Thumbnail_gkib5o.png'
					to='s1'
					text='Uncertainty: Worry And Anxiety'
				/>
			</div>
			<div class='free1'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1635924862/Step_3_Learning_to_self_soothe_thumbnail_zgpp3l.png'
					to='s2'
					text='LEARNING TO SELF SOOTHE'
				/>
			</div>
			<div class='free2'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1635924861/Step_4_unhelpful_coping_thumbnail_j0gpii.png'
					to='s3'
					text='CHANGING UNHEALTHY COPING BEHAVIOURS'
				/>
			</div>
			<div class='free1'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1635924861/Step_5_mental_wellbeing_thumbnail_rxrdop.png'
					to='s4'
					text='SLEEP BETTER'
				/>
			</div>
			<div class='free2'>
				<StepCard
					img='https://res.cloudinary.com/adarshsingh/image/upload/v1627509751/All%20Course%20BG/STEPS-06_gqmbtr.jpg'
					to='profile'
					text='Your Personal Plan'
				/>
			</div>
		</div>
	);
};

export default SixStep;
