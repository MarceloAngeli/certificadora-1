import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import { getPostsByYearMonth } from '$lib/db/posts';
import { fileTypeFromBuffer } from 'file-type';

export const load = (async ({ url }) => {
    const searchParams = Object.fromEntries(url.searchParams.entries());
    const mes: string | null = searchParams.mes || null;
    const ano: string | null = searchParams.ano || null;
    const postsData = await getPostsByYearMonth(Number(ano), Number(mes));

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

    const posts = await Promise.all(postsData.map(async (post) => {
        return {
            ...post,
            FOTO: await createImageURL(post.FOTO)
        };
    }));

    return { posts };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        console.log("Form Data:", formData);
        const mes = formData.get('mes');
        const ano = formData.get('ano');

        if (mes && ano) {
            redirect(303, `/noticias?mes=${mes}&ano=${ano}`);
        }

        return {
            success: false,
            error: 'Invalid parameters'
        };
    }
} satisfies Actions;
