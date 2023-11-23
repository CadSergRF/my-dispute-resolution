import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import {
	login,
	logout,
	changePassword,
	getUserInfo,
	// getUserIdInfo,
} from '../utils/api/user.api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [currentUser, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	// роверка авторизации
	const checkAuth = async () => {
		setIsLoading(true);
		if (localStorage.getItem('token')) {
			const userData = await getUserInfo();
			if (userData) {
				setUser(userData);
				setIsLoggedIn(true);
			} else {
				console.log('Ошибка при получении данных пользователя');
				localStorage.removeItem('token');
			}
		}
		setIsLoading(false);
	};
	// LOGIN
	const signin = async (newUser) => {
		setIsLoading(true);
		try {
			const reqData = await login({
				email: newUser.email,
				password: newUser.password,
			});
			if (reqData) {
				localStorage.setItem('token', reqData.auth_token);
				const userData = await getUserInfo();
				setIsLoggedIn(true);
				setUser(userData);
				navigate('disputes');
			}
		} catch (err) {
			console.error('res Error ', err);
		}
		setIsLoading(false);
	};
	// LOGOUT
	const signout = async () => {
		setIsLoading(true);
		try {
			const reqData = await logout();
			if (reqData) {
				setUser({});
				setIsLoggedIn(false);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.error('res Error', err);
		}
		setIsLoading(false);
	};
	// ИЗМЕНЕНИЕ ПАРОЛЯ
	const handleChangePassword = async ({ new_password, current_password }) => {
		try {
			const respChangePass = await changePassword({
				new_password,
				current_password,
			});
			console.log('respChangePass', respChangePass);
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		currentUser,
		isLoggedIn,
		checkAuth,
		signin,
		signout,
		handleChangePassword,
		isLoading,
		setIsLoading,
		isError,
		setIsError,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};
