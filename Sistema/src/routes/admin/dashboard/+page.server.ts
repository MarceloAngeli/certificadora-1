import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log("Enviando Dummy Posts");
	return {
		post:[{
			ID_POST: 1,
			Title: "Titulo muito legal de post",
			Text: "Texto muito legal",
			comments:[
				{ ID_Comment: 101, Name: 'Ana Clara', Comment: 'Iniciativa incrível! Como posso ajudar?' }
			]
		},
		{
			ID_POST: 2,
			Title: "Titulo 2 muito legal de post",
			Text: "Texto muito legal",
		}]
	};
};