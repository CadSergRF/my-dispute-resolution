import React from 'react';

import './Button.css';

import PropTypes from 'prop-types';

function Button({
	label,
	type,
	url,
	onClick,
	size,
	disabled,
	backgroundColor,
}) {
	const props = {
		disabled,
		onClick,
	};
	return (
		<button
			// className="each-button more"
			{...props}
			type={type}
			href={url}
			// aria-label="Отображать больше фильмов на странице"
			className={[
				`button button_size_${size} button_color_blue ${
					!!disabled && 'button_disabled_true'
				}`,
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
	url: undefined,
	onClick: undefined,
	disabled: false,
	backgroundColor: null,
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'link', 'reset', 'submit']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	url: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	backgroundColor: PropTypes.string,
};

export default Button;
