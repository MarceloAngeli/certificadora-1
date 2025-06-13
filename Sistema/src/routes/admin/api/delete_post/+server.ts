import { query } from '$lib/db/db.js';
import { json } from "@sveltejs/kit";

export async function DELETE({request}){

    const {ID_POST} = await request.json();

    try{
        await query(`DELETE FROM BonsFluidos.Posts WHERE ID_Post=?`, [ID_POST])
    }catch(e){
        console.log(e);
        console.log("Erro ao deletar post");
        return json({success: false});
    }
    return json({success: true});
}