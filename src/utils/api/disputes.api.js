/* eslint-disable camelcase */
import { makeRequest } from './requestPattern.api';

// Получение всех диспутов - РАБОТАЕТ
export const getDisputes = () =>
	makeRequest(`/api/disputes/`, 'GET', undefined);

// Создание дтспута - ПОКА ПРОБЛЕМА
// export const createDispute = (data) => {
// 	makeFormDataReq('/api/disputes/', 'POST', data);
// };

// Получение диспута по id - РАБОТАЕТ
export const getDisputeId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'GET', undefined);

// Редактирование диспута по id - Замена
export const editDisputeId = ({ id, text }) =>
	makeRequest(`/api/disputes/${id}/`, 'PUT', text);

// Редактирование диспута по id
export const editPatchDisputeId = ({ id, text }) =>
	makeRequest(`/api/disputes/${id}/`, 'PATCH', text);

// Удаление диспута по id - РАБОТАЕТ
export const deleteDisputesId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'DELETE', undefined);

// Получение комментариев к диспуту по id
export const getComments = (dispute_id) =>
	makeRequest(`/api/disputes/${dispute_id}/comments/`, 'GET', undefined);

// Добавление комментариев к диспуту по id
// export const createComments = ({ dispute_id, content, file }) =>
// 	makeFormDataReq(`/api/disputes/${dispute_id}/comments/`, 'POST', {
// 		content,
// 		file,
// 	});
