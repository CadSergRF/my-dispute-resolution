/* eslint-disable camelcase */
import './App.css';
import React, { useState } from 'react';
// import { useEffect, useState } from "react";
// import { Route, Navigate, Routes, useNavigate, useLocation } from 'react-router-dom';

import NewDisputeForm from '../ui-kit/NewDisputeForm/NewDisputeForm';
import * as userApi from '../../utils/api/user.api';
import * as disputeApi from '../../utils/api/disputes.api';

function App() {
	const [dataState, setDataState] = useState();

	const handleDataState = (data) => {
		setDataState(data);
	};

	const dataComment = {
		dispute_id: 1,
		content: 'Всё как всегда — ну что за безобразие',
		file: dataState,
	};

	const dataLogin = {
		email: 'cadsergrf@ya.ru',
		password: 'disputes1',
	};

	const dataChangePass = {
		new_password: 'disputes_1',
		current_password: 'disputes1',
	};

	// Получить всех пользователей - НЕ РАБОТАЕТ (получаем только текущего)
	const getAllUsers = async () => {
		try {
			const reqData = await userApi.getUsers();
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение текущего пользователя - РАБОТАЕТ
	const getUser = async () => {
		try {
			const reqData = await userApi.getUserInfo();
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение пользователя по Id - НЕ РАБОТАЕТ
	// Можно получить только текущего
	const getUserID = async (id) => {
		try {
			const reqData = await userApi.getUserIdInfo(id);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// LOGIN - РАБОТАЕТ
	const checkLogin = async ({ email, password }) => {
		try {
			const reqData = await userApi.login({ email, password });
			if (reqData) {
				console.log('res Data ', reqData.auth_token);
				localStorage.setItem('token', reqData.auth_token);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// LOGOUT - НЕ РАБОТАЕТ
	// ЧТО В BODY - пустая строка? Ответ сервера Unexpected end of JSON input
	const userLogout = async () => {
		try {
			const reqData = await userApi.logout();
			if (reqData) {
				console.log('res Data ', reqData);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.error('res Error', err);
		}
	};
	// Изменение пароля - НЕ РАБОТАЕТ
	// Ответ сервера Unexpected end of JSON input
	const changePass = async ({ new_password, current_password }) => {
		try {
			const reqData = await userApi.changePassword({
				new_password,
				current_password,
			});
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	// ДИСПУТЫ
	// Получить все диспуты
	const getDisputes = async () => {
		try {
			const reqData = await disputeApi.getDisputes();
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Создать диспут
	const createDisputes = async (data) => {
		// eslint-disable-next-line no-restricted-syntax
		for (const pair of data.entries()) {
			console.log(`${pair[0]}, ${pair[1]}`);
		}
		try {
			const reqData = await disputeApi.createDispute(data);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение диспута по id
	const getDisputeId = async (id) => {
		try {
			const reqData = await disputeApi.getDisputeId(id);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Редактирование диспута по id - Замена
	const editDisputeId = async (id, data) => {
		try {
			const reqData = await disputeApi.editDisputeId(id, data);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Редактирование диспута по id
	const editPatchDisputeId = async (id, data) => {
		try {
			const reqData = await disputeApi.editPatchDisputeId(id, data);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Удаление диспута
	const deleteDisputesId = async (id) => {
		try {
			const reqData = await disputeApi.deleteDisputesId(id);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение комментариев к диспуту по id
	const getComments = async (dispute_id) => {
		try {
			const reqData = await disputeApi.getComments(dispute_id);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение комментариев к диспуту по id
	const createComments = async ({ dispute_id, content, file }) => {
		try {
			const reqData = await disputeApi.createComments({
				dispute_id,
				content,
				file,
			});
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	return (
		<div className="App">
			<p> Empty page</p>
			<div>
				<p>API ПОЛЬЗОВАТЕЛЕЙ</p>
				<div>
					<button
						type="button"
						onClick={() => getAllUsers()}
						style={{ margin: '10px' }}
					>
						Получить всех пользователей
					</button>
					<button
						type="button"
						onClick={() => getUser()}
						style={{ margin: '10px' }}
					>
						Получить пользователя
					</button>
					<button
						type="button"
						onClick={() => getUserID(8)}
						style={{ margin: '10px' }}
					>
						Получить пользователя по ID
					</button>
				</div>
				<div>
					<button
						type="button"
						onClick={() => checkLogin(dataLogin)}
						style={{ margin: '10px' }}
					>
						LOGIN
					</button>
					<button
						type="button"
						onClick={() => userLogout()}
						style={{ margin: '10px' }}
					>
						LOGOUT
					</button>
					<button
						type="button"
						onClick={() => changePass(dataChangePass)}
						style={{ margin: '10px' }}
					>
						Изменить пароль
					</button>
				</div>
			</div>
			<div>
				<p>API DISPUTES</p>
				<button
					type="button"
					onClick={() => getDisputes()}
					style={{ margin: '10px' }}
				>
					Все карточки
				</button>
				<button
					type="button"
					onClick={() => createDisputes(dataState)}
					style={{ margin: '10px' }}
				>
					Создать карточку
				</button>
				<button
					type="button"
					onClick={() => getDisputeId(1)}
					style={{ margin: '10px' }}
				>
					get Id
				</button>
				<button
					type="button"
					onClick={() => editDisputeId(1, dataState)}
					style={{ margin: '10px' }}
				>
					Заменить диспут
				</button>
				<button
					type="button"
					onClick={() => editPatchDisputeId(1, dataState)}
					style={{ margin: '10px' }}
				>
					Редактировать диспут
				</button>
				<button
					type="button"
					onClick={() => deleteDisputesId(2)}
					style={{ margin: '10px' }}
				>
					Удалить диспут
				</button>
				<button
					type="button"
					onClick={() => getComments(1)}
					style={{ margin: '10px' }}
				>
					Получить комментарии
				</button>
				<button
					type="button"
					onClick={() => createComments(dataComment)}
					style={{ margin: '10px' }}
				>
					Добавить комментарии
				</button>
			</div>

			<NewDisputeForm handleDataState={handleDataState} />
		</div>
	);
}

export default App;

// first_name: 'Саня',
// last_name: 'Евдокимов',
// phone_number: '79998887733',
// email: 'cadsergrf@ya.ru',
// password: 'disputes',
