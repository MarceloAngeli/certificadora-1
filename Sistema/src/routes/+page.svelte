<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import HeroSection from '$lib/landing_page/HeroSection.svelte';
	import ObjetivoSection from '$lib/landing_page/ObjetivoSection.svelte';
	import HistoriaSection from '$lib/landing_page/HistoriaSection.svelte';
	import FooterSection from '$lib/FooterSection.svelte';
	import RecentPosts from '$lib/RecentPosts.svelte';

	let { data } = $props();
	const carrossel = data.carrossel;
	console.log(data);
</script>

<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
	<NavBar />
	<HeroSection />
	<RecentPosts {carrossel} />
	<ObjetivoSection />
	<HistoriaSection />
	<FooterSection />
</div>
