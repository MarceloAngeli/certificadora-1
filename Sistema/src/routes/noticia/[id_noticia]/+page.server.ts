import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { query } from '$lib/db/db';
import { fileTypeFromBuffer } from 'file-type';

export const load: PageServerLoad = async ({ params }) => {
    const createImageURL = async (buffer: ArrayBuffer | null) => {
        if (!buffer) return null;
        try {
            const imageBuffer = Buffer.from(buffer);
            const typeInfo = await fileTypeFromBuffer(imageBuffer);
            if (typeInfo) {
                const imageBase64 = imageBuffer.toString('base64');
                return `data:${typeInfo.mime};base64,${imageBase64}`;
            }
        } catch (e) {
            console.error("Error processing image buffer:", e);
        }
        return null;
    };

    let comments = await query(
        `SELECT NomePessoa, Data, Comentario FROM Comentarios WHERE ID_POST = ?;`, 
        [params.id_noticia] 
    );

    let data = await query(
        `SELECT ID_POST, TITULO, TEXTO, FOTO, DATA FROM Posts WHERE ID_POST=?`, 
        [Number(params.id_noticia)]
    );

    let carrosselData = await query(`SELECT ID_POST, TITULO, DATA, FOTO FROM Posts WHERE ID_POST != ? ORDER BY DATA DESC LIMIT 4`, [Number(params.id_noticia)]);

    const noticia = data[0];

    const carrossel = await Promise.all(carrosselData.map(async (post) => {
        return {
            ...post,
            FOTO: await createImageURL(post.FOTO) 
        };
    }));
    
    return {
        id: noticia.ID_POST,
        title: noticia.TITULO,
        content: noticia.TEXTO,
        date: noticia.DATA,
        image: await createImageURL(noticia.FOTO),
        imageAlt: 'Descrição da imagem da notícia',
        comments,
        carrossel 
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