import type { ProjectCardProps } from '../types';

const { NEXT_PUBLIC_PROTOCOL, NEXT_PUBLIC_FRONTEND_HOST } = process.env;

export default [
	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_FRONTEND_HOST}/lessons-learned/`,
		title: 'Lessons Learned',
		imagePreview: {
			src: 'preview_default_github.svg',
			width: 50,
			height: 50,
		},
		description:
			'Meu primeiro projeto web. Aqui foquei em como usar as "tags" do HTML, e um básico do CSS.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_FRONTEND_HOST}/Pixels-Art/`,
		title: 'Pixels Art',
		imagePreview: {
			src: 'preview_default_github.svg',
			width: 50,
			height: 50,
		},
		description:
			'Nesse projeto, eu desenvolvi um jogo de pintar pixels com HTML, CSS e JavaScript. Tive minha primeira experiência e foco em aprender a usar os "events" do Javascript.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_FRONTEND_HOST}/To-Do-List/`,
		title: 'To Do List',
		imagePreview: {
			src: 'preview_default_github.svg',
			width: 50,
			height: 50,
		},
		description:
			'Aqui criei nesse projeto uma agenda de tarefas, onde pode adicionar, remover, mover e salvar no "localStorage".',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_FRONTEND_HOST}/Trybewarts/`,
		title: 'Trybewarts',
		imagePreview: {
			src: 'preview_default_github.svg',
			width: 50,
			height: 50,
		},
		description:
			'Aqui aprendi o conceito da estilização CSS "Flexbox", o desenvolvimento responsivo e a construção de formulários no HTML.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_FRONTEND_HOST}/Solar-System/`,
		title: 'Solar System',
		imagePreview: {
			src: 'preview_default_github.svg',
			width: 50,
			height: 50,
		},
		description:
			'Nessa aplicação, apliquei uma estilização CSS, usando "Flexbox" e "Grid" baseado numa imagem protótipo na raiz do repositório.',
	},
] as Array<ProjectCardProps>;
