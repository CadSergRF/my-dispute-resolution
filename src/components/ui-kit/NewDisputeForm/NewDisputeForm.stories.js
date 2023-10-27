import NewDisputeForm from './NewDisputeForm';

export default {
	title: 'Dispute_Resolution/Forms/New dispute',
	component: NewDisputeForm,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		initialOpponents: {
			type: '[string]',
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

export const Default = () => <NewDisputeForm />;
