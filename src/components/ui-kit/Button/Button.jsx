import React from 'react';

import './Button.css';

import PropTypes from 'prop-types';

function Button({
	label,
	type,
	onClick,
	size,
	disabled,
	color,
	before,
	backgroundColor,
}) {
	const props = {
		disabled,
		onClick,
	};

	return (
		<button
			{...props}
			type={type}
			className={[
				`button button_size_${size}
				 button_color_${color}
				  ${
						before && color === 'transperent'
							? `button_before_type_${before} button_content_start`
							: ''
					}
					${disabled ? 'button_disabled_true' : ''}
				`,
			]}
			style={backgroundColor && { backgroundColor }}
		>
			{label}
		</button>
	);
}
Button.defaultProps = {
	type: 'button',
	size: 'large',
	color: 'blueLagoon',
	before: '',
	onClick: undefined,
	disabled: false,
	backgroundColor: null,
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
	color: PropTypes.oneOf([
		'downy',
		'blueLagoon',
		'blueLagoon-inverted',
		'transperent',
	]),
	before: PropTypes.oneOf(['edit', 'exit', 'cancel', 'changePassword', '']),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'mlarge']),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	backgroundColor: PropTypes.string,
};

export default Button;
