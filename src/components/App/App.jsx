import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { RequireAuth } from '../../hok/RequireAuth';
import { useAuth } from '../../hook/useAuth';

import { Layout } from '../Layout/Layout';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import { DisputesPage } from '../pages/DisputesPage/DisputesPage';
import { CreateDisputePage } from '../pages/CreateDisputePage/CreateDisputePage';
import { CheckLogin } from '../pages/CheckLogin/CheckLogin';
import { EditDisputePage } from '../pages/EditDisputePage/EditDisputePage';
import { DisputePage } from '../pages/DisputePage/DisputePage';

export default function App() {
	const navigate = useNavigate();
	const { checkAuth } = useAuth();

	React.useEffect(() => {
		checkAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCreateDispute = () => {
		navigate('/create-dispute');
	};

	const handleChangePassword = () => {
		console.log('Тут будет форма изменения пароля');
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout
						handleCreateDispute={handleCreateDispute}
						handleChangePassword={handleChangePassword}
					/>
				}
			>
				<Route index element={<CheckLogin />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/disputes"
					element={
						<RequireAuth>
							<DisputesPage />
						</RequireAuth>
					}
				/>
				<Route
					path="/disputes/:id"
					element={
						<RequireAuth>
							<DisputePage />
						</RequireAuth>
					}
				/>
				<Route
					path="/create-dispute"
					element={
						<RequireAuth>
							<CreateDisputePage />
						</RequireAuth>
					}
				/>
				<Route
					path="/edit-dispute"
					element={
						<RequireAuth>
							<EditDisputePage />
						</RequireAuth>
					}
				/>
				<Route path="/*" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
}
