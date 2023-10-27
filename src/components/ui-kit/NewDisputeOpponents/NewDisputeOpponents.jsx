import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeOpponents.css';
import { NewDisputeOpponentsModal } from './NewDisputeOpponentsModal/NewDisputeOpponentsModal';

// Временные решения
const exampleOpponents = [
	'Бурнасова Анастасия',
	'Погребнов Константин',
	'Мокрова Алена',
	'Савинова Даша',
	'Екатерина Ильина',
	'Роман Островский',
	'Андрей Дочкин',
	'Евдокимов Сергей',
	'Мартьянова Светлана',
	'Рачеев Максим',
	'Шполянская Ольга',
	'Кознов Алексей',
	'Галиаскаров Артур',
	'Ефимова Екатерина',
	'Жеребцов Алексей',
	'Кричун Анастасия',
	'Лапина Виктория',
	'Рудова Алёна',
	'Макивоз Кирилл',
];

export const NewDisputeOpponents = ({
	initialOpponents = exampleOpponents, // Стейт всех возможных
	selectedOpponents = [], // Стейт уже выбранных
	handleSetSelectedOpponents, // Возвращаем новый стейт выбранных
}) => {
	// Массив возможных опонентов для выбора
	const [possibleOpponents, setPossibleOpponents] = useState(initialOpponents);
	// Модалка выбора оппонента
	const [chooseOpponentModal, setChooseOpponentModal] = useState(false);
	// Промежуточный стейт показа оппонентов
	const [searchOpponent, setSearchOpponent] = useState([]);
	// Стейт инпута оппонентов
	const [opponentsInput, setOpponentsInput] = useState({});

	// Открытие модалки с выбором опонента
	const handleOpponentsInput = (evt) => {
		const { name, value } = evt.target;
		setOpponentsInput((prev) => ({ ...prev, [name]: value }));
		if (!value) {
			setChooseOpponentModal(false);
			return;
		}
		setChooseOpponentModal(true);
		const findUser = possibleOpponents.filter((item) =>
			item.toLowerCase().includes(value.toLowerCase())
		);
		findUser.sort();
		setSearchOpponent(findUser);
	};
	// Модалка по стрелке
	const showHidePossibleOpponents = () => {
		setSearchOpponent(possibleOpponents.sort());
		setOpponentsInput(''); // Очищаем инпут
		setChooseOpponentModal(!chooseOpponentModal);
	};
	// Закрыть модальное окно с выбором оппонентов
	const handleCloseOpponentsModal = () => {
		setOpponentsInput(''); // Очищаем инпут
		setChooseOpponentModal(false); // Закрываем модалку
		document.getElementById('new-dispute-opponents__input').focus(); // Устанавливаем фокус на инпуте для дальнейшего выбора
	};
	// Добавить оппонента
	const handleAddOpponent = (item) => {
		setPossibleOpponents(possibleOpponents);
		handleSetSelectedOpponents([...selectedOpponents, item]); // обновляем стейт выбранных оппонентов
		const forPossible = [...possibleOpponents];
		forPossible.splice(possibleOpponents.indexOf(item), 1); // Фильтруем стейт "Возможных" оппонентов (стейт для модалки)
		setPossibleOpponents(forPossible); // Обновляем стейт "возможных"
		handleCloseOpponentsModal();
	};
	// Удалить оппонента из выбранных
	const handleDeleteOpponent = (item) => {
		const updatedList = [...selectedOpponents];
		updatedList.splice(selectedOpponents.indexOf(item), 1); // фильтруем стейт выбранных
		handleSetSelectedOpponents(updatedList); // Обновляем стейт
		setPossibleOpponents([...possibleOpponents, item]); // Возвращаем оппонента в стейт "возможных"
	};

	return (
		<div
			className={`new-dipute-opponents__choice ${
				chooseOpponentModal && 'new-dipute-opponents__choice_opened'
			}`}
		>
			{/* Выбранные опоненты */}
			{selectedOpponents && selectedOpponents.length > 0
				? selectedOpponents.map((item) => (
						<div className="new-dispute-opponents__selected-item">
							<div className="new-dispute-opponents__selected-name">{item}</div>
							<button
								className="new-dispute-opponents__selected-button"
								type="button"
								alt="Удалить оппонента"
								onClick={() => handleDeleteOpponent(item)}
							/>
						</div>
				  ))
				: null}
			<div className="new-dispute-opponents__input-frame">
				<div className="new-dispute-opponents__input-section">
					<input
						id="new-dispute-opponents__input"
						className="new-dispute-opponents__input"
						name="opponents"
						value={opponentsInput.opponents || ''}
						type="text"
						onChange={handleOpponentsInput}
					/>
				</div>
				<button
					className={`new-dispute-opponents__button ${
						chooseOpponentModal && 'new-dispute-opponents__button_rotate'
					}`}
					type="button"
					alt="Показать список возможных оппонентов"
					onClick={showHidePossibleOpponents}
				/>
			</div>
			{/* Модалка выбор оппонента */}
			<NewDisputeOpponentsModal
				searchOpponent={searchOpponent}
				chooseOpponentModal={chooseOpponentModal}
				handleAddOpponent={handleAddOpponent}
				handleCloseOpponentsModal={handleCloseOpponentsModal}
			/>
		</div>
	);
};

NewDisputeOpponents.propTypes = {
	initialOpponents: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectedOpponents: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleSetSelectedOpponents: PropTypes.func.isRequired,
};
