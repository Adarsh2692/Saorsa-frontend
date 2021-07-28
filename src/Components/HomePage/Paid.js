import React from 'react';
import './Paid.css';
import PaidCard from './PaidCard';

const Paid = () => {
	return (
		<div class='paidcards'>
			<PaidCard
				txt='RELAXATION'
				image='https://res.cloudinary.com/adarshsingh/image/upload/v1627509946/All%20Course%20BG/SITE-03_s0ehty.jpg'
			/>
			<PaidCard
				txt='MINDFULNESS'
				image='https://res.cloudinary.com/adarshsingh/image/upload/v1627509974/All%20Course%20BG/SITE-04_zya7av.jpg'
			/>
			<PaidCard
				txt='SLEEP'
				image='https://res.cloudinary.com/adarshsingh/image/upload/v1627509998/All%20Course%20BG/SITE-05_swvqch.jpg'
			/>
			<PaidCard
				txt='DEPRESSION'
				image='https://res.cloudinary.com/adarshsingh/image/upload/v1627509911/All%20Course%20BG/SITE-02_iyr99g.jpg'
			/>
			<PaidCard
				txt='ANXIETY & STRESS'
				image='https://res.cloudinary.com/adarshsingh/image/upload/v1627510040/All%20Course%20BG/SITE-06_xyakdq.jpg'
			/>
		</div>
	);
};

export default Paid;
