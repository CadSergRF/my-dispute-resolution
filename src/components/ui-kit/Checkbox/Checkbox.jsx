import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, checked, onChange }) {
	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className="checkbox-input"
				checked={checked}
				onChange={onChange}
				id={label}
			/>
			<label htmlFor={label} className="checkbox-label">
				<span className={`checkbox-custom ${checked ? 'checked' : ''}`} />
				{label}
			</label>
		</div>
	);
}

Checkbox.defaultProps = {
	checked: false,
	onChange: undefined,
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Checkbox;
