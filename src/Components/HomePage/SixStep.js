import React, { useState, useEffect } from 'react';
import StepCard from './StepCard';
import './Step.css';

const SixStep = () => {
	return (
		<div class='stepcard'>
			<div class='free1'>
				<StepCard
					img="https://drive.google.com/uc?id=18vkosCrFprr72VY9KlgSou8geoLL7nRQ"
					to='s0'
					text="Emotional Awareness"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://drive.google.com/uc?id=1RAtXzo_7NMRKeSrw0u9Xss98-oeWS3L-"
					to='s1'
					text="Uncertainty: Worry And Anxiety"
				/>
			</div>
			<div class='free1'>
				<StepCard
					img="https://drive.google.com/uc?id=1bnpEFD4KYq8nn-CQ-6xXptlbKPTiEEPT"
					to='s2'
					text="LEARNING TO SELF SOOTHE"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://drive.google.com/uc?id=1GUPpaQ6TX7i3u-CScZmpD1y_JPtIGGHY"
					to='s3'
					text="CHANGING UNHEALTHY COPING BEHAVIOURS"
				/>
			</div>
			<div class='free1'>
				<StepCard
					img="https://drive.google.com/uc?id=1v7WpWzaTidh3lWv-UcfsOkrHpz2kCHYc"
					to='s4'
					text="SLEEP BETTER"
				/>
			</div>
			<div class='free2'>
				<StepCard
					img="https://drive.google.com/uc?id=1VJxlhjtYHl9fgWFQ75dVTEhKfavFNM48"
					to='s0'
					text="Your Personal Plan"
				/>
			</div>
		</div>
	);
};

export default SixStep;
