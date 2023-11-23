import React, { useState, useEffect } from 'react';
import './DisputePage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';
import { getDisputeId, getComments } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const DisputePage = () => {
	const [card, setCard] = useState();
	const [comments, setComments] = useState();

	const navigate = useNavigate();

	const { isLoading, setIsLoading } = useAuth();
	const { state } = useLocation();

	const { id } = useParams();
	// Получение диспута по id
	const getDisputeById = async (cardId) => {
		try {
			const reqData = await getDisputeId(cardId);
			if (reqData) {
				setCard(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение комментариев к диспуту по id
	const getCommentsById = async (dispute_id) => {
		try {
			const reqData = await getComments(dispute_id);
			if (reqData) {
				setComments(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getDisputeById(id);
		getCommentsById(id);
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const goDisputes = () => navigate('/disputes');

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && (
				<div className="dispute-page">
					{state?.createMessage && state.createMessage === 'new' && (
						<button
							className="close-goDisputes"
							type="button"
							aria-label="Кнопка закрытия модального окна"
							onClick={goDisputes}
						/>
					)}
					<section className="dispute-page__card-section">
						{' '}
						<DisputeCard {...card} />
						{state?.createMessage && state.createMessage === 'new' && (
							<h2 className="createdDispute">Обращение создано</h2>
						)}
					</section>
					<ListMessageComment comments={comments} />

					{/* TODO:компонент для добавления комментария */}
					<div className="dispute-page__comment-form" />
				</div>
			)}
		</>
	);
};

export { DisputePage };
