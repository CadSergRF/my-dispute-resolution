import ListMessageComments from './ListMessageComments';

export default {
	title: 'Dispute_Resolution/ListMessageComments',
	component: ListMessageComments,
	tags: ['autodocs'],
};

const ListMessage = (args) => <ListMessageComments {...args} />;

export const Default = ListMessage.bind({});

Default.args = {
	comments: [
		{
			name: 'Измайлов В.',
			date: '8 окт в 18:13',
			text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
			files: [
				{ linkFile: '/', nameFile: 'Название документа.pdf' },
				{ linkFile: '/', nameFile: 'Название документа.jpg' },
			],
		},
		{
			name: 'Измайлов В.',
			date: '8 окт в 18:13',
			text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
			files: [
				{ linkFile: '/', nameFile: 'Название документа.pdf' },
				{ linkFile: '/', nameFile: 'Название документа.jpg' },
			],
		},
	],
};
