import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
        id: params.id_noticia,
        title: `Notícia com id ${params.id_noticia}`,
        content: `Este é o conteúdo da notícia com ID ${params.id_noticia}.\nEsta notícia é um exemplo fictício para demonstração.\nEm algum momento, você poderá substituir este conteúdo por informações reais.`,
        date: '2025-06-11',
        image: null,
        imageAlt: 'Descrição da imagem da notícia',
        author: "Fulano de Tal",
	};
};