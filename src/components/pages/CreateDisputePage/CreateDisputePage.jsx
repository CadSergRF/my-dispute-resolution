import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';
import { getUsers } from '../../../utils/api/user.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const CreateDisputePage = () => {
	const { isLoading, setIsLoading } = useAuth();

	const navigate = useNavigate();
	const [initialArrayUsers, setInitialArrayUsers] = useState([]);

	// Получить всех пользователей - НЕ РАБОТАЕТ (получаем только текущего)
	const getAllUsers = async () => {
		setIsLoading(true);
		try {
			const reqData = await getUsers();
			if (reqData) {
				setInitialArrayUsers(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getAllUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Создать диспут
	const handleCreateDispute = async (data) => {
		setIsLoading(true);
		try {
			const reqData = await handleFormDataRequest('/api/disputes/', data);
			const { id } = reqData;
			navigate(`/disputes/${id}`, { state: { createMessage: 'new' } });
		} catch (err) {
			console.error('res Error ', err);
		}
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && (
				<NewDisputeForm
					initialArrayUsers={initialArrayUsers}
					handleRequestNewDispute={handleCreateDispute}
					isEditDispute={false}
				/>
			)}
		</>
	);
};

export { CreateDisputePage };
