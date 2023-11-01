import MessageComments from './MessageComments';

export default {
	title: 'Dispute_Resolution/MessageComments',
	component: MessageComments,
	tags: ['autodocs'],
};

const MessageFunction = (args) => <MessageComments {...args} />;

export const Default = MessageFunction.bind({});

Default.args = {
	name: 'Измайлов В.',
	date: '8 окт в 18:13',
	text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
	files: [
		{
			linkFile: '/',
			nameFile: 'Название документа111111111111111111111111111111.pdf',
		},
		{ linkFile: '/', nameFile: 'Название документа.jpg' },
	],
};
