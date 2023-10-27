/* eslint-disable camelcase */
import { makeFormDataReq } from './requestPattern.api';

// Получение всех диспутов
export const getDisputes = () =>
	makeFormDataReq(`/api/disputes/`, 'GET', undefined);

// Создание дтспута - ПОКА ПРОБЛЕМА
export const createDispute = (data) =>
	makeFormDataReq(`/api/disputes/`, 'POST', data);

// Получение диспута по id
export const getDisputeId = (id) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'GET', undefined);

// Редактирование диспута по id - Замена
export const editDisputeId = (id, data) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'PUT', data);

// Редактирование диспута по id
export const editPatchDisputeId = (id, data) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'PATCH', data);

// Удаление диспута по id
export const deleteDisputesId = (id) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'DELETE', undefined);

// Получение комментариев к диспуту по id
export const getComments = (dispute_id) =>
	makeFormDataReq(`/api/disputes/${dispute_id}/comments/`, 'GET', undefined);

// Добавление комментариев к диспуту по id
export const createComments = ({ dispute_id, content, file }) =>
	makeFormDataReq(`/api/disputes/${dispute_id}/comments/`, 'POST', {
		content,
		file,
	});
