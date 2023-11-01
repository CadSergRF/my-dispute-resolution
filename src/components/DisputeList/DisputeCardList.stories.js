import DisputeCardList from './DisputeCardList';
import './DisputeCardList.css';

const array = [
	{
		id: 1,
		creator: 'Конфликт с Ивановым И.',
		created_at: '6 октября',
		description:
			'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
		status: 'not_started',
		closed_at: '1 июля 11:37',
		files: [
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf',
			'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.png',
			'https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.zip',
		],
		opponent: [],
		comments: [],
	},
	{
		id: 2,
		creator: 'Конфликт с Ивановым И.',
		created_at: '32 февраля',
		description: 'Довожу до вашего сведения, что я жалобщик ',
		status: 'started',
		closed_at: '5 июля 11:37',
		files: [
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Я люблю Россию.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Тестовый текст PDF.pdf',
		],
		opponent: [],
		comments: [],
	},
	{
		id: 3,
		creator: 'Конфликт с Пушкиным И.',
		created_at: '4 сентября',
		description:
			'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
		status: 'closed',
		closed_at: '7 июля 11:37',
		files: [],
		opponent: [],
		comments: [],
	},
];
export default {
	title: 'Dispute_Resolution/DisputeCardList',
	component: DisputeCardList,
	tags: ['autodocs'],
};

export const Default = () => <DisputeCardList array={array} />;
