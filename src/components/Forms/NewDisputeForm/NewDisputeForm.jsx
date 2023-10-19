import React, { useRef, useState } from 'react';

import './css/FormStyle.css';
import './css/OpponentsSection.css';
import './css/ExplanationSection.css';
import './css/FileSection.css';
import './css/FooterSection.css';

import uploadImg from '../../../Images/Logo_upload.svg';
import FilePreview from './FilePreview/FilePreview';

const NewDisputeForm = () => {

  const fileRef = useRef(null);
  const maxFilesSize = 10; // Максимальный объем всех загружаемых файлов в Мб
  const maxQuantity = 4; // Ограничение количества файлов для загрузки

  const [disputeText, setDisputeText] = useState({}); // Суть конфликта
  const [fileList, setFileList] = useState([]); // Массив файлов для загрузки
  const [freeSize, setFreeSize] = useState(10); // Объем свободного места
  const [isErrorSize, setIsErrorSize] = useState(false); // Ошибка: превышение maxFilesSize
  const [isErrorQuantity, setIsErrorQuantity] = useState(false); // Ошибка: превышено допустимое количество файлов

  const [selectedOpponents, setSelectedOpponents] = useState([]); // Массив выбранных опонентов
  const [chooseOpponentModal, setChooseOpponentModal] = useState(false); // Модалка выбора оппонента
  const [possibleOpponents, setPossibleOpponents] = useState([]); // Массив возможных опонентов для выбора
  const [opponentsInput, setOpponentsInput] = useState({}) // Стейт инпута оппонентов

  // Временные решения
  const ourCommandYandex = [
    'Бурнасова Анастасия',
    'Погребнов Константин',
    'Мокрова Алена',
    'Савинова Даша',
    'Екатерина Ильина',
    'Роман Островский',
    'Андрей Дочкин',
    'Евдокимов Сергей',
    'Мартьянова Светлана',
    'Рачеев Максим',
    'Шполянская Ольга',
    'Кознов Алексей',
    'Галиаскаров Артур',
    'Ефимова Екатерина',
    'Жеребцов Алексей',
    'Кричун Анастасия',
    'Лапина Виктория',
    'Рудова Алёна',
    'Макивоз Кирилл'
  ]

  const handleSetSelectedOpponents = () => {
    setSelectedOpponents(['Сергей Евдокимов', 'Сергей Есенин'])
  }


  // Открытие модалки с выбором опонента
  const handleOpponentsInput = (evt) => {
    setChooseOpponentModal(true);
    const { name, value } = evt.target;
    setOpponentsInput((prev) => ({ ...prev, [name]: value }))
    const findUser = ourCommandYandex.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    setPossibleOpponents(findUser);
  }
  // Добавить оппонента
  const handleAddOpponent = (item) => {
    const updateList = [...selectedOpponents, item]
    setSelectedOpponents(updateList);
    setOpponentsInput('');
    setChooseOpponentModal(false);
    document.getElementById('new-dispute-opponents__input').focus();
  }
  // Удалить оппонента из выбранных
  const handleDeleteOpponent = (item) => {
    const updatedList = [...selectedOpponents];
    updatedList.splice(selectedOpponents.indexOf(item), 1);
    setSelectedOpponents(updatedList);
  }

  // Сохранение значения поля "Суть конфликта" в отдельный стейт
  const handleNewDisputeTextChange = (evt) => {
    const { name, value } = evt.target;
    setDisputeText((prev) => ({ ...prev, [name]: value }))
  };
  // Для объекта File - перевод bytes в Мб(число)
  const formatBytes = (bytes) => {
    if (!+bytes) return 0;
    const kb = 1024;
    const mb = kb ** 2;
    return parseFloat((bytes / mb).toFixed(2))
  };
  // Проверка объема файлов для загрузки
  const handleUsedSize = (updatedList) => {
    const usedSpaceArr = [];
    if (updatedList.length === 0) {
      return 0;
    };
    updatedList.forEach((item) => {
      usedSpaceArr.push(formatBytes(item.size));
    });
    const usedSpace = usedSpaceArr.reduce((res, item) => res + item);
    return usedSpace;
  };
  // Создание массива файлов для загрузки
  const handleFileDrop = (evt) => {
    const newFile = Array.from(evt.target.files);
    if (newFile) {
      const updatedList = [...fileList, ...newFile];
      const usedSize = handleUsedSize(updatedList);
      // Проверка на допустимый объем загрузки
      if (usedSize > maxFilesSize) {
        setIsErrorSize(true);
        console.log(isErrorSize);
        return;
      }
      // Проверка на количество файлов
      if (updatedList.length > maxQuantity) {
        setIsErrorQuantity(true);
        console.log(isErrorQuantity);
        return;
      }
      setFileList(updatedList);
      setFreeSize(maxFilesSize - usedSize);
    }
  }
  // Удаление файла из массива для загрузки
  const handleDeleteFile = (item) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(item), 1);
    const usedSize = handleUsedSize(updatedList);
    setFileList(updatedList);
    setFreeSize(maxFilesSize - usedSize);
  }

  return (
    <div className='new-dispute-form'>
      <div className='new-dispute-form__container border-class'>
        {/* Блок выбора оппонентов */}
        <div className='new-dispute-opponents new-dispute-form__item-wrapper'>
          <div>
            <div className='new-dispute-form__item-title'>Оппоненты*</div>
            <p className='new-dispute-form__item-title new-dispute-form__item-title_subtext'>
              Один или несколько
            </p>
          </div>
          <div className='new-dipute-opponents__choice'>
            {/* Выбранные опоненты */}
            {
              selectedOpponents.length > 0 ? (
                <div className='new-dispute-opponents__selected'>
                  {
                    selectedOpponents.map((item) => (
                      <div className='new-dispute-opponents__selected-item'>
                        <div className='new-dispute-opponents__selected-name'>
                          {item}
                        </div>
                        <button
                          className='new-dispute-opponents__selected-button'
                          type='button'
                          alt='Удалить оппонента'
                          onClick={() => handleDeleteOpponent(item)}
                        />
                      </div>
                    ))
                  }
                </div>
              ) : null
            }<div className='new-dispute-opponents__input-frame'>
              <div className='new-dispute-opponents__input-section'>
                <input
                  id='new-dispute-opponents__input'
                  className='new-dispute-opponents__input'
                  name='opponents'
                  value={opponentsInput.opponents || ''}
                  type='text'
                  onChange={handleOpponentsInput}
                />
                {/* Модалка выбор оппонента */}
                <div className={`new-dispute-opponents__input-modal 
              ${chooseOpponentModal && 'new-dispute-opponents__input-modal_opened'}`}
                  style={possibleOpponents.length > 9 ? { bottom: '-155px' } : { bottom: `-${possibleOpponents.length * 20}px` }}
                >
                  {
                    possibleOpponents.length > 0 ? (
                      possibleOpponents.map((item) => (
                        <button
                          className='new-dispute-opponents__modal-item'
                          onClick={() => handleAddOpponent(item)}
                          alt='Добавить оппонента'
                        >
                          {item}
                        </button>
                      ))
                    ) : (
                      <p>Выбора нет</p>
                    )
                  }
                </div>
              </div>
              <button
                className='new-dispute-opponents__button'
                type='button'
                alt='Показать список возможных оппонентов'
                onClick={handleSetSelectedOpponents}
              />
            </div>
          </div>
        </div>
        {/* Блок с объяснением сути конфликта */}
        <div className='new-dispute-explanation new-dispute-form__item-wrapper'>
          <div className='new-dispute-form__item-title'>Суть конфликта*</div>
          <textarea
            value={disputeText.newDisputeText}
            className='new-dispute-explanation__text'
            name='newDisputeText'
            minLength={25}
            maxLength={2000}
            placeholder='Подробно опишите суть конфликта'
            onChange={handleNewDisputeTextChange}
            required
          />
        </div>
        {/* Блок рабооты с файлами */}
        <div className='new-dispute-file new-dispute-form__item-wrapper'>
          <div>
            <h3 className='new-dispute-form__item-title'>Прикрепите файлы</h3>
            <p className='new-dispute-form__item-title new-dispute-form__item-title_subtext'>
              Допустимый формат: JPG, PDF
            </p>
          </div>
          {/* Drag&Drop zone */}
          <div
            className='new-dispute-file__drop-zone'
            ref={fileRef}
          >
            <img className='new-dispute-file__drop-zone-logo' src={uploadImg} alt="" />
            <p className='new-dispute-file__drop-zone-text'>
              Перетащите файлы сюда или нажмите, чтобы загрузить
            </p>
            <p className='new-dispute-file__drop-zone-text'>
              {`Осталось: ${freeSize} MB`}
            </p>
            <input
              className='new-dispute-file__drop-zone-input'
              type="file"
              value=""
              accept="image/jpeg,image/png,application/pdf"
              multiple
              onChange={handleFileDrop}
            />
          </div>
        </div>
        {/* Блок кнопки submit'а и выбранных файлов */}
        <div className='new-dispute-footer new-dispute-form__item-wrapper'>
          <span />
          <div className='new-dispute-footer__used-zone'>
            <button>Отправить</button>
            {/* Загруженные файлы */}
            {
              fileList.length > 0 ? (
                <div className="drop-file-preview">
                  {
                    fileList.map((item, index) => (
                      <FilePreview
                        item={item}
                        index={index}
                        onDeleteFile={handleDeleteFile}
                      />
                    ))
                  }
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div >
  );
}

NewDisputeForm.propTypes = {
  // onFileChange: PropTypes.func
}

export default NewDisputeForm;
