import React from 'react';
import './PasswordChangeForm.css';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import Button from '../Button/Button';

const PasswordChangeForm = ({
	disabled,
	statusMessage,
	handleUpdatePassword,
	isOpen,
	onClose,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpdatePassword();
	};

	return (
		<PopupWrapper isOpen={isOpen} type="form" onClose={onClose}>
			<form className="password-edit-form" onSubmit={handleSubmit}>
				<h1 className="password-edit-form__title"> Смена пароля</h1>
				<div className="password-edit-form__inputs">
					<Input
						id="Password"
						name="Password"
						label="Текущий пароль"
						placeholder="Текущий пароль"
						type="password"
						disabled={disabled}
					/>
					<Input
						id="newPassword"
						name="Password"
						label="Новый пароль"
						placeholder="Новый пароль"
						type="password"
						disabled={disabled}
					/>
					<Input
						id="confirmNewPassword"
						name="Password"
						label="Подтвержите новый пароль"
						placeholder="Подтвердите новый пароль"
						type="password"
						disabled={disabled}
					/>
				</div>

				<p
					className={
						disabled
							? 'password-edit-form__list-title disabled'
							: 'password-edit-form__list-title'
					}
				>
					Требования к паролю
				</p>
				<ul
					className={
						disabled
							? 'password-edit-form__list disabled'
							: 'password-edit-form__list'
					}
				>
					<li className="password-edit-form__list-item">
						Буквы только латинского алфавита
					</li>
					<li className="password-edit-form__list-item">Не менее 6 символов</li>
					<li className="password-edit-form__list-item">Цифры</li>
				</ul>
				<span className="password-edit-form__status">{statusMessage}</span>
				<Button
					size="mlarge"
					label="Изменить пароль"
					color="blueLagoon"
					type="submit"
					disabled={disabled}
				/>
			</form>
		</PopupWrapper>
	);
};

PasswordChangeForm.propTypes = {
	statusMessage: PropTypes.string,
	disabled: PropTypes.bool,
	handleUpdatePassword: PropTypes.func,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

PasswordChangeForm.defaultProps = {
	statusMessage: '',
	disabled: false,
	handleUpdatePassword: undefined,
};

export default PasswordChangeForm;
