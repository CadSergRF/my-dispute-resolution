import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisputeCardList from '../../DisputeList/DisputeCardList';

import { getDisputes, deleteDisputesId } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const DisputesPage = () => {
	const navigate = useNavigate();
	const { isLoading, setIsLoading, isError, setIsError } = useAuth();

	const [allDisputes, setAllDisputes] = useState({});

	// Получить все диспуты
	const getAllDisputes = async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const reqData = await getDisputes();
			if (reqData) {
				setIsLoading(false);
				setAllDisputes(reqData);
			}
		} catch (err) {
			setIsError(true);
		}
	};

	useEffect(() => {
		getAllDisputes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCardClick = (id) => {
		navigate(`/disputes/${id}`);
	};

	const handleChangeDispute = (id) => {
		navigate('/edit-dispute', { state: { disputeId: id } });
	};

	// Удаление диспута
	const handleDeleteDispute = async (id) => {
		try {
			const reqData = await deleteDisputesId(id);
			if (reqData) {
				const newAllDisputes = allDisputes.filter((card) => card.id !== id);
				setAllDisputes(newAllDisputes);
			}
		} catch (err) {
			console.error('Delete disp Error ', err);
		}
	};

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && isError && <h2>Ошибка сервера</h2>}
			{!isLoading && !isError && (
				<DisputeCardList
					disputesList={allDisputes}
					onClick={handleCardClick}
					handleChangeDispute={handleChangeDispute}
					handleDeleteDispute={handleDeleteDispute}
				/>
			)}
		</>
	);
};

export { DisputesPage };
