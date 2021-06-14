import axios from 'axios';
import React, { useState } from 'react';
import { Fragment } from 'react';
import './Stats.css';

const Stats = () => {
	const [users, setUsers] = useState();
	const [r, setR] = useState(0);
	useState(() => {
		const getRes = async () => {
			const res = await axios.get(
				'https://mighty-bastion-04883.herokuapp.com/api/user/all'
			);
			await setUsers(res.data);
			await setR(1);
		};
		getRes();
	});
	return (
		<div className='dataContainer'>
			<div className='dataBox'>
				<div className='dataHeading'>Total Users</div>
				<div className='dataNum'>
					{r == 1 ? <Fragment>{users.length}</Fragment> : 'loading...'}
				</div>
			</div>
			<div className='dataBox'>
				<div className='dataHeading'>Some Data</div>
				<div className='dataNum'>12345</div>
			</div>
			<div className='dataBox'>
				<div className='dataHeading'>Some Data</div>
				<div className='dataNum'>12345</div>
			</div>
		</div>
	);
};

export default Stats;
