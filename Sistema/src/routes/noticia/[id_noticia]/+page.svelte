<script lang="ts">
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	// Register Swiper custom elements
	register();

	let { data }: PageProps = $props();
	console.log(data);

	// Import other components
	import FooterSection from '$lib/FooterSection.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Comments from '$lib/post_page/Comments.svelte';
	import Post from '$lib/post_page/Post.svelte';
	import RecentPosts from '$lib/RecentPosts.svelte';

	let swiperEl: HTMLElement & { initialize: () => void; swiper: any };

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

	interface Post{
		ID_POST: number,
		TITULO: string,
		FOTO: string | null,
		DATA: string,
	}
	let carrossel: Post[] = data.carrossel;
	let postTitle: string = data.title;
	let postDate: string = data.date;
	let postContent: string = data.content;
	let postImageUrl: string | null = data.image ?? null;
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
				/>

			<RecentPosts carrossel={carrossel} />

			<Comments comments={data.comments}/>
		</main>
	</div>
</div>

<FooterSection />

