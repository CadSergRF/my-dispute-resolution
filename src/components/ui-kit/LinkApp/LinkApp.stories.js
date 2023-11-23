import { BrowserRouter } from 'react-router-dom';
import LinkApp from './LinkApp';

export default {
	title: 'Dispute_Resolution/LinkApp',
	component: LinkApp,
	tags: ['autodocs'],
};

const LinkFunction = (args) => (
	<BrowserRouter>
		<LinkApp {...args} />
	</BrowserRouter>
);

export const Default = LinkFunction.bind({});

Default.args = {
	label: 'Забыли пароль?',
	url: '/recovery-password',
};
