<script lang="ts">
	import { formatDate } from "./formatdate";
	let {
		title,
		date,
		content,
		imageUrl,
        imageAlt = 'Imagem do post'
	}: { title: string; date: string; content: string; imageUrl: string | null; imageAlt: string } = $props();
	

</script>

<article>
	<header class="mb-8">
		<h1 class="font-heading text-4xl md:text-5xl font-bold text-brand-heading leading-tight mb-4">
			{title}
		</h1>
		<div class="flex items-center text-sm text-gray-500">
			<img
				src="https://placehold.co/40x40/E85A4F/FFF9F9?text=BF"
				alt="Avatar do autor"
				class="w-10 h-10 rounded-full mr-3"
			/>
			<div>
				<span>Por <a href="#top" class="font-semibold text-brand-primary">Bons Fluidos</a></span>
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
