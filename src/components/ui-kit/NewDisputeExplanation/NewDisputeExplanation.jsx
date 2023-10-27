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
		maxLength={2000}
		placeholder="Подробно опишите суть конфликта"
		onChange={handleNewDisputeTextChange}
		required
	/>
);

NewDisputeExplanation.propTypes = {
	newDisputeText: PropTypes.string.isRequired,
	handleNewDisputeTextChange: PropTypes.func.isRequired,
};
