<script lang="ts">
	import { formatDate } from '$lib/post_page/formatdate';
	type Post = {
		ID_POST: number;
		TITULO: string;
		FOTO: string | null;
		DATA: string;
	};

	export let carrossel: Post[];
	let swiperEl: HTMLElement & { initialize: () => void; swiper: any };

	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	onMount(() => {
		const swiperParams = {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				clickable: true
			},
			navigation: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}
		};
		Object.assign(swiperEl, swiperParams);
		swiperEl.initialize();
	});
	console.log(carrossel);
</script>

<section class="mt-16">
	<h2 class="font-heading text-3xl font-bold text-brand-heading mb-8">Novos Posts</h2>

	<swiper-container bind:this={swiperEl} init="false" class="mySwiper">
		{#each carrossel as post}
			<swiper-slide>
				<a
					data-sveltekit-reload
					href={`/noticia/${post.ID_POST}`}
					class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full"
				>
					<img
						src={post.FOTO}
						alt={`Imagem post ${post.TITULO}`}
						class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
					/>
					<h4
						class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors"
					>
						{post.TITULO}
					</h4>
					<p class="text-sm text-gray-600 mt-1">{formatDate(post.DATA)}</p>
				</a>
			</swiper-slide>
		{/each}
		<div class="swiper-pagination"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</swiper-container>
</section>

<style>
swiper-container {
	--swiper-theme-color: #e85a4f;
}

swiper-container {
	position: relative;
	overflow: hidden;
	padding-bottom: 40px;
}

.swiper-pagination {
	position: absolute;
	bottom: 10px;
}

swiper-slide {
	border: 1px solid #b91102;
	border-radius: 10px;
}
</style>
