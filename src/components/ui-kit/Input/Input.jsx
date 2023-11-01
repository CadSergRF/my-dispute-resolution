import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Input({
	id,
	name,
	label,
	placeholder,
	type,
	value,
	disabled,
	onChange,
	error,
	pattern,
}) {
	const [isPassword, setIsPassword] = useState(true);
	const [itemType, setItemType] = useState(type);

	function handleShowPassword() {
		setIsPassword(!isPassword);
		setItemType(isPassword ? 'text' : 'password');
	}

	return (
		<div className="input">
			<div
				className={
					disabled
						? 'input__box input__box_disabled'
						: 'input__box input__box_active'
				}
			>
				<div className="input__box-with-label">
					<input
						className="input__input"
						id={id}
						name={name}
						placeholder={placeholder}
						type={itemType}
						value={value}
						onChange={onChange}
						disabled={disabled}
						pattern={pattern}
						autoComplete="off"
					/>
					<label htmlFor={id} className="input__label">
						{label}
					</label>
				</div>
				{name === 'Password' && (
					<button
						className={
							isPassword ? 'input__icon input__icon-close-eye' : 'input__icon'
						}
						onClick={handleShowPassword}
						type="button"
					>
						{' '}
					</button>
				)}
			</div>
			<span className="input__error">{error}</span>
		</div>
	);
}

export default Input;
Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password']),
	value: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	pattern: PropTypes.string,
};

Input.defaultProps = {
	id: '',
	name: '',
	label: '',
	placeholder: '',
	type: 'text',
	value: undefined,
	onChange: undefined,
	disabled: false,
	error: '',
	pattern: undefined,
};
