<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import RecentPosts from '$lib/RecentPosts.svelte';

	let { data } = $props();
	const posts = data.posts;
</script>

<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
	<NavBar />

	<section class="w-full bg-white/50 rounded-lg border border-[#b91102] p-6 sm:p-8 my-8 shadow-md">
		<h2 class="text-[#b91102] text-2xl font-poppins font-semibold mb-6 text-center">
			Histórico de posts
		</h2>
		<form class="flex flex-col sm:flex-row gap-4 items-center justify-center" method="POST">
			<label class="flex flex-col text-[#e82210] font-medium">
				<span class="mb-1">Mês</span>
				<select
					class="border border-[#b91102] rounded-[10px] px-3 py-2 focus:ring-[#b91102] focus:border-[#b91102] transition"
					name="mes"
				>
					<option value="1">Janeiro</option>
					<option value="2">Fevereiro</option>
					<option value="3">Março</option>
					<option value="4">Abril</option>
					<option value="5">Maio</option>
					<option value="6">Junho</option>
					<option value="7">Julho</option>
					<option value="8">Agosto</option>
					<option value="9">Setembro</option>
					<option value="10">Outubro</option>
					<option value="11">Novembro</option>
					<option value="12">Dezembro</option>
				</select>
			</label>
			<label class="flex flex-col text-[#e82210] font-medium">
				<span class="mb-1">Ano</span>
				<input
					class="border border-[#b91102] rounded-[10px] px-3 py-2 focus:ring-[#b91102] focus:border-[#b91102] transition"
					type="number"
					name="ano"
					min="1900"
					max="2100"
					value={new Date().getFullYear()}
				/>
			</label>
			<button
				type="submit"
				class="bg-[#EB685D] text-white px-6 py-3 rounded-[10px] font-semibold border border-[#b91102] hover:bg-[#a00f02] transition-colors"
			>
				Filtrar
			</button>
		</form>
	</section>

	<RecentPosts carrossel={posts} temTitulo={false} />
</div>
