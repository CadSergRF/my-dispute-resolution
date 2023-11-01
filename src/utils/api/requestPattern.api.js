const BASE_URL_AUTH = 'http://80.87.109.81';

// Обработка ответа от сервера
export const responceProcessing = (res) =>
	// eslint-disable-next-line no-nested-ternary
	!res.ok
		? res.json().then((err) => Promise.reject(err))
		: res.status === 204
		? Promise.resolve(res.status)
		: res.json();

// Формирование модели запроса
export const makeRequest = async (url, method, body) => {
	const headers = { 'Content-Type': 'application/json' };

	const token = localStorage.getItem('token'); // Проверяем токен в LS
	if (token !== undefined && token !== null) {
		// если токен есть
		headers.authorization = `Token ${token}`; // добавляем заголовок авторизации по токену
	}

	const config = { method, headers };
	if (body !== undefined) {
		// Проверяем наличие тела запроса
		config.body = JSON.stringify(body); // если есть добавляем в запрос
	}

	const res = await fetch(`${BASE_URL_AUTH}${url}`, config);
	return responceProcessing(res);
};
