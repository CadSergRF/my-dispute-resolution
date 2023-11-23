import PropTypes from 'prop-types';
import React from 'react';
import './Menu.css';
import Button from '../Button/Button';

function Menu({ isOpen, firstButton, secondButton }) {
	return (
		isOpen && (
			<nav className="menu">
				<ul className="menu__links">
					<div className="triangle" />
					<li className="menu__link-item">{firstButton}</li>
					<li className="menu__link-item">{secondButton}</li>
				</ul>
			</nav>
		)
	);
}

export default Menu;
Menu.propTypes = {
	isOpen: PropTypes.bool,
	firstButton: PropTypes.element,
	secondButton: PropTypes.element,
};

Menu.defaultProps = {
	isOpen: false,
	firstButton: (
		<Button
			size="small"
			label="Сменить пароль"
			color="transperent"
			type="button"
			before="changePassword"
		/>
	),
	secondButton: (
		<Button
			size="small"
			label="Выйти"
			color="transperent"
			type="button"
			before="exit"
		/>
	),
};
