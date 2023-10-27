import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeOpponentsModal.css';

export const NewDisputeOpponentsModal = ({
	searchOpponent,
	chooseOpponentModal,
	handleAddOpponent,
	handleCloseOpponentsModal,
}) => {
	useEffect(() => {
		if (!chooseOpponentModal) return undefined;
		// Закрытие о Esc
		const handleESC = (evt) => {
			if (evt.key === 'Escape') {
				handleCloseOpponentsModal();
			}
		};
		document.addEventListener('keydown', handleESC);
		return () => {
			document.removeEventListener('keydown', handleESC);
		};
	}, [chooseOpponentModal, handleCloseOpponentsModal]);

	return (
		<div
			className={`new-dispute-opponents__input-modal 
      ${chooseOpponentModal && 'new-dispute-opponents__input-modal_opened'}`}
		>
			{searchOpponent.length > 0 ? (
				searchOpponent.map((item) => (
					<button
						className="new-dispute-opponents__modal-item"
						onClick={() => handleAddOpponent(item)}
						alt="Добавить оппонента"
					>
						{item}
					</button>
				))
			) : (
				<button
					className="new-dispute-opponents__modal-item new-dispute-opponents__modal-item_not-found"
					alt="Оппоненты не найдены"
				>
					Оппоненты не найдены
				</button>
			)}
		</div>
	);
};

NewDisputeOpponentsModal.propTypes = {
	searchOpponent: PropTypes.arrayOf(PropTypes.string).isRequired,
	chooseOpponentModal: PropTypes.bool.isRequired,
	handleAddOpponent: PropTypes.func.isRequired,
	handleCloseOpponentsModal: PropTypes.func.isRequired,
};
