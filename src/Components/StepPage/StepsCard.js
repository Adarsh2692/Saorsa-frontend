import React from 'react';

const StepsCard = ({ imgLink, children }) => {
	return (
		<div class='sc'>
			<div>
				<img src={imgLink} class='sci' />
			</div>
			<div>
				<p class='sctext'>{children}</p>
			</div>
		</div>
	);
};

export default StepsCard;
