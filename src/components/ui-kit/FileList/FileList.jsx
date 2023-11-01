import React from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './config'; // Импортируйте конфигурацию изображений
import './FileList.css';

function FileList({ files, type }) {
	return (
		<div className={`files files_type_${type}`}>
			{files.map((file) => {
				const nameWithFormat = file.split('/').pop();
				const format = nameWithFormat.split('.').pop();
				const name = nameWithFormat.split('.')[0]; // Извлекаем только название файла
				const downloadLink = files;
				return (
					<a
						className="file"
						href={downloadLink}
						target="_blank"
						rel="noreferrer"
						// я не представляю, что ещё можно использовать в качестве уникального ключа в этом случае
						key={file}
					>
						<img className="file__icon" src={ImageConfig[format]} alt="File" />
						<p className="file__name">{name}</p>
					</a>
				);
			})}
		</div>
	);
}
FileList.propTypes = {
	files: PropTypes.arrayOf(PropTypes.string),
	type: PropTypes.PropTypes.oneOf(['dispute', 'message']),
};
FileList.defaultProps = {
	files: [],
	type: 'dispute',
};

export default FileList;
