import React from 'react';
import './Paid.css';
import PaidCard from './PaidCard';

const Paid = () => {
	return (
		<div class='paidcards'>
			<PaidCard
				txt='RELAXATION'
				image='https://drive.google.com/uc?id=1Lox-1PQ10Yu57iWyT9KdjOYfkbXe32cm'
			/>
			<PaidCard
				txt='MINDFULLNESS'
				image='https://drive.google.com/uc?id=11eI65-RdHp0hagj8AmbX7_j1LNc8xJuV'
			/>
			<PaidCard
				txt='SLEEP'
				image='https://drive.google.com/uc?id=1TIvtn4z9wEsOSWZjAoZpoaPDuFa7XZr9'
			/>
			<PaidCard
				txt='DEPRESSION'
				image='https://drive.google.com/uc?id=1rm5LWQQKEfTJ3kpRMWZLiLbsfgAv3FuU'
			/>
			<PaidCard
				txt='ANXIETY & STRESS'
				image='https://drive.google.com/uc?id=1JPT65kzgbjeRQOMlSEp2Bt9ElN2zcl-B'
			/>
		</div>
	);
};

export default Paid;
