<script lang="ts">
    let {months} = $props();
</script>

<div class="bg-white/50 p-6 rounded-lg border border-[#b91102] rounded-[10px]">
    <h3 class="font-heading text-3xl font-bold text-brand-heading mb-8 text-center">Arquivo</h3>
    <ul class="columns-2 md:columns-3 lg:columns-4 gap-4 text-center">
        {#each months as month}
            <li class="mb-3">
                <a href="#" class="text-brand-text hover:text-brand-primary transition-colors">{month}</a>
            </li>
        {/each}
    </ul>
</div>
