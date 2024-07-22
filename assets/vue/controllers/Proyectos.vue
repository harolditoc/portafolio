<template>
    <main>
        <div class="overflow-hidden bg-white">
            <section class="ts bg-cover bg-no-repeat bg-center md:bg-white/25 text-center pt-20 sm:pt-24 md:pt-28 h-[700px] pr-5 pl-5">
              <div class="container mx-auto max-w-[700px] md:mt-20">
                <h1 class="text-white relative z-10 text-4xl md:text-6xl font-extrabold mb-8">Mis proyectos<br></h1>
                <h2 class="text-lg md:text-xl relative z-10 text-white leading-relaxed">
                  Con un enfoque integral en el desarrollo tanto del servidor como del cliente, te presento mis proyectos. Cada uno diseñado para ofrecer soluciones completas y centradas en el usuario. 
                </h2>
              </div>
              <div class="overlay"></div>
            </section>
            <div class="mt-20">
                <section class="content">
                  <div class="container mx-auto max-w-6xl">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 -mt-40 pr-5 pl-5 z-50">             
                      <div v-for="proyecto in proyectos" class="bg-gray-100 border border-gray-300 shadow-md rounded-lg overflow-hidden z-10 marco portada hijo principal">
                        <img :src="proyecto.imagen" alt="Project 1" class="w-40 h-28 mx-auto my-auto block mt-5">
                        <div class="p-4 text-center descripcion">
                          <h2 class="text-2xl font-bold text-black mb-2">{{ proyecto.titulo }}</h2>
                          <p class="text-black mb-4">{{ proyecto.descripcion }}</p>
                          <div class="flex flex-wrap gap-2 items-center mt-4">
                            <span v-for="tech in proyecto.tecnologias" class="bg-gray-200 text-gray-800 py-1 px-2 rounded">{{tech}}</span>                     
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
            <div ref="animatedElement" @click="animateElement">Haz clic para animar</div>
            <Footer />
        </div>
    </main>
</template>

<script setup>
import asapServs from "../../img/asapServices.png";
import quintaOla from "../../img/quintaola.png";
import bgProject from "../../img/bg-projects.jpg";
import Footer from "../controllers/Footer.vue";
import anime from '../../../public/lib/anime.es.js'
import { ref } from 'vue';
const animatedElement = ref(null);
const animateElement = () => {
  anime({
    targets: animatedElement.value,
    opacity: 0, // Cambia la opacidad a 0
    duration: 1000, // Duración de la animación en milisegundos
    easing: 'easeInOutQuad' // Tipo de easing
  });
};

const proyectos = [
  {
    imagen: asapServs,
    titulo: 'Asap Services',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Sistema de reservas para servicios del hogar',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Bootstrap', 'Symfony', 'MySQL'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Quinta CRM',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'CRM para gestionar las ',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Bootstrap', 'Symfony', 'MySQL'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'KSPERU',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Sitio web para ofrecer servicios de ',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Bootstrap', 'React', 'Symfony', 'MySQL'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Tienda KSPERU',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Sistema de comercio electronico (SPA)',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Vue', 'Symfony', 'MySQL'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Eventos',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Generador de QR de datos de usuario.',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Bootstrap', 'Symfony', 'MySQL'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Quiz Data Science',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Generador de encuestas para ciencia de datos.',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Symfony', 'SQL Server'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Alquiler',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Generador de QR de datos de usuario.',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'ASP.NET', 'SQL Server'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'Portafolio',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Sitio web personal para presentar mis proyectos',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Tailwind', 'Vue', 'Symfony', 'SQL Server'
    ]
  },
  {
    imagen: quintaOla,
    titulo: 'La tiendita',
    // descripcion: 'Responsable del desarrollo y diseño de la interfaz de usuario utilizando HTML, CSS y JavaScript.',
    descripcion: 'Sistema de comercio electronico',
    tecnologias: [
      'HTML', 'CSS', 'JS', 'Symfony', 'MySQL'
    ]
  },
  // {
  //   title: 'Desarrollador Web Full Stack',
  //   company: 'Empresa XYZ',
  //   description: 'Participé en el desarrollo de aplicaciones web completas utilizando tecnologías como Vue.js, Node.js y MongoDB.'
  // },
  // {
  //   title: 'Desarrollador Web Full Stack',
  //   company: 'Empresa XYZ',
  //   description: 'Participé en el desarrollo de aplicaciones web completas utilizando tecnologías como Vue.js, Node.js y MongoDB.'
  // },
  // {
  //   title: 'Desarrollador Web Full Stack',
  //   company: 'Empresa XYZ',
  //   description: 'Participé en el desarrollo de aplicaciones web completas utilizando tecnologías como Vue.js, Node.js y MongoDB.'
  // },
  // Agrega más roles según sea necesario
];
</script>