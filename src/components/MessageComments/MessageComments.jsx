import React from 'react';
import './MessageComments.css';
import PropTypes from 'prop-types';
import pdf from '../../Images/FileType-PDF.svg';
import jpg from '../../Images/FileType-JPG.svg';
import png from '../../Images/FileType-PNG.svg';
import zip from '../../Images/FileType-ZIP.svg';

function MessageComments({ name, date, text, files }) {
	const iconFile = { pdf, jpg, png, zip };
	return (
		<div className="message">
			<div className="message__icon">
				<p className="message__icon message__icon_letter">{name[0]}</p>
			</div>
			<div className="message__container">
				<div className="message__heading">
					<h2 className="message__heading message__heading_name">{name}</h2>
					<p className="message__heading message__heading_date">{date}</p>
				</div>
				<p className="message__text">{text}</p>
				<div className="message__list-documents">
					{files.map((file) => (
						<a className="message__document" href={file.linkFile}>
							<img
								className="message__document message__document_icon"
								alt="icon"
								src={iconFile[file.nameFile.split('.')[1]]}
							/>
							<p className="message__document message__document_title">
								{file.nameFile.split('.')[0]}
							</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

MessageComments.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	files: PropTypes.arrayOf(
		PropTypes.shape({
			linkFile: PropTypes.string,
			nameFile: PropTypes.string,
		})
	),
};

MessageComments.defaultProps = {
	name: '',
	date: '',
	text: '',
	files: [{ linkFile: '', nameFile: '' }],
};
export default MessageComments;
