import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../button/Button';

import PageNotFoundLogo from '../../../Images/PageNotFoundLogo.svg';
import './PageNotFound.css';

const PageNotFound = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/home');
	};

	return (
		<article className="page-not-found">
			<section className="page-not-found__wrapper">
				<img
					className="page-not-found__img"
					src={PageNotFoundLogo}
					alt="логотип 404"
				/>
				<div className="page-not-found__text-block">
					<h1 className="page-not-found__heading">Страница не найдена</h1>
					<p className="page-not-found__text">
						То, что находится в поиске не существует или пока не открыто
					</p>
				</div>
				<Button label="Перейти на главную" type="button" onClick={goHome} />
			</section>
		</article>
	);
};

export default PageNotFound;
