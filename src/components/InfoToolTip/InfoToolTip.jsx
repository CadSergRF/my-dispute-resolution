import React from 'react';
import PropTypes from 'prop-types';
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import './InfoToolTip.css';

import successLogo from '../../Images/Done.svg';
import unSuccessLogo from '../../Images/Error.svg';

export const InfoToolTip = ({
	isOpen,
	onClose,
	isSuccess,
	doneText,
	errorText,
}) => (
	<PopupWrapper isOpen={isOpen} onClose={onClose} type="info">
		<div className="info-tool-tip__container">
			<img
				className="info-tool-tip__image"
				src={`${isSuccess ? successLogo : unSuccessLogo}`}
				alt="Знак успешности выполнения"
			/>
			<h2 className="info-tool-tip__title">
				{`${isSuccess ? doneText : errorText}`}
			</h2>
		</div>
	</PopupWrapper>
);

InfoToolTip.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	isSuccess: PropTypes.bool.isRequired,
	doneText: PropTypes.string.isRequired,
	errorText: PropTypes.string.isRequired,
};
