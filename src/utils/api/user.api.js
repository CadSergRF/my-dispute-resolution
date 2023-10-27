/* eslint-disable camelcase */
import { makeRequest } from './requestPattern.api';

// Получение все пользователей - НЕ РАБОТАЕТ
export const getUsers = () => makeRequest(`/api/users/`, 'GET', undefined);

// Регистрация - временно доступно - РАБОТАЕТ
export const register = ({
	first_name,
	last_name,
	phone_number,
	email,
	password,
}) =>
	makeRequest('/api/users/', 'POST', {
		first_name,
		last_name,
		phone_number,
		email,
		password,
	});

// Получение пользователя - РАБОТАЕТ
export const getUserInfo = () =>
	makeRequest('/api/users/me/', 'GET', undefined);

// Получение пользователя по id - НЕ РАБОТАЕТ
export const getUserIdInfo = (id) =>
	makeRequest(`/api/users/${id}/`, 'GET', undefined);

// Авторизация - РАБОТАЕТ
export const login = ({ email, password }) =>
	makeRequest('/api/auth/token/login/', 'POST', { email, password });

// Logout - ЧТО В BODY - пустая строка? Ответ сервера Unexpected end of JSON input
export const logout = () =>
	makeRequest('/api/auth/token/logout/', 'POST', undefined);

// Изменить пароль - Ответ сервера Unexpected end of JSON input
export const changePassword = ({ new_password, current_password }) =>
	makeRequest('/api/users/set_password/', 'POST', {
		new_password,
		current_password,
	});
