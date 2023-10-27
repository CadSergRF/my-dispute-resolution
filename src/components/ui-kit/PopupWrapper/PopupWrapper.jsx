import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './PopupWrapper.css';

export const PopupWrapper = ({ isOpen, onClose, type, children }) => {
	useEffect(() => {
		if (!isOpen) return undefined;

		// Закрытие о Esc
		const handleESC = (evt) => {
			if (evt.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleESC);
		return () => document.removeEventListener('keydown', handleESC);
	}, [isOpen, onClose]);

	return (
		<div
			className={`popup ${isOpen ? 'popup_opened' : ''}`}
			role="button"
			tabIndex={0}
			onMouseDown={(evt) => evt.target === evt.currentTarget && onClose()}
		>
			<div className="popup__container">
				<button
					className={`popup__close-btn ${
						type === 'form' ? 'popup__close-btn_visible' : ''
					}`}
					type="button"
					aria-label="Кнопка закрытия модального окна"
					onClick={onClose}
				/>
				{children}
			</div>
		</div>
	);
};

PopupWrapper.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['info', 'form']).isRequired,
	children: PropTypes.element.isRequired,
};
