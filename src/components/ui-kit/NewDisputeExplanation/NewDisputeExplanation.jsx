import React from 'react';
import PropTypes from 'prop-types';

import './NewDisputeExplanation.css';

export const NewDisputeExplanation = ({
	newDisputeText,
	handleNewDisputeTextChange,
}) => (
	<textarea
		value={newDisputeText}
		className="new-dispute-explanation__text"
		name="newDisputeText"
		minLength={25}
		maxLength={1000}
		onChange={handleNewDisputeTextChange}
		required
	/>
);

NewDisputeExplanation.defaultProps = {
	newDisputeText: '',
};
NewDisputeExplanation.propTypes = {
	newDisputeText: PropTypes.string,
	handleNewDisputeTextChange: PropTypes.func.isRequired,
};
