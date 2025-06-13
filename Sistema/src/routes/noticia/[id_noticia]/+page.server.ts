import type { PageLoad } from './$types';
import type { Actions } from './$types';
import { query } from '$lib/db/db';

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

export const actions = {
	default: async ({request, params}) => {

                const data = await request.formData();
                const comment = data.get("comment");
                const name = data.get("name");

                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const day = String(today.getDate()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}`;

                console.log([params.id_noticia, name, comment, formattedDate ]);
                try{
                        let comentarios = await query( `INSERT INTO Comentarios (ID_POST, NomePessoa, Comentario, Data)
                        VALUES (?, ?, ?, ?);
                        `,[params.id_noticia, name, comment, formattedDate ]);
                }catch(e){
                        console.log(e);
                }

        }
} satisfies Actions;