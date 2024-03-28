<template>
  <main>
    <div class="overflow-hidden">
      <div class="bg">
        <div class="container mx-auto flex flex-wrap">
          <div class="mt-28 w-full">
            <div class="grid place-content-center gap-5 text-center pr-5 pl-5 md:pr-56 md:pl-56">
              <h1
                class="font-sans text-5xl md:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 mb-4">
                Soy Harold</h1>
              <section
                class="flex flex-col sm:flex-row px-4 items-center justify-center sm:justify-start profile-container">
                <div
                  class="rounded-full relative overflow-hidden w-64 h-60 mb-4 sm:w-96 lg:w-[750px] sm:h-60 transition duration-300 ease-in-out transform hover:scale-125">
                  <img :src="imgMio" alt="Profile photo" class="w-full h-full object-cover" />
                </div>
                <div class="text-left sm:ml-6">
                  <p class="text-cyan-700 mb-4 text-2xl sm:text-3xl">Desarrollador Web de Lima, Perú</p>
                  <p class="text-gray-600 leading-relaxed text-xl sm:text-xl">
                    Soy desarrollador Full Stack con experiencia de 3 años. Actualmente, estoy estudiando la carrera de
                    Ingeniería Informática de Sistemas, cuento con un enfoque sólido en el desarrollo web y las
                    tecnologías asociadas. Mi experiencia y habilidades se centran en el sector tecnológico, donde he
                    trabajado en diversos proyectos tanto de pequeña como de gran escala, brindando soluciones efectivas y
                    escalables.
                  </p>
                </div>
              </section>

              <section class="px-4">
                <h2 class="text-2xl font-bold mb-4 text-left text-gray-800 underline decoration-double">Tecnologías</h2>
                <div class="flex flex-wrap gap-4">
                  <span v-for="skill in skills" :key="skill.id" :class="skill.class" class="py-1 px-3 rounded-md">
                    {{ skill.name }}
                  </span>
                </div>
              </section>
              <section class="py-12">
                <div class="bg-white p-8 rounded-lg shadow-lg w-full">
                  <div class="flex items-center mb-8">
                    <h2 class="text-3xl font-bold mr-4">Mi modo de trabajo</h2>
                    <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm4.4 13.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L10 11.4l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 5 6.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 10l3.6 3.6z" />
                    </svg>
                  </div>
                  <div class="grid grid-cols-2 gap-8 text-left">
                    <div class="bg-gray-200 p-4 rounded-lg">
                      <h3 class="text-xl font-bold mb-1">Metodología</h3>
                      <p class="text-gray-700">
                        Enfoque ágil centrado en la entrega incremental de valor al cliente, utilizando metodologías como
                        Scrum y XP para gestionar proyectos de manera eficiente y adaptativa.
                      </p>
                    </div>
                    <div class="bg-gray-200 p-4 rounded-lg">
                      <h3 class="text-xl font-bold mb-1">Colaboración</h3>
                      <p class="text-gray-700">
                        Experiencia en trabajo en equipo, destacando habilidades de comunicación efectiva, capacidad para
                        liderar y contribuir en proyectos colaborativos, y promover un ambiente de trabajo positivo y
                        productivo.
                      </p>
                    </div>
                    <div class="bg-gray-200 p-4 rounded-lg">
                      <h3 class="text-xl font-bold mb-1">Actualizado</h3>
                      <p class="text-gray-700">
                        Compromiso con el aprendizaje continuo y la actualización constante de habilidades y conocimientos
                        en tecnologías emergentes, estando a la vanguardia de las noticias mas actualizadas de las
                        tecnologías.
                      </p>
                    </div>
                    <div class="bg-gray-200 p-4 rounded-lg">
                      <h3 class="text-xl font-bold mb-1">Desarrollo</h3>
                      <p class="text-gray-700">
                        Pasión por el desarrollo de software, con habilidades sólidas en diseño y desarrollo de
                        aplicaciones web, enfocadas en la creación de experiencias de usuario intuitivas y funcionales.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="py-2">
                <div class="container mx-auto px-4 text-left">
                  <h1 class="text-2xl font-bold mb-4 text-left text-gray-800 underline decoration-double">Mas sobre mí
                  </h1>
                  <div class="text-xl text-gray-600">
                    <p class="mb-4">Nací en Lima, Perú en 1999. Mi fascinación por la tecnología se manifestó desde
                      temprana edad. Experimentaba con la computadora, resolviendo problemas y haciendo modificaciones por
                      mi cuenta. En la escuela, destacaba en los cursos de tecnología, alimentando mi pasión por la
                      informática.</p>
                    <p class="mb-4">Tras la graduación, comencé a explorar el desarrollo de aplicaciones de escritorio,
                      enfrentando desafíos pero persistiendo hasta lograr crear aplicaciones funcionales. Mi ingreso a la
                      universidad marcó el inicio de mi viaje en el desarrollo web. Trabajando arduamente y colaborando
                      con compañeros, dominé las herramientas y técnicas en solo un año.</p>
                    <p class="mb-4">Mi trayectoria incluye proyectos diversos, desde e-commerce en PHP hasta sistemas
                      complejos en Symfony. Participé en la creación de una plataforma de generación de QR y un exitoso
                      proyecto de Quiz Data Science en la universidad. También exploré ASP.NET con un proyecto de
                      e-commerce y un sistema de alquileres.</p>
                    <p class="mb-4">Actualmente, estoy explorando la geolocalización y trabajando en diversos proyectos
                      para expandir mis habilidades. Co-fundé KSPERU, una comunidad de desarrollo web, donde compartimos
                      conocimientos y experiencias.</p>
                    <p class="class mb-4">Este es solo un vistazo de mi apasionante viaje en el mundo de la tecnología.
                      Estoy emocionado por la posibilidad de trabajar juntos y compartir más sobre mi experiencia y
                      habilidades.</p>
                  </div>
                </div>
              </section>
              <section>
                <div class="container mx-auto px-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="w-full md:w-1/2 px-2 mb-4 group">
                      <div class="relative image-container"> <img src="https://source.unsplash.com/random/600x400?sig=2"
                          alt="Image 1" class="w-full h-full object-cover object-center rounded-lg">
                        <div
                        class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-sm tooltiptext bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Tooltip text for Image 1 </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-2 mb-4 group">
                    <div class="relative image-container"> <img src="https://source.unsplash.com/random/600x400?sig=3"
                        alt="Image 2" class="w-full h-full object-cover object-center rounded-lg">
                      <div
                        class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-sm tooltiptext bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Tooltip text for Image 2 </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</main></template>

