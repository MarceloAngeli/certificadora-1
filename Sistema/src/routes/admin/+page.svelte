<script>
    // This line is from your original code. It's used to check for authentication errors.
    import { page } from '$app/stores';
  </script>
  
  <div class="w-full bg-[#FFF] min-h-screen flex items-center justify-center p-4 font-sans">
    <form
      method="POST"
      class="bg-white p-8 rounded-2xl border border-[#FADADD] shadow-lg
             w-full max-w-md flex flex-col space-y-6"
    >
      <div class="text-center">
        <h1 class="text-3xl font-bold text-[#C73D54]">Bons Fluidos</h1>
        <p class="text-lg text-[#5D3A3A] mt-1">
          Faça seu login para continuar
        </p>
      </div>
  
      <div class="space-y-4">
        <div>
          <label for="username" class="block font-semibold text-sm mb-2 text-[#4A242B]">
            Login
          </label>
          <input
            name="username"
            type="text"
            placeholder="seu@email.com"
            class="w-full p-3 rounded-lg bg-[#FFF9F9] border border-[#FADADD] text-[#4A242B]
                   focus:outline-none focus:border-[#E53935] focus:ring-1 focus:ring-[#E53935]
                   transition-colors duration-200"
          />
        </div>
  
        <div>
          <label for="password" class="block font-semibold text-sm mb-2 text-[#4A242B]">
            Senha
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            class="w-full p-3 rounded-lg bg-[#FFF9F9] border border-[#FADADD] text-[#4A242B]
                   focus:outline-none focus:border-[#E53935] focus:ring-1 focus:ring-[#E53935]
                   transition-colors duration-200"
          />
        </div>
      </div>
  
  
      {#if $page.status === 401}
        <p class="text-[#E53935] text-sm text-center font-medium -my-2">
          Credenciais Inválidas. Por favor, tente novamente.
        </p>
      {/if}
  
      <div class="flex flex-col gap-4 pt-2">
        <button
          type="submit"
          class="w-full bg-[#E85A5A] hover:bg-[#D94C4C] text-white font-bold py-3 px-6 rounded-lg
                 transition-colors duration-200"
        >
          Entrar
        </button>
      </div>
    </form>
  </div>