import Button from './Button';

export default {
	title: 'Dispute_Resolution/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};
export const Default = {
	args: {
		// size: 'large',
		label: 'Button',
	},
};
export function Type(args) {
	return (
		<div className="button-box">
			<Button
				size="medium"
				label="Создать обращение"
				color="downy"
				type="button"
				{...args}
			/>
			<Button
				size="large"
				label="Продолжить"
				color="blueLagoon"
				type="button"
				{...args}
			/>
			<Button
				size="mlarge"
				label="Добавить оппонентов"
				color="blueLagoon-inverted"
				type="button"
				{...args}
			/>
			<Button
				size="small"
				label="Выход"
				color="transperent"
				type="button"
				before="exit"
				{...args}
			/>
			<Button
				size="small"
				label="Сменить пароль"
				color="transperent"
				type="button"
				before="changePassword"
				{...args}
			/>
			<Button
				size="small"
				label="Редактировать"
				color="transperent"
				type="button"
				before="edit"
				{...args}
			/>
			<Button
				size="small"
				label="Отменить обращение"
				color="transperent"
				type="button"
				before="cancel"
				{...args}
			/>
		</div>
	);
}
