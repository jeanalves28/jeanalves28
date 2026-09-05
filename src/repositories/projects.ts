import type { ProjectCardProps } from '../types';

const { NEXT_PUBLIC_PROTOCOL, NEXT_PUBLIC_GITHUB_PAGES } = process.env;
const width = 1000;
const height = 1000;
const imageDefault = '/preview_default_github.svg';

export default [
	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_PAGES}/lessons-learned/`,
		title: 'Lessons Learned',
		imagePreview: {
			src: imageDefault,
			width,
			height,
		},
		description:
			'Meu primeiro projeto web. Aqui foquei em como usar as "tags" do HTML, e um básico do CSS.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_PAGES}/Pixels-Art/`,
		title: 'Pixels Art',
		imagePreview: {
			src: imageDefault,
			width,
			height,
		},
		description:
			'Nesse projeto, eu desenvolvi um jogo de pintar pixels com HTML, CSS e JavaScript. Tive minha primeira experiência e foco em aprender a usar os "events" do Javascript.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_PAGES}/To-Do-List/`,
		title: 'To Do List',
		imagePreview: {
			src: imageDefault,
			width,
			height,
		},
		description:
			'Aqui criei nesse projeto uma agenda de tarefas, onde pode adicionar, remover, mover e salvar no "localStorage".',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_PAGES}/Trybewarts/`,
		title: 'Trybewarts',
		imagePreview: {
			src: imageDefault,
			width,
			height,
		},
		description:
			'Aqui aprendi o conceito da estilização CSS "Flexbox", o desenvolvimento responsivo e a construção de formulários no HTML.',
	},

	{
		deployPath: `${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_PAGES}/Solar-System/`,
		title: 'Solar System',
		imagePreview: {
			src: imageDefault,
			width,
			height,
		},
		description:
			'Nessa aplicação, apliquei uma estilização CSS, usando "Flexbox" e "Grid" baseado numa imagem protótipo na raiz do repositório.',
	},
] as Array<ProjectCardProps>;
