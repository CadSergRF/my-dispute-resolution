import React from 'react';
import PropTypes from 'prop-types';
import './ListMessageComments.css';
import MessageComments from '../MessageComments/MessageComments';

function ListMessageComments({ comments }) {
	return (
		<section className="comments">
			{comments.map((comment) => (
				<MessageComments {...comment} />
			))}
		</section>
	);
}
ListMessageComments.propTypes = {
	comments: PropTypes.instanceOf(Array),
};

ListMessageComments.defaultProps = {
	comments: [],
};

export default ListMessageComments;
