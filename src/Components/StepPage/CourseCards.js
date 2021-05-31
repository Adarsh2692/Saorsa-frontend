import React from 'react';
import { Link } from 'react-router-dom';
import StepsCard from './StepsCard';

const CourseCards = ({val, steps}) => {
	return (
		<div class='scc'>
			{val.coursecards.map((courses, j) => {
				return (
					<div>
						{steps.map((step, k) => {
							if (step.name == courses.step) {
								return (
									<div class='scci' key={k}>
										<Link to={'/sc' + courses.p + '/pc' + courses.c}>
											<StepsCard imgLink={step.image}>
												{courses.course}
											</StepsCard>
										</Link>
									</div>
								);
							}
						})}
					</div>
				);
			})}
		</div>
	);
};

export default CourseCards;
