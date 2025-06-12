<script lang="ts">
    import type { PageProps } from './$types';
    import { onMount } from 'svelte';
    import { register } from "swiper/element/bundle";
    
    // Register Swiper custom elements
    register();

    let { data }: PageProps = $props();

    // Import other components
    import FooterSection from '$lib/FooterSection.svelte';
    import NavBar from '$lib/NavBar.svelte';
    import Comments from '$lib/post_page/Comments.svelte';
    import Post from '$lib/post_page/Post.svelte';

    // This variable will hold the reference to the swiper-container element
    let swiperEl: HTMLElement & { initialize: () => void; swiper: any };

    // Configure Swiper after the component has been mounted to the DOM
    onMount(() => {
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                clickable: true,
            },
            navigation: true, // Swiper will use the elements with the default classes
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

        // Assign the parameters to the Swiper container element
        Object.assign(swiperEl, swiperParams);

        // Initialize Swiper
        swiperEl.initialize();
    });
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <NavBar />
    </header>

    <div>
        <main class="w-full">
            <Post/>

            <section class="mt-16">
                <h2 class="font-heading text-3xl font-bold text-brand-heading mb-8">Novos Posts</h2>
                
                <swiper-container bind:this={swiperEl} init="false" class="mySwiper">
                    
                    <swiper-slide>
                        <a href="#" class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full">
                            <img src="https://placehold.co/400x300/FEC5BB/442121?text=Post+1" alt="Thumbnail do Post 1" class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"/>
                            <h4 class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">Um Guia Sobre Saúde Menstrual</h4>
                            <p class="text-sm text-gray-600 mt-1">10 de Junho, 2025</p>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#" class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full">
                            <img src="https://placehold.co/400x300/FCD5CE/442121?text=Post+2" alt="Thumbnail do Post 2" class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"/>
                            <h4 class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">Nossa Última Campanha de Arrecadação</h4>
                            <p class="text-sm text-gray-600 mt-1">05 de Junho, 2025</p>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#" class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full">
                            <img src="https://placehold.co/400x300/FEC5BB/442121?text=Post+3" alt="Thumbnail do Post 3" class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"/>
                            <h4 class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">Como o Voluntariado Transforma Vidas</h4>
                            <p class="text-sm text-gray-600 mt-1">01 de Junho, 2025</p>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#" class="block group bg-white/60 p-4 rounded-lg border border-red-100 h-full">
                            <img src="https://placehold.co/400x300/FCD5CE/442121?text=Post+4" alt="Thumbnail do Post 4" class="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"/>
                            <h4 class="font-heading text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">Entrevista com a Dra. Kátia Romero</h4>
                            <p class="text-sm text-gray-600 mt-1">28 de Maio, 2025</p>
                        </a>
                    </swiper-slide>

                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </swiper-container>
            </section>
            
            <aside class="mt-16">
                <div class="bg-white/50 p-6 rounded-lg border border-red-200">
                    <h3 class="font-heading text-3xl font-bold text-brand-heading mb-8 text-center">Arquivo</h3>
                    <ul class="columns-2 md:columns-3 lg:columns-4 gap-4 text-center">
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Junho 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Maio 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Abril 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Março 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Fevereiro 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Janeiro 2025</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Dezembro 2024</a></li>
                        <li class="mb-3"><a href="#" class="text-brand-text hover:text-brand-primary transition-colors">Novembro 2024</a></li>
                    </ul>
                </div>
            </aside>

            <Comments />
        </main>
    </div>
</div>

<FooterSection />

<style>
    /* Applying custom fonts */

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
    /* Custom Swiper Styles */
    .swiper-button-next, .swiper-button-prev {
        color: #E85A4F; /* brand-primary */
    }
    .swiper-pagination-bullet-active {
        background-color: #E85A4F; /* brand-primary */
    }

    /* Ensure swiper container has overflow hidden to contain navigation buttons */
    swiper-container {
        position: relative;
        overflow: hidden;
        padding-bottom: 40px; /* Space for pagination */
    }

    .swiper-pagination {
        position: absolute;
        bottom: 10px;
    }
</style>