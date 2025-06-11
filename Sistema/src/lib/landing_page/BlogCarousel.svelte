<script lang="ts">
// No props for now
</script>

<section class="px-[15%] py-10 gap-10 mt-14 bg-[#FFEBEC] relative">
  <h2 class="text-[#b91102] text-2xl font-poppins font-semibold">Nosso Blog</h2>
  <div class="w-full py-8 px-2 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {#each [1,2,3] as i}
        <a href="/" class="link-carrossel rounded-[10px] relative group">
          <img class="carrossel-hover rounded-[10px] transition-opacity duration-500 opacity-100 group-hover:opacity-30" src={`/imagens/carrossel0${i}.png`} style="width:100%;height:auto;" alt="" />
          <div class="div-card transition-opacity duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100">
            <h3 class="text-[#b91102] text-center truncate w-3/4 font-poppins font-semibold">Título do Artigo que é absurdamente</h3>
            <p class="cortar-linha text-justify line-clamp-2">Breve descrição do artigo que deve ser suscinta, mas não muito longa - passar de 2 linhas </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
.cortar-linha {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
