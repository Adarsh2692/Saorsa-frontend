import React from 'react';
import AppBar from '../AppBar/AppBar';
import Grid from '@material-ui/core/Grid';
import StepsCard from './StepsCard';

const Step1 = () => {
	return (
		<div style={{ background: '#194a9a', height: 'auto' }}>
			<AppBar bg='#09386F' />
			<div>
				<img
					src='https://i.ytimg.com/vi/J0BPoofmPkw/maxresdefault.jpg'
					style={{ width: '100%', height: '30rem' }}
				/>
			</div>
			<div
				style={{ position: 'absolute', marginTop: '-13.5rem', width: '100%' }}
			>
				<p style={{ color: 'white', marginLeft: '3vw' }}>
					<h3>Step 1</h3>
					<h2>EMOTIONAL AWARENESS</h2>
				</p>
			</div>
			<div
				style={{
					marginTop: '-7rem',
					height: 'auto',
					width: '96%',
					background: '#09386F',
					marginLeft: 'auto',
					marginRight: 'auto',
					position: 'relative',
				}}
			>
				<div style={{ height: '2rem' }}></div>
				<p
					style={{
						fontSize: '1.3rem',
						textAlign: 'left',
						width: '96%',
						marginLeft: '2vw',
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
					excepturi accusantium perspiciatis corrupti, at repellendus natus
					aperiam veniam id esse tempore eaque nam, placeat similique qui,
					perferendis obcaecati. Vel, laborum tenetur recusandae velit
					voluptatum non, aspernatur atque, sequi consectetur vero magni dolorem
					voluptatibus adipisci mollitia nulla. Ullam sint, architecto pariatur,
					voluptatibus error quibusdam sit ad voluptas, facilis libero tenetur
					dolor reprehenderit explicabo corporis. Saepe architecto culpa soluta
					aliquid illum pariatur aliquam sequi eligendi nostrum sunt temporibus,
					odit officiis voluptas accusamus est! Beatae error id in minima
					voluptatibus, nesciunt tempore ducimus doloremque sequi, nam
					temporibus vitae corporis, asperiores iusto ab maiores!
				</p>
				<div style={{ height: '2rem' }}></div>
				<Grid
					container
					spacing={3}
					alignItems='center'
					justify='center'
					align='center'
				>
					<Grid item xs>
						<StepsCard imgLink='https://cdn.kqed.org/wp-content/uploads/sites/23/2019/11/emotion-scientists.jpg'>
							Emotional Regulation
						</StepsCard>
					</Grid>
					<Grid item xs>
						<StepsCard imgLink='https://cdn.kqed.org/wp-content/uploads/sites/23/2019/11/emotion-scientists.jpg'>
							Emotions and their values
						</StepsCard>
					</Grid>
					<Grid item xs>
						<StepsCard imgLink='https://cdn.kqed.org/wp-content/uploads/sites/23/2019/11/emotion-scientists.jpg'>
							Acknowledge Accept attend
						</StepsCard>
					</Grid>
					<Grid item xs>
						<StepsCard imgLink='https://cdn.kqed.org/wp-content/uploads/sites/23/2019/11/emotion-scientists.jpg'>
							Emotional Regulation
						</StepsCard>
					</Grid>
				</Grid>
				<div style={{ height: '5rem' }}></div>
			</div>
			<div style={{ height: '100px' }}></div>
		</div>
	);
};

export default Step1;
