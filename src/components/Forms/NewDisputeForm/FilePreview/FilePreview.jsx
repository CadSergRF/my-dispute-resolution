import React from 'react'
import PropTypes from 'prop-types';
import './FilePreview.css'
import { ImageConfig } from '../config';

const FilePreview = ({ item, index, onDeleteFile }) => {

  const { name, type } = item;
  // Название без расширения
  const pureName = name.split('.').slice(0, -1).join('.')
  // Расширение файла для выбора картинки превью
  const fileType = type.split('/').pop();

  return (
    <div key={`${index}_${name}_${type}`} className="drop-file-preview__item">
      <div className='drop-file-preview__img-wrapper'>
        <button
          className='drop-file-preview__delete'
          type="button"
          aria-label="Кнопка удаления вложенного файла"
          onClick={() => onDeleteFile(item)}
        />
        <img
          className='drop-file-preview__img'
          src={ImageConfig[fileType]}
          alt='Превью по типу файла'
        />
      </div>
      <p className='drop-file-preview__name'>{pureName}</p>
    </div>
  )
}

FilePreview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDeleteFile: PropTypes.func.isRequired,
};

export default FilePreview
