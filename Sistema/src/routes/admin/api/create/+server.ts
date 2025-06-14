import { query } from '$lib/db/db.js';
import { json } from "@sveltejs/kit";

export async function POST({request}){

    const data = await request.formData();
    let title = data.get("title");
    let body = data.get("body");
    let imagem = data.get("imagem");

    if(!imagem || !(imagem instanceof File)){
        console.log("Imagem não é um arquivo ou é nula");
        return json({status: 400})
    }
    const imageBuffer = Buffer.from(await imagem.arrayBuffer());

    try{
        await query(`INSERT INTO Posts (Titulo, Texto, Foto, Data) VALUES (?, ?, ?, ?)`, [title, body, imageBuffer, "2025-12-10" ])
    }catch(e){
        console.log(e);
        return json({status: 400})
    }
   
    return json({status: 200})
}