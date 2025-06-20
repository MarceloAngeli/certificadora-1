import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { query } from '$lib/db/db';
import { getPostsRecentesData } from '$lib/db/posts';
import { fileTypeFromBuffer } from 'file-type';

export const load: PageServerLoad = async ({ }) => {
    const params = { id_noticia: '0' }; // Example parameter, replace with actual logic to get params

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

    let carrosselData = await getPostsRecentesData(Number(params.id_noticia));

    const carrossel = await Promise.all(carrosselData.map(async (post: any) => {
        return {
            ...post,
            FOTO: await createImageURL(post.FOTO)
        };
    }));

    return {
        carrossel
    };
};
