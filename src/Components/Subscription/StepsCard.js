import React from 'react';

const StepsCard = ({ imgLink, children }) => {
	return (
		<div class='sc'>
			<img src={imgLink} class='sci' />
			<p class='sctext'>{children}</p>
		</div>
	);
};

export default StepsCard;
