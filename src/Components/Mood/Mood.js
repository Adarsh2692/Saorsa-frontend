import React, { useState, Fragment, useEffect } from 'react';
import MoodContent from './MoodContent';
import AppBar from './../AppBar/AppBar';
import './Mood.css';
import Happy from '../../assets/moods/1-01.jpg';
import Excited from '../../assets/moods/2-01.jpg';
import Grateful from '../../assets/moods/3-01.jpg';
import Relaxed from '../../assets/moods/4-01.jpg';
import Content from '../../assets/moods/5-01.jpg';
import Tired from '../../assets/moods/6-01.jpg';
import Unsure from '../../assets/moods/7-01.jpg';
import Bored from '../../assets/moods/8-01.jpg';
import Anxious from '../../assets/moods/9-01.jpg';
import Angry from '../../assets/moods/10-01.jpg';
import Stressed from '../../assets/moods/11-01.jpg';
import Sad from '../../assets/moods/12-01.jpg';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

const Mood = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		let content = document.querySelector('div');
		setLoading(content.complete);
	}, []);
	return (
		<Fragment>
			{loading ? (
				<Loading/>
			) : (
				<div style={{ background: '#09386F', color: 'white' }}>
					<AppBar bg='#09386F' />
					<div style={{ height: '100px' }}></div>
					<p class='headmood'>
						Mood Checker
						<br />
						<p>How are you feeling today?</p>
					</p>
					<div className='moodspace'>
						<MoodContent imgLink={Happy} mood='Happy' />
						<MoodContent imgLink={Excited} mood='Excited' />
						<MoodContent imgLink={Grateful} mood='Grateful' />
						<MoodContent imgLink={Relaxed} mood='Relaxed' />
						<MoodContent imgLink={Content} mood='Content' />
						<MoodContent imgLink={Tired} mood='Tired' />
						<MoodContent imgLink={Unsure} mood='Unsure' />
						<MoodContent imgLink={Bored} mood='Bored' />
						<MoodContent imgLink={Anxious} mood='Anxious' />
						<MoodContent imgLink={Angry} mood='Angry' />
						<MoodContent imgLink={Stressed} mood='Stressed' />
						<MoodContent imgLink={Sad} mood='Sad' />
					</div>
					<div style={{ height: '100px' }}></div>
				</div>
			)}
			<Footer/>
		</Fragment>
	);
};

export default Mood;
