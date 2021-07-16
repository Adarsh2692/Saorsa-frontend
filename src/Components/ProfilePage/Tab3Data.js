import React, { Fragment } from "react";
import "./Tab3.css";

const Tab3Data = () => {
	return (
		<div
			style={{
				marginTop: "40px",
				marginBottom: "40px",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<p style={{ textAlign: "center", margin: "10px" }}>
				Create your own Mental Health Plan
			</p>
			<div className='maintab3'>
				<div className='smallBox'>
					<p className='tab3header'>
						<dt>External Trigger</dt>
					</p>
					<p className='tab3text'>
						A trigger can be defined as a place, a person , an object or a
						situation. Take a moment and note down your own.
					</p>
				</div>
				<div className='smallBox'>
					<p className='tab3header'>
						<dt>Internal Trigger</dt>
					</p>
					<p className='tab3text'>
						This is when we might start to be aware of our unhealthy thoughts,
						emotions and behaviours. Are you starting to label yourself? Are you
						starting to isolate from others? Note down what is coming up for
						you.
					</p>
				</div>
				<div className='bigBox'>
					<p className='tab3header'>
						<dt>Self Care</dt>
					</p>
					<p className='tab3text'>
						In this section think about the interventions you have learned
						during the emotional regulation course. Refer back to the
						Behavioural Change section and choose what activates you would like
						to do that would ensure you are caring for yourself.
					</p>
				</div>
				<div className='bigBox'>
					<p className='tab3header'>
						<dt>Interventions to help me cope</dt>
					</p>
					<p className='tab3text'>
						List down some of the interventions you have learned throughout the
						course with Saorsa. These include: Acknowledge emotions / Managing
						Uncertainty and Worry / Self Soothe / Changing Unhealthy Behaviour /
						Meditation and Relaxation
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tab3Data;
