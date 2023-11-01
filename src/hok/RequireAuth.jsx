import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
	const { isLoggedIn } = useAuth();

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}

	return children;
};

export { RequireAuth };

RequireAuth.propTypes = {
	children: PropTypes.element.isRequired,
};
