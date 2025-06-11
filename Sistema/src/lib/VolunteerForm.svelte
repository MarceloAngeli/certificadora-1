<script lang="ts">
// No props for now
</script>

<section class="px-[15%] py-10 gap-10 mt-10">
  <h2 class="text-[#b91102] text-2xl mb-6 font-poppins font-semibold">Cadastre-se como voluntário</h2>
  <div class="flex items-center">
    <form action="/login" method="GET" class="flex flex-col w-1/2 bg-[#FFEBEC] p-4 rounded-[15px] border border-[#b91102]">
      <label class="text-[#e82210]" for="nome">Nome Completo:</label>
      <input class="border border-[#b91102] rounded-[15px] p-1" type="text" id="nome" name="nome" />
      <div class="flex flex-row items-center mt-2">
        <span class="material-icons text-[#e82210]">email</span>
        <label class="block text-[#e82210] ml-1" for="email"> Email:</label>
      </div>
      <input class="border border-[#b91102] rounded-[15px] p-1" type="email" id="email" name="email" />
      <div class="flex gap-2 justify-between mt-2">
        <div class="flex gap-2">
          <div class="flex flex-row items-center">
            <span class="material-icons text-[#e82210]">phone</span>
            <label class="text-[#e82210] ml-1" for="telefone">Telefone:</label>
          </div>
          <input placeholder="(XX) XXXXX-XXXX" class="p-1 border border-[#b91102] rounded-[15px] text-center" type="tel" id="telefone" name="telefone" />
        </div>
        <div>
          <label class="text-[#e82210]" for="idade">Idade:</label>
          <input class="p-1 border border-[#b91102] rounded-[15px] h-5 text-center" type="number" id="idade" name="idade" min="18" max="70" />
        </div>
      </div>
      <label class="mt-2 text-[#e82210]" for="sobre-voce">Conte-nos sobre você:</label>
      <textarea class="resize-none p-1 border border-[#b91102] rounded-[15px]" name="sobre-voce" id="sobre-voce" cols="30" rows="5"></textarea>
      <div class="flex items-center justify-center">
        <button class="mt-2 text-base rounded-[10px] px-4 py-2 bg-[#EB685D] text-white border border-[#b91102]" type="submit">Quero Ajudar !</button>
      </div>
    </form>
    <img class="" style="width:50%;height:auto;" src="/imagens/obrigado.png" alt="" />
  </div>
</section>
