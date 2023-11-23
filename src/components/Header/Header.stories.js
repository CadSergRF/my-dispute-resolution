import Header from './Header';

export default {
	title: 'Dispute_Resolution/Header',
	component: Header,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const IsLoggedHeader = {
	args: {
		isLogged: true,
		user: {
			firstName: 'Иван',
			lastName: 'Иванов',
		},
	},
};
