import axios from 'axios';
import React, { Fragment } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Normal = ({ sd, val, k, num }) => {
	let intervalVar;
	const func = (e) => {
		if (k) {
			intervalVar = setInterval(async () => {
				let wt = e.target.currentTime;
				let dur = e.target.duration;
				let dt = Math.round(wt * 100 / dur);
				const final = { step: sd, num: num, val: dt };
				const body = JSON.stringify(final);
				console.log(dt);
				const config = {
					headers: {
						'Content-Type': 'application/json'
					}
				};
				const res = await axios.put('https://mighty-bastion-04883.herokuapp.com/api/progress', body, config);
			}, 1000);
		}
	};

	return (
		<Fragment>
			<p className='chtext'>{val.title}</p>
			{val.audio ? (
				<Fragment>
					<AudioPlayer src={val.audio} onPlay={(e) => console.log('onPlay')} />
				</Fragment>
			) : (
				''
			)}
			{val.description ? (
				<Fragment>
					<div style={{ height: '15px' }} />
					<div className='cntext'>{val.description}</div>
				</Fragment>
			) : (
				''
			)}
			{val.img ? (
				<Fragment>
					<div style={{ height: '15px' }} />
					<img src={val.img} className='courseimg' />
				</Fragment>
			) : (
				''
			)}
			{val.video ? (
				<Fragment>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<video
							poster={val.thumbnail}
							className='coursevideo'
							controls
							onPlay={(e) => {
								func(e);
							}}
							onPause={(e) => {
								clearInterval(intervalVar);
							}}
						>
							<source src={val.video} />
						</video>
					</div>
				</Fragment>
			) : (
				''
			)}
			<br />
		</Fragment>
	);
};

export default Normal;
