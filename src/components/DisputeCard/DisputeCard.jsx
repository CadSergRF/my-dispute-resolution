import React, { useState } from 'react';
import './DisputeCard.css';
import PropTypes from 'prop-types';

// import { useLocation } from 'react-router-dom';
import FileList from '../ui-kit/FileList/FileList';
import Menu from '../ui-kit/Menu/Menu';
import Button from '../ui-kit/Button/Button';

function DisputeCard({
	handleDeleteDispute,
	handleChangeDispute,
	creator,
	description,
	status,
	closed_at: closedAt,
	created_at: CreatedAt,
	files,
	id,
	onClick,
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// const location = useLocation();
	// console.log(location);

	const statusInterface = {
		closed: 'Решено',
		not_started: 'Не рассмотрено',
		started: 'В рассмотрении',
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function handleClick(evt) {
		if (evt.target) {
			onClick(id);
		}
	}

	function handleKeyDown(evt) {
		if (evt.key === 'Enter') {
			handleClick(evt);
		}
	}

	return (
		<div className="dispute-card">
			<div className="dispute-card__container">
				<div
					className={[
						`dispute-card__status dispute-card__status_type_${status}`,
					]}
				>
					{statusInterface[status]}
				</div>
				<div
					className="dispute-card__content"
					onClick={handleClick}
					onKeyDown={handleKeyDown}
					role="link"
					tabIndex="0"
				>
					<div className="dispute-card__header">
						<h2 className="dispute-card__title">{`${creator} ${CreatedAt}`}</h2>
						{status === 'closed' ? (
							<p className="dispute-card__closed-time">{`Решено: ${closedAt}`}</p>
						) : (
							''
						)}
					</div>
					<p className="dispute-card__text">{description}</p>
					<FileList files={files} />
				</div>
				{/* попап добавлю, когда пройдёт ревью менюшки от Кати */}
				<button onClick={toggleMenu} className="dispute-card__option">
					<div className="dispute-card__option-container">
						<Menu
							isOpen={isMenuOpen}
							firstButton={
								<Button
									size="small"
									label="Редактировать"
									color="transperent"
									type="button"
									before="edit"
									onClick={() => handleChangeDispute(id)}
								/>
							}
							secondButton={
								<Button
									size="small"
									label="Отменить обращение"
									color="transperent"
									type="button"
									before="cancel"
									onClick={() => handleDeleteDispute(id)}
								/>
							}
						/>
					</div>

					{}
				</button>
			</div>
		</div>
	);
}

DisputeCard.propTypes = {
	id: PropTypes.number.isRequired,
	status: PropTypes.oneOf(['closed', 'started', 'not_started']).isRequired,
	creator: PropTypes.shape({
		email: PropTypes.string,
		id: PropTypes.number,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		phone_number: PropTypes.string,
		role: PropTypes.string,
	}).isRequired,
	description: PropTypes.string.isRequired,
	created_at: PropTypes.string.isRequired,
	handleDeleteDispute: PropTypes.func,
	handleChangeDispute: PropTypes.func,
	closed_at: PropTypes.string,
	files: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func.isRequired,
};
DisputeCard.defaultProps = {
	closed_at: '',
	files: [],
	handleDeleteDispute: undefined,
	handleChangeDispute: undefined,
};

export default DisputeCard;