<script setup>
import imgMio from "../../img/FotoMia.png";
import Footer from "./Footer.vue";

const skills = [
  { id: 1, name: 'HTML', class: 'bg-orange-500 text-white' },
  { id: 2, name: 'CSS', class: 'bg-sky-500 text-white' },
  { id: 3, name: 'JavaScript', class: 'bg-yellow-500 text-white' },
  { id: 4, name: 'React', class: 'bg-cyan-400 text-white' },
  { id: 5, name: 'Vue', class: 'bg-green-700 text-white' },
  { id: 6, name: 'Tailwind CSS', class: 'bg-emerald-500 text-white' },
  { id: 6, name: 'Bootstrap', class: 'bg-violet-600 text-white' },
  { id: 6, name: 'Material UI', class: 'bg-sky-500 text-white' },
  { id: 7, name: 'PHP', class: 'bg-indigo-400 text-white' },
  { id: 8, name: 'Symfony', class: 'bg-black text-white' },
  { id: 9, name: 'Laravel', class: 'bg-red-500 text-white' },
  { id: 10, name: 'SQL Server', class: 'bg-slate-400 text-white' },
  { id: 11, name: 'Mongodb', class: 'bg-green-500 text-white' },
  { id: 12, name: 'MySQL', class: 'bg-cyan-700 text-white' },
  { id: 13, name: 'Git', class: 'bg-orange-600 text-white' }
];
</script>