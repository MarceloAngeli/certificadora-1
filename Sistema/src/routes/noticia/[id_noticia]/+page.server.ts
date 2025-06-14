import type { PageLoad } from './$types';
import type { Actions } from './$types';
import { query } from '$lib/db/db';
import { fileTypeFromBuffer } from 'file-type';


export const load: PageLoad = async ({ params }) => {
        let comments = await query(
                `SELECT NomePessoa, Data, Comentario FROM Comentarios WHERE ID_Post = ?;`, 
                [params.id_noticia] 
        );

        let data = await query(
                `SELECT ID_POST, TITULO, TEXTO, FOTO, DATA FROM Posts WHERE ID_POST=?`, 
                [Number(params.id_noticia)]
        );


        console.log(data);
        let noticia = data[0];

        const typeInfo = await fileTypeFromBuffer(noticia.FOTO); 
        const imageBase64 = Buffer.from(noticia.FOTO).toString('base64');
        const imageUrl = `data:${typeInfo};base64,${imageBase64}`;
       

	return {
                id: noticia.ID_POST,
                title: noticia.TITULO,
                content: noticia.TEXTO,
                date: noticia.DATA,
                image: imageUrl,
                imageAlt: 'Descrição da imagem da notícia',
                comments
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

                try{
                        await query( `INSERT INTO Comentarios (ID_POST, NomePessoa, Comentario, Data)
                        VALUES (?, ?, ?, ?);
                        `,[params.id_noticia, name, comment, formattedDate ]);
                }catch(e){
                        console.log(e);
                }

        }
} satisfies Actions;