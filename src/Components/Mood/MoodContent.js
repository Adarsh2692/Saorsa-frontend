import React, { useState, Fragment, useEffect } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMood } from '../../actions/profile';
import { Redirect } from 'react-router';
import axios from 'axios';

const MoodContent = ({ imgLink, mood, history, addMood }) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	let moodScores = {
		data: {
			Happy: 16,
			Excited: 15,
			Grateful: 14,
			Relaxed: 13,
			Content: 12,
			Tired: 11,
			Unsure: 10,
			Bored: 9,
			Anxious: 8,
			Angry: 7,
			Stressed: 6,
			Sad: 5,
		},
	};
	const btnClick = async (e) => {
		const formData = {
			mood: mood,
			rating: e,
			score: moodScores.data[mood],
		};
		addMood(formData);
		setOpen(false);
	};

	return (
		<Fragment>
			<Card class='moodcard' onClick={handleClick}>
				<CardActionArea>
					<CardMedia image={imgLink} className='moodimage' />
				</CardActionArea>
			</Card>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle align='center'>
					Choose intensity of this mood
					<DialogContent
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						<Button
							variant='contained'
							color='primary'
							style={{ margin: '3px' }}
							onClick={() => {
								btnClick(1);
							}}
						>
							Little
						</Button>
						<Button
							variant='contained'
							color='primary'
							style={{ margin: '3px' }}
							onClick={() => {
								btnClick(2);
							}}
						>
							Average
						</Button>
						<Button
							variant='contained'
							color='primary'
							style={{ margin: '3px' }}
							onClick={() => {
								btnClick(3);
							}}
						>
							Very much
						</Button>
						<Button
							variant='contained'
							color='primary'
							style={{ margin: '3px' }}
							onClick={() => {
								btnClick(4);
							}}
						>
							Extreme
						</Button>
					</DialogContent>
				</DialogTitle>
			</Dialog>
		</Fragment>
	);
};

MoodContent.propTypes = {
	addMood: PropTypes.func.isRequired,
};

export default connect(null, { addMood })(MoodContent);
