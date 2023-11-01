import NewDisputeForm from './NewDisputeForm';

export default {
	title: 'Dispute_Resolution/Forms/New dispute',
	component: NewDisputeForm,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		initialOpponents: {
			type: '[object]',
			description: 'Стейт всех возможных значений для выбора',
		},
		selectedOpponents: {
			type: '[string]',
			description: 'Стейт выбранных значений',
		},
		handleSetSelectedOpponents: {
			type: 'func',
			description: 'Функция принимает новый стейт выбранных значений',
		},
	},
};

// export const Default = () => <NewDisputeForm />;
export const Create = {
	args: {
		isEditDispute: false,
	},
};
export const Edit = {
	args: {
		isEditDispute: true,
	},
};
