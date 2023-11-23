import React from 'react';
import { Link } from 'react-router-dom';
import './LinkApp.css';
import PropTypes from 'prop-types';

function LinkApp({ label, url }) {
	return (
		<Link to={url} className="link-app">
			{label}
		</Link>
	);
}

LinkApp.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
export default LinkApp;
