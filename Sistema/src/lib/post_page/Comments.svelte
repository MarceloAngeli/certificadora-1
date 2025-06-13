<script lang="ts">
    let {comments} = $props();
</script>

<section class="mt-16 prose prose-base">
	<h2 class="font-poppins text-3xl font-bold text-[#b91102] mb-8">Comentários</h2>
	<div class="mb-12 bg-white/50 p-6 rounded-lg border border-[#b91102] rounded-[10px]">
		<h3 class="font-poppins text-xl text-[#b91102] mb-4">Deixe um comentário</h3>
		<form method="POST">
			<div class="mb-4">
				<label for="comment" class="block text-sm font-medium text-[#e82210] mb-1"
					>Seu comentário</label
				><textarea
					id="comment"
			    		name="comment"
					rows="4"
					class="w-full p-3 border border-[#b91102] rounded-[10px] focus:ring-[#b91102] focus:border-[#b91102] transition"
					placeholder="Escreva sua opinião..."
				></textarea>
			</div>
			<div class="mb-4">
				<label for="name" class="block text-sm font-medium text-[#e82210] mb-1">Seu nome</label
				><input
					type="text"
					id="name"
					name="name"
					class="w-full p-3 border border-[#b91102] rounded-[10px] focus:ring-[#b91102] focus:border-[#b91102] transition"
					placeholder="Fulano de Tal"
				/>
			</div>
			<button
				type="submit"
				class="bg-[#b91102] text-white px-6 py-3 rounded-md hover:bg-[#e82210] font-semibold transition-colors"
				>Enviar Comentário</button
			>
		</form>
	</div>
    
	<div class="space-y-8">
        {#each comments as comment }
        <div class="flex items-start space-x-4">
			<img
				src="https://placehold.co/48x48/8C2B2B/FFF9F9?text={Array.from(comment.NomePessoa)[0]}"
				alt="Avatar do comentarista"
				class="w-12 h-12 rounded-full flex-shrink-0"
			/>
			<div class="flex-1">
				<div class="bg-white/50 p-4 rounded-lg border border-[#b91102] rounded-[10px]">
					<p>
						{comment.Comentario}
					</p>
				</div>
				<div class="mt-1 text-sm text-gray-500">
					<span class="font-semibold text-[#b91102]">{comment.NomePessoa}</span> &middot; 2 horas atrás
				</div>
			</div>
		</div>
        {/each}
	</div>
</section>
