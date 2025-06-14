// src/routes/admin/api/create/+server.js

import { query } from '$lib/db/db.js';
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const data = await request.formData();
    const title = data.get("title");
    const body = data.get("body");
    const imagem = data.get("imagem");

    if (!imagem || !(imagem instanceof File) || imagem.size === 0) {
        console.log("Imagem inválida: não é um arquivo, nula, ou está vazia.");
        return json({ message: "Imagem é obrigatória." }, { status: 400 });
    }

    const imageBuffer = Buffer.from(await imagem.arrayBuffer());

    try {
        await query(`INSERT INTO Posts (Titulo, Texto, Foto, Data) VALUES (?, ?, ?, ?)`, [title, body, imageBuffer, "2025-12-10"]);
    } catch (e) {
        console.log(e);
        return json({ message: "Erro ao salvar no banco de dados." }, { status: 500 });
    }

    return json({ message: "Postagem criada com sucesso!" }, { status: 200 });
}