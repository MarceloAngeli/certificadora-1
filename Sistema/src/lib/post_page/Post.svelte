<script lang="ts">
	let {
		title,
        author,
		date,
		content,
		imageUrl = '/imagens/artigo_default.png',
        imageAlt = 'Imagem do post'
	}: { title: string; author: string; date: string; content: string; imageUrl: string | null; imageAlt: string } = $props();

	console.log(date);

	function formatDate(isoString: string): string {
	const date: Date = new Date(isoString);

	const day: string = String(date.getUTCDate()).padStart(2, '0');
	const month: string = String(date.getUTCMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
	const year: number = date.getUTCFullYear();

	return `${day}/${month}/${year}`;
	}
</script>

<article>
	<header class="mb-8">
		<h1 class="font-heading text-4xl md:text-5xl font-bold text-brand-heading leading-tight mb-4">
			{title}
		</h1>
		<div class="flex items-center text-sm text-gray-500">
			<img
				src="https://placehold.co/40x40/E85A4F/FFF9F9?text=A"
				alt="Avatar do autor"
				class="w-10 h-10 rounded-full mr-3"
			/>
			<div>
				<span>Por <a href="#top" class="font-semibold text-brand-primary">{author}</a></span>
				<span class="mx-2">&middot;</span>
				<span>{formatDate(date)}</span>
				`</div>
		</div>
	</header>

	<figure class="mb-8">
		<img
			src={imageUrl}
			alt={imageAlt}
			class="w-full h-auto rounded-lg shadow-md"
		/>
	</figure>

	<div class="prose lg:prose-xl max-w-none text-brand-text leading-relaxed">
		{@html content}
	</div>
</article>
