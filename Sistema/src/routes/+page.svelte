<script lang="ts">
  import NavBar from '$lib/NavBar.svelte';
  import HeroSection from '$lib/landing_page/HeroSection.svelte';
  import ObjetivoSection from '$lib/landing_page/ObjetivoSection.svelte';
  import HistoriaSection from '$lib/landing_page/HistoriaSection.svelte';
  import BlogCarousel from '$lib/landing_page/BlogCarousel.svelte';
  import VolunteerForm from '$lib/landing_page/VolunteerForm.svelte';
  import NewsletterForm from '$lib/NewsletterForm.svelte';
  import FooterSection from '$lib/FooterSection.svelte';
</script>

<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
  <NavBar />
  <HeroSection />
  <ObjetivoSection />
  <HistoriaSection />
  <BlogCarousel />
  <VolunteerForm />
  <NewsletterForm />
  <FooterSection />
</div>
