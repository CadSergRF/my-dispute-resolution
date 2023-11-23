import React from 'react';
import PropTypes from 'prop-types';
import DisputeCard from '../DisputeCard/DisputeCard';
import './DisputeCardList.css';

function DisputeCardList({
	disputesList,
	onClick,
	handleChangeDispute,
	handleDeleteDispute,
}) {
	return (
		<div className="dispute-cardlist">
			{disputesList.length > 0 ? (
				disputesList.map((card) => (
					<DisputeCard
						key={card.id} // Обязательно указывайте уникальный ключ при отображении списков компонентов
						creator={card.creator}
						description={card.description}
						status={card.status}
						closed_at={card.closed_at}
						created_at={card.created_at}
						files={card.files}
						id={card.id}
						onClick={onClick}
						handleChangeDispute={handleChangeDispute}
						handleDeleteDispute={handleDeleteDispute}
					/>
				))
			) : (
				<p>Обращений пока нет</p>
			)}
		</div>
	);
}
DisputeCardList.propTypes = {
	disputesList: PropTypes.arrayOf(
		PropTypes.shape({
			creator: PropTypes.shape({
				email: PropTypes.string,
				id: PropTypes.number,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				phone_number: PropTypes.string,
				role: PropTypes.string,
			}),
			description: PropTypes.string,
			status: PropTypes.string,
			closed_at: PropTypes.string,
			created_at: PropTypes.string,
			files: PropTypes.arrayOf(PropTypes.string), // Если files также является массивом
		})
	),
	onClick: PropTypes.func.isRequired,
	handleChangeDispute: PropTypes.func.isRequired,
	handleDeleteDispute: PropTypes.func.isRequired,
};

DisputeCardList.defaultProps = {
	disputesList: [],
};
export default DisputeCardList;
