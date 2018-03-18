export const fieldAddPost = [
	{
		name: 'title',
		id: 'fieldTitle',
		label: 'Заголовок поста',
		required: true
	},
	{
		name: 'body',
		id: 'fieldBody',
		label: 'Текст',
		required: true,
		componentClass: 'textarea',
		style: {height: '150px',resize: 'none'}
	}
];