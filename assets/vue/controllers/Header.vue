<template>
    <div class="container mx-auto fixed top-0 z-20" :class="{ 'scroll-bot': scrollingDown, 'scroll-top': !scrollingDown}">
        <header :style="{ color: textColor }" class="w-full flex justify-between items-center fixed py-5" :class="{'bg-white shadow-lg': lastScrollTop > 0,'bg-transparent': lastScrollTop === 0}">            
          <!-- Botón de menú hamburguesa -->
          <div class="container mx-auto flex justify-between">
            <div class="flex items-center md:hidden pl-10 z-10">
              <button @click="toggleMenu" class="text-gray-500 focus:outline-none">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="!showMenu" fill-rule="evenodd" clip-rule="evenodd" d="M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h20v2H2v-2z"/>
                  <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M2.707 7.707a1 1 0 0 1 1.414 0L12 16.586l8.879-8.88a1 1 0 1 1 1.414 1.414L12 19.414 1.293 9.121a1 1 0 0 1 0-1.414z"/>
                </svg>
              </button>
            </div>   
            <div class="max-md:hidden">
              <nav class="flex flex-col md:flex-row gap-6 md:gap-10 text-xl font-extrabold">
                <router-link :to="item.href" v-for="item in nav" :key="item.name" :class="['transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-cyan-700']">{{ item.name }}</router-link>
              </nav>
            </div>
            <div class="z-10">
              <!-- <div class="flex absolute top-11 gap-6 dark"> -->
              <div class="flex gap-6 max-md:pr-10">
                <a href="https://github.com/harolditoc" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" :style="{ fill: textColor }" class="h-10 md:hover:fill-cyan-700" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                <a href="https://www.linkedin.com/in/harold-chambilla/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" :style="{ fill: textColor }" class="h-10 md:hover:fill-cyan-700" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                <a href="mailto:haroldchambillaramos@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" :style="{ fill: textColor }" class="h-10 md:hover:fill-cyan-700" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>
              </div>
            </div>
          </div>

          <!-- Menú mobil -->
          <div v-show="showMenu" class="fixed inset-0 z-50">
            <div class="absolute inset-0 bg-gray-800 bg-opacity-75" @click="closeMenu"></div>
            <div class="absolute top-0 left-0 h-full w-64 bg-white shadow">
              <button @click="toggleMenu" class="absolute top-0 right-0 m-4 text-gray-500 focus:outline-none">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.12 12l5.94-5.94a.75.75 0 1 0-1.06-1.06L13 10.94 7.06 5a.75.75 0 1 0-1.06 1.06L11.94 12l-5.94 5.94a.75.75 0 0 0 1.06 1.06L13 13.06l5.94 5.94a.75.75 0 0 0 1.06-1.06L14.12 12z"/>
                </svg>
              </button>
              <ul class="p-4 mt-8">
                <router-link :to="item.href" v-for="item in nav" :key="item.name" class="block text-gray-800 hover:text-cyan-700 hover:bg-cyan-100 px-4 py-2 rounded">{{ item.name }}</router-link>
              </ul>
            </div>
          </div>
        </header>
      </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

import { useRoute } from 'vue-router';
const textColor = ref(null);

const route = useRoute();

watch(route, (to, from) => {
    textColor.value = to.meta.textColor;
    console.log('textColor Valor real: ', to.meta.textColor)
  }, { immediate: true });

const lastScrollTop = ref(0);
const scrollingDown = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
scrollingDown.value = scrollTop > lastScrollTop.value && scrollTop > 100;
lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;

// console.log(to.meta.textColor);
watch(route, (to, from) => {
    if (scrollTop > 1 && to.name === 'proyectos') {
      textColor.value = 'black';
    } else if (scrollTop < 1 && to.name === 'proyectos') {
      textColor.value = 'white';
    }
  }, { immediate: true });


console.log('scroll', scrollTop)
console.log('down', scrollingDown.value)
console.log('top', lastScrollTop.value)
};
window.addEventListener('scroll', handleScroll);

const handleBeforeUnmount = () => {
  window.removeEventListener('scroll', handleScroll);
};

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value) {
    // Deshabilitar scroll del cuerpo de la página cuando se abre el menú
    document.body.style.overflow = 'hidden';
  } else {
    // Habilitar scroll del cuerpo de la página cuando se cierra el menú
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  showMenu.value = false;
  // Habilitar scroll del cuerpo de la página cuando se cierra el menú
  document.body.style.overflow = '';
};

    const nav = [
        { name: 'Inicio', href: '/inicio'},
        { name: 'Acerca de mí', href: '/sobreMi'},
        { name: 'Proyectos', href: '/proyectos'},
        { name: 'Contacto', href: '/contacto'},
    ]

</script>
