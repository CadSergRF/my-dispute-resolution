import Input from './Input';

export default {
	title: 'Dispute_Resolution/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const Password = {
	args: {
		name: 'Password',
		label: 'Пароль',
		placeholder: 'Пароль',
		type: 'password',
	},
};

export const Email = {
	args: {
		name: 'Email',
		placeholder: 'Электронная почта',
		label: 'Электронная почта',
		type: 'email',
		pattern: '[a-zA-Z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}',
	},
};

export const InputWithError = {
	args: {
		name: 'InputWithError',
		placeholder: 'C ошибкой',
		label: 'Input With Error',
		type: 'text',
		error: 'Произошла ошибка',
	},
};
