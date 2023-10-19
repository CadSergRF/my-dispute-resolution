import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

export default {
	title: 'Dispute_Resolution/Pages/PageNotFound',
	component: PageNotFound,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Default = () => (
	<BrowserRouter>
		<PageNotFound />
	</BrowserRouter>
);
