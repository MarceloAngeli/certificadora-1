import type { PageServerLoad } from './$types';
import { query } from '$lib/db/db';

export const load: PageServerLoad = async ({ params }) => {

	let data = await query(`SELECT
		p.ID_Post,
		p.Titulo AS Title,
		p.Texto AS Text,
		c.ID_Comentario AS ID_Comment,
		c.NomePessoa AS Name,
		c.Comentario AS Comment
		FROM Posts p
		LEFT JOIN Comentarios c ON p.ID_Post = c.ID_Post
		ORDER BY p.ID_Post, c.ID_Comentario;`
	, []);


	const postsMap = new Map();
	const formattedPosts = [];

	for (const row of data) {
		if (!postsMap.has(row.ID_Post)) {
			const newPost = {
				ID_POST: row.ID_Post,
				Title: row.Title,
				Text: row.Text,
				comments: []
			};
			postsMap.set(row.ID_Post, newPost);
			formattedPosts.push(newPost);
		}

		if (row.ID_Comment) {
			const post = postsMap.get(row.ID_Post);
			post.comments.push({
				ID_Comment: row.ID_Comment,
				Name: row.Name,
				Comment: row.Comment
			});
		}
	}

	return { post: formattedPosts };
};