<script lang="ts">
  let title: string = '';
  let image: FileList | null = null;
  let body: string = '';
  let imageName = '';

async function handlePost() {
    if (title.trim().length === 0 || body.trim().length === 0) {
        alert("Título e conteúdo são obrigatórios.");
        return;
    }

    if (!image || image.length === 0) { 
        alert("Adicione uma imagem.");
        return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("imagem", image[0]);

    const response = await fetch('/admin/api/create', {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        window.location.replace("/admin/dashboard");
    } else {
        const error = await response.json();
        alert(`Erro ao salvar postagem: ${error.message || 'Tente novamente.'}`);
    }
}
  
</script>
  
  <div class="min-h-screen px-8 py-12 sm:px-16 md:px-32">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-[#B91102] mb-8 text-center">Crie uma Nova Postagem</h1>
  
      <form class="space-y-6">
        <div>
          <label for="title" class="block text-lg font-medium text-[#B91102] mb-2">Título</label>
          <input
            type="text"
            id="title"
            bind:value={title}
            class="w-full p-3 border border-[#B91102] rounded-[10px] focus:ring-[#B91102] focus:border-[#B91102]"
            placeholder="Digite o título da sua postagem"
            required
          />
        </div>
  
        <div>
          <label for="image" class="block text-lg font-medium text-[#B91102] mb-2">Imagem do Post</label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#B91102] border-dashed rounded-[10px]">
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer bg-white rounded-[10px] font-medium text-[#B91102] hover:text-[#a00f02] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#B91102]">
                  <span>Carregue um arquivo</span>
                  <input id="file-upload" name="file-upload" bind:files={image} type="file" class="sr-only" accept=".jpg, .png, .jpeg" required>
                </label>
                <p class="pl-1">ou arraste e solte</p>
              </div>
              {#if imageName}
                <p class="text-sm text-gray-500">{imageName}</p>
              {:else}
                <p class="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
              {/if}
            </div>
          </div>
        </div>
  
        <div>
          <label for="body" class="block text-lg font-medium text-[#B91102] mb-2">Conteúdo do Post</label>
          <textarea bind:value={body}
            id="body"
            rows="12"
            class="w-full p-3 border border-[#B91102] rounded-[10px] focus:ring-[#B91102] focus:border-[#B91102]"
            placeholder="Escreva o conteúdo da sua postagem aqui..."
            required
          ></textarea>
        </div>
  
        <div class="text-center">
          <button onclick={() => handlePost()}
            type="submit"
            class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-[10px] shadow-sm text-white bg-[#EB685D] hover:bg-[#a00f02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B91102]"
          >
            Publicar Postagem
          </button>
        </div>
      </form>
    </div>
  </div>