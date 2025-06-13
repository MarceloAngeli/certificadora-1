<script lang="ts">
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	// Register Swiper custom elements
	register();

	let { data }: PageProps = $props();
	console.log(data)

	// Import other components
	import FooterSection from '$lib/FooterSection.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Comments from '$lib/post_page/Comments.svelte';
	import Post from '$lib/post_page/Post.svelte';
	import ArchiveSection from '$lib/post_page/ArchiveSection.svelte';

	// This variable will hold the reference to the swiper-container element
	let swiperEl: HTMLElement & { initialize: () => void; swiper: any };

	// Configure Swiper after the component has been mounted to the DOM
	onMount(() => {
		const swiperParams = {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				clickable: true
			},
			navigation: true, // Swiper will use the elements with the default classes
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

		// Assign the parameters to the Swiper container element
		Object.assign(swiperEl, swiperParams);

		// Initialize Swiper
		swiperEl.initialize();
	});

	let postTitle: string = data.title;
	let postDate: string = data.date;
	let postContent: string = data.content;
	let postImageUrl: string | null = data.image ?? null; // Allow `postImageUrl` to be nullable
	let postImageAlt: string = data.imageAlt ?? 'Imagem do post'; // Default alt text if not provided
	let postAuthor: string = data.author ?? 'Autor Desconhecido'; // Default author if not provided
</script>

<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
	<NavBar />

	<div>
		<main class="w-full">
			<Post
				title={postTitle}
				date={postDate}
				content={postContent}
				imageUrl={postImageUrl}
				author={data.author}
				imageAlt={postImageAlt}
			/>

			<section class="mt-16">
				<h2 class="font-heading text-3xl font-bold text-brand-heading mb-8">Novos Posts</h2>

				<swiper-container bind:this={swiperEl} init="false" class="mySwiper">
					<swiper-slide>
						<a
							href="#top"
							class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full"
						>
							<img
								src="https://placehold.co/400x300/FEC5BB/442121?text=Post+1"
								alt="Thumbnail do Post 1"
								class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
							/>
							<h4
								class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors"
							>
								Um Guia Sobre Saúde Menstrual
							</h4>
							<p class="text-sm text-gray-600 mt-1">10 de Junho, 2025</p>
						</a>
					</swiper-slide>
					<swiper-slide>
						<a
							href="#top"
							class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full"
						>
							<img
								src="https://placehold.co/400x300/FCD5CE/442121?text=Post+2"
								alt="Thumbnail do Post 2"
								class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
							/>
							<h4
								class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors"
							>
								Nossa Última Campanha de Arrecadação
							</h4>
							<p class="text-sm text-gray-600 mt-1">05 de Junho, 2025</p>
						</a>
					</swiper-slide>
					<swiper-slide>
						<a
							href="#top"
							class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full"
						>
							<img
								src="https://placehold.co/400x300/FEC5BB/442121?text=Post+3"
								alt="Thumbnail do Post 3"
								class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
							/>
							<h4
								class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors"
							>
								Como o Voluntariado Transforma Vidas
							</h4>
							<p class="text-sm text-gray-600 mt-1">01 de Junho, 2025</p>
						</a>
					</swiper-slide>
					<swiper-slide>
						<a
							href="#top"
							class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full"
						>
							<img
								src="https://placehold.co/400x300/FCD5CE/442121?text=Post+4"
								alt="Thumbnail do Post 4"
								class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
							/>
							<h4
								class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors"
							>
								Entrevista com a Dra. Kátia Romero
							</h4>
							<p class="text-sm text-gray-600 mt-1">28 de Maio, 2025</p>
						</a>
					</swiper-slide>

					<div class="swiper-pagination"></div>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</swiper-container>
			</section>

			<ArchiveSection
				months={[
					'Junho 2025',
					'Maio 2025',
					'Abril 2025',
					'Março 2025',
					'Fevereiro 2025',
					'Janeiro 2025',
					'Dezembro 2024',
					'Novembro 2024'
				]}
			/>

			<Comments comments={data.comments}/>
		</main>
	</div>
</div>

<FooterSection />

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
