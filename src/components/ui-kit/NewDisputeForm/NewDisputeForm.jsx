import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeForm.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import { FilePreview } from '../FilePreview/FilePreview';
import { NewDisputeOpponents } from '../NewDisputeOpponents/NewDisputeOpponents';
import { NewDisputeExplanation } from '../NewDisputeExplanation/NewDisputeExplanation';
import { NewDisputeFileUpload } from '../NewDisputeFileUpload/NewDisputeFileUpload';

const NewDisputeForm = ({
	initialArrayUsers,
	initialSelectedOpponents,
	initialDisputeText,
	handleRequestNewDispute,
	isEditDispute,
}) => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const [selectedOpponents, setSelectedOpponents] = useState([]); // Массив выбранных оппонентов
	const [disputeText, setDisputeText] = useState({}); // Суть конфликта
	const [fileList, setFileList] = useState([]); // Массив файлов для загрузки

	const [isDisable, setIsDisable] = useState(true); // Стейт диза кнопки

	useEffect(() => {
		if (
			disputeText.newDisputeText === undefined ||
			disputeText.newDisputeText.length === 0 ||
			selectedOpponents.length === 0
		) {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
	}, [disputeText, selectedOpponents]);

	useEffect(() => {
		if (initialSelectedOpponents && initialSelectedOpponents.length > 0) {
			setSelectedOpponents(initialSelectedOpponents);
		}
		if (initialDisputeText) {
			setDisputeText({ newDisputeText: initialDisputeText });
		}
	}, [initialDisputeText, initialSelectedOpponents]);

	// Установка стейта выбранных оппонентов
	const handleSetSelectedOpponents = (updateOpponentsList) => {
		setSelectedOpponents(updateOpponentsList);
	};

	// Сохранение значения поля "Суть конфликта" в отдельный стейт
	const handleNewDisputeTextChange = (evt) => {
		const { name, value } = evt.target;
		setDisputeText((prev) => ({ ...prev, [name]: value }));
	};

	// Установка стейта загружаемых файлов
	const updateFileList = (updatedList) => {
		setFileList(updatedList);
	};

	// Удаление файла из массива для загрузки
	const handleDeleteFile = (item) => {
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(item), 1);
		setFileList(updatedList);
	};

	// Формирование данных для отправки на сервер
	const handleSubmit = () => {
		const newDisputeData = new FormData();
		// Добавляем оппонентов
		for (let i = 0; i < selectedOpponents.length; i += 1) {
			newDisputeData.append(`opponent`, selectedOpponents[i].id);
		}
		// Добавляем описание
		newDisputeData.append('description', disputeText.newDisputeText);
		// Добавляем файлы
		for (let i = 0; i < fileList.length; i += 1) {
			newDisputeData.append(`uploaded_files`, fileList[i]);
		}
		// Внешняя функция для отвравки запроса на сервер
		handleRequestNewDispute(newDisputeData);
	};

	return (
		<div className="new-dispute-form">
			<div className="new-dispute-form__container">
				<button
					className="new-dispute-form__goBack"
					type="button"
					aria-label="Кнопка goBack"
					onClick={goBack}
				/>
				{/* Блок выбора оппонентов */}
				<div className="new-dispute-opponents new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper">
						<div className="new-dispute-form__item-title">Оппоненты</div>
						<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
							Один или несколько
						</p>
					</div>
					<NewDisputeOpponents
						initialArrayUsers={initialArrayUsers}
						selectedOpponents={selectedOpponents}
						handleSetSelectedOpponents={handleSetSelectedOpponents}
					/>
				</div>

				{/* Блок с объяснением сути конфликта */}
				<div className="new-dispute-explanation new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper_large">
						<div className="new-dispute-form__item-title">
							Описание конфликта
						</div>
					</div>
					<NewDisputeExplanation
						newDisputeText={disputeText.newDisputeText}
						handleNewDisputeTextChange={handleNewDisputeTextChange}
					/>
				</div>

				{/* Блок рабооты с файлами */}
				{!isEditDispute && (
					<div className="new-dispute-file new-dispute-form__item-wrapper">
						<div className="new-dispute-form__item-title-wrapper_large">
							<h3 className="new-dispute-form__item-title">Прикрепите файлы</h3>
							<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
								Допустимый формат файлов: JPG, PDF
							</p>
						</div>
						<NewDisputeFileUpload
							fileList={fileList}
							updateFileList={updateFileList}
						/>
					</div>
				)}

				{/* Блок кнопки submit'а и выбранных файлов */}
				<div className="new-dispute-footer new-dispute-form__item-wrapper">
					<span />
					<div className="new-dispute-footer__used-zone">
						{!isEditDispute ? (
							<Button
								label="Продолжить"
								onClick={handleSubmit}
								size="mlarge"
								disabled={isDisable}
							/>
						) : (
							<Button
								label="Сохранить изменения"
								onClick={handleSubmit}
								size="mlarge"
								disabled={isDisable}
							/>
						)}

						{/* Отображение загруженных файлов */}
						{!isEditDispute && fileList.length > 0 ? (
							<div className="file-preview">
								{fileList.map((item, index) => (
									<FilePreview
										key={`${item.name}_${item.type}`}
										item={item}
										index={index}
										onDeleteFile={handleDeleteFile}
									/>
								))}
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

NewDisputeForm.defaultProps = {
	initialArrayUsers: [],
	initialSelectedOpponents: [],
	initialDisputeText: '',
	isEditDispute: false,
	handleRequestNewDispute: () => {},
};
NewDisputeForm.propTypes = {
	initialArrayUsers: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	initialSelectedOpponents: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	initialDisputeText: PropTypes.string,
	isEditDispute: PropTypes.bool,
	handleRequestNewDispute: PropTypes.func,
};

export default NewDisputeForm;
