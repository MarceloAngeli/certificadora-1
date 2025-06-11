import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
        id: params.id_noticia,
        title: `Notícia ${params.id_noticia}`,
        content: `Este é o conteúdo da notícia com ID ${params.id_noticia}.`,
        date: '2025-06-11',
	};
};