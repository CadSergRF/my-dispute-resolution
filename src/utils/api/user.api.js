/* eslint-disable camelcase */
import { makeRequest } from './requestPattern.api';

// Получение все пользователей - НЕ РАБОТАЕТ (только текущий)
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

// Получение пользователя по id - НЕ РАБОТАЕТ (только текущий)
export const getUserIdInfo = (id) =>
	makeRequest(`/api/users/${id}/`, 'GET', undefined);

// Авторизация - РАБОТАЕТ
export const login = ({ email, password }) =>
	makeRequest('/api/auth/token/login/', 'POST', { email, password });

// Logout - РАБОТАЕТ на костылях
export const logout = () =>
	makeRequest('/api/auth/token/logout/', 'POST', undefined);

// Изменить пароль - РАБОТАЕТ на костылях
export const changePassword = ({ new_password, current_password }) =>
	makeRequest('/api/users/set_password/', 'POST', {
		new_password,
		current_password,
	});
