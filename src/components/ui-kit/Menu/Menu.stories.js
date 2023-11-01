import Menu from './Menu';
import Button from '../Button/Button';

export default {
	title: 'Dispute_Resolution/Menu',
	component: Menu,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const OpenedMenu = {
	args: {
		isOpen: true,
		firstButton: (
			<Button
				size="small"
				label="Сменить пароль"
				color="transperent"
				type="button"
				before="changePassword"
			/>
		),
		secondButton: (
			<Button
				size="small"
				label="Выйти"
				color="transperent"
				type="button"
				before="exit"
			/>
		),
	},
};
