import { query } from '$lib/db/db.js';
import { json } from "@sveltejs/kit";

export async function DELETE({request}){

    const {ID_POST, ID_COMMENT} = await request.json();

    try{
        await query(`DELETE FROM BonsFluidos.Comentarios WHERE ID_Post=? AND ID_Comentario=?`, [ID_POST, ID_COMMENT])
    }catch(e){
        console.error(e);
        return json({success: false});
    }
    return json({success: true});
}