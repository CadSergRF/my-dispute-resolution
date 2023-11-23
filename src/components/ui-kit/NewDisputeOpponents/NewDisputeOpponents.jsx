import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeOpponents.css';
import { NewDisputeOpponentsModal } from './NewDisputeOpponentsModal/NewDisputeOpponentsModal';

import { exampleOpponents } from './default.config';

export const NewDisputeOpponents = ({
	initialOpponentsApi, // Стейт всех возможных
	selectedOpponents, // Стейт уже выбранных
	handleSetSelectedOpponents, // Возвращаем новый стейт выбранных
}) => {
	// Массив возможных опонентов для выбора
	const [possibleOpponents, setPossibleOpponents] = useState(exampleOpponents);
	// Модалка выбора оппонента
	const [chooseOpponentModal, setChooseOpponentModal] = useState(false);
	// Промежуточный стейт показа оппонентов
	const [searchOpponent, setSearchOpponent] = useState([]);
	// Стейт инпута оппонентов
	const [opponentsInput, setOpponentsInput] = useState({});

	// Определяем стейт возможных оппонентов при загрузке компонента
	useEffect(() => {
		if (initialOpponentsApi && initialOpponentsApi.length > 0) {
			// Устанавливаем стейт возможных оппонентов
			setPossibleOpponents(initialOpponentsApi);
		}
	}, [initialOpponentsApi]);

	// Сортировка объекта
	const sortObjOpponents = (dataObj) => {
		dataObj.sort(
			(a, b) =>
				a.last_name.localeCompare(b.last_name) ||
				a.first_name.localeCompare(b.first_name)
		);
		return dataObj;
	};

	// Фильтр стейта по значению инпута ( Фамилия -> Имя)
	const filterObjOpponents = (dataObj, value) => {
		const filtered = dataObj.filter(
			(user) =>
				user.last_name.toLowerCase().includes(value.toLowerCase()) ||
				user.first_name.toLowerCase().includes(value.toLowerCase())
		);
		return filtered;
	};

	// Открытие модалки с выбором опонента
	const handleChangeOpponentsInput = (evt) => {
		const { name, value } = evt.target;
		setOpponentsInput((prev) => ({ ...prev, [name]: value }));
		if (!value) {
			setChooseOpponentModal(false);
			return;
		}
		setChooseOpponentModal(true);
		const findUser = filterObjOpponents(possibleOpponents, value);
		setSearchOpponent(findUser);
	};

	// Модалка по стрелке
	const showHidePossibleOpponents = () => {
		const sortedPossibleUsers = sortObjOpponents(possibleOpponents);
		setSearchOpponent(sortedPossibleUsers);
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
	const handleAddOpponent = (user) => {
		setPossibleOpponents(possibleOpponents);
		handleSetSelectedOpponents([...selectedOpponents, user]); // обновляем стейт выбранных оппонентов
		const updatedList = possibleOpponents.filter((cur) => cur.id !== user.id); // фильтруем стейт выбранных по id
		setPossibleOpponents(updatedList);
		handleCloseOpponentsModal();
	};
	// Удалить оппонента из выбранных
	const handleDeleteOpponent = (user) => {
		const updatedList = selectedOpponents.filter((item) => item.id !== user.id); // фильтруем стейт выбранных
		handleSetSelectedOpponents(updatedList); // Обновляем стейт
		setPossibleOpponents([...possibleOpponents, user]); // Возвращаем оппонента в стейт "возможных"
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
						<div
							key={`${item.first_name} ${item.last_name}`}
							className="new-dispute-opponents__selected-item"
						>
							<div className="new-dispute-opponents__selected-name">
								{`${item.first_name} ${item.last_name}`}
							</div>
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
						onChange={handleChangeOpponentsInput}
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
			<div className="new-dipute-opponents__choice-glue-modal">
				<NewDisputeOpponentsModal
					searchOpponent={searchOpponent}
					chooseOpponentModal={chooseOpponentModal}
					handleAddOpponent={handleAddOpponent}
					handleCloseOpponentsModal={handleCloseOpponentsModal}
				/>
			</div>
		</div>
	);
};

NewDisputeOpponents.defaultProps = {
	initialOpponentsApi: [],
	selectedOpponents: [],
};

NewDisputeOpponents.propTypes = {
	initialOpponentsApi: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	selectedOpponents: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	handleSetSelectedOpponents: PropTypes.func.isRequired,
};
