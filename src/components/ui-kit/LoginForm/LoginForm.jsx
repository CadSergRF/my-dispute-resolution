import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
	const [values, setValues] = useState({});

	function handleChange(evt) {
		const { name, value } = evt.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onLogin(values);
	};

	return (
		<section className="auth__container">
			<form className="auth__form" onSubmit={handleSubmit}>
				<h1 className="auth__title">Вход в Concordia</h1>
				<div className="auth__form-input-area">
					<Input
						label="Электронная почта"
						name="email"
						id="userEmail"
						onChange={(evt) => {
							handleChange(evt);
						}}
						placeholder="Электронная почта"
						type="email"
						autocomplete="off"
					/>
					<Input
						label="Пароль"
						name="password"
						id="userPassword"
						onChange={(evt) => {
							handleChange(evt);
						}}
						placeholder="Пароль"
						type="password"
					/>
				</div>
				<Button backgroundColor="blueLagoon" label="Продолжить" type="submit" />
			</form>
		</section>
	);
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
