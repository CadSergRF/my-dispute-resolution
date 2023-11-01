import FileList from './FileList';
import './FileList.css';

export default {
	title: 'Dispute_Resolution/FileList',
	component: FileList,
	tags: ['autodocs'],
};
export const Default = {
	args: {
		files: [
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf',
			'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.pdf',
		],
		type: 'dispute',
	},
};
