import TextArea from './TextArea';

export default {
	title: 'Dispute_Resolution/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const DescriptionOfConflict = {
	args: {
		name: 'DescriptionOfConflict',
		label: 'Суть конфликта',
		placeholder: 'Что произошло',
	},
};
