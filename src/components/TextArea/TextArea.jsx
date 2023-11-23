import './TextArea.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';

function TextArea({
	name,
	label,
	placeholder,
	value,
	disabled,
	error,
	srartRows,

	// expand
}) {
	const [val, setVal] = useState('');
	const textAreaRef = useRef(null);

	const resizeTextArea = () => {
		textAreaRef.current.style.height = 'auto';
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
	};

	useEffect(resizeTextArea, [val]);

	const handleChange = (e) => {
		setVal(e.target.value);
	};

	return (
		<div className="textarea">
			<label htmlFor="textDescription" className="textarea__label">
				{label}
			</label>
			<div className="textarea__box">
				<textarea
					className="textarea__textarea"
					name={name}
					placeholder={placeholder}
					id="textDescription"
					onChange={handleChange}
					disabled={disabled}
					ref={textAreaRef}
					value={val}
					rows={srartRows}
				>
					{value}
				</textarea>
				<span className="textarea__error">{error}</span>
			</div>
		</div>
	);
}

export default TextArea;
TextArea.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	srartRows: PropTypes.number,
	// expand: PropTypes.bool,
};

TextArea.defaultProps = {
	name: '',
	label: '',
	placeholder: '',
	value: undefined,
	disabled: false,
	error: 'zzzzzzzz',
	srartRows: 2,
	// expand: true,
};
