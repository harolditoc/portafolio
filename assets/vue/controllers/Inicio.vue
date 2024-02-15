<template>
  <main>
    <div class="overflow-hidden">
      <div class="bg-sec1">
        <section class="container mx-auto flex flex-wrap">
          <div class="w-full">
            <div class="h-screen grid place-content-center gap-5 text-center pr-5 pl-5 md:pr-56 md:pl-56">
              <span class="text-cyan-700 text-4xl md:text-7xl font-extrabold">Full Stack Developer. <br></span>
              <h1 class="text-lg md:text-3xl font-semibold">
                Mi enfoque abarca tanto el desarrollo del lado del servidor como el del cliente, lo que me permite ofrecer
                soluciones completas y centradas en el usuario.
              </h1>
              <article class="flex gap-5 place-content-center">
                <a href=""
                  class="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 font-medium py-2 px-10 md:px-28 text-center me-2 mb-2">Proyectos</a>
                <a href=""
                  class="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 font-medium py-2 px-10 md:px-28 text-center me-2 mb-2">CV</a>
              </article>
            </div>
          </div>
        </section>
      </div>
      <!-- <div class="bg-gradient-to-r from-blue-400 to-blue-50"> -->
      <div class="bg-sec2">
        <section class="container mx-auto flex flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="h-screen flex flex-col justify-center items-center md:items-end p-4 md:p-8">
              <h2
                class="text-center md:text-right text-2xl underline decoration-double mb-4 md:mb-8 max-[767px]:text-white">
                ¿Cómo comencé?</h2>
              <img src="https://i.imgur.com/ly7D9VF.png" alt="">
              <p
                class="text-gray-700 text-center md:text-right leading-loose grid place-content-center h-[350px] max-[767px]:text-white">
                Mi pasión por la tecnología nació en mi infancia, lo que me llevó a estudiar Ingeniería Informática y de
                Sistemas. Me encanta crear soluciones impactantes y me adapto rapidamente a las nuevas tecnologías, lo que
                me ha llevado a explorar y dominar diversas áreas del desarrollo web.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="h-full flex flex-col justify-center items-center md:items-start p-4 md:p-8 text-white">
              <h2
                class="text-center md:text-left text-2xl underline decoration-double mb-4 md:mb-8 max-[767px]:text-black">
                ¿Cómo trabajo?</h2>
              <p
                class="text-center md:text-left leading-loose mb-4 md:mb-0 grid place-content-center h-[350px] max-[767px]:h-[320px] max-[767px]:text-black">
                Mi experiencia abarca desde el diseño y desarrollo de interfaces atractivas hasta la implementación
                robusta de lógica empresarial en el lado del servidor. Trabajo con entusiasmo con el objetivo de mejorar
                mis habilidades, aprendiendo y creciendo profesionalmente.
              </p>
              <img src="https://i.imgur.com/3MKu1ey.png" alt="">
            </div>
          </div>
        </section>
      </div>
      <div class="bg-sec3">
        <section class="container mx-auto px-4">
          <div class="py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 class="text-center text-2xl underline decoration-double">Algunas contribuciones</h2>      

              <div class="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mt-12">
                <div class="flex-1"> <img src="https://source.unsplash.com/random/600x400?sig=1" alt="Project 1"
                    class="rounded-lg shadow-lg transform transition hover:scale-110 duration-300"> </div>
                <div class="flex-1">
                  <div class="p-8 rounded-lg shadow-lg bg-white">
                    <h2 class="text-3xl font-semibold mb-4">Quiz Data Science</h2>
                    <p class="text-gray-600 mb-6">El objetivo de este proyecto fue medir el conocimiento que tienen los estudiantes de forma creativa, con un juego de preguntas relacionadas a la nueva carrera de Ciencia de Datos.</p> <a href="#"
                      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Learn
                      More</a>
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col lg:flex-row-reverse items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
                <div class="flex-1"> <img src="https://source.unsplash.com/random/600x400?sig=2" alt="Project 2"
                    class="rounded-lg shadow-lg transform transition hover:scale-110 duration-300"> </div>
                <div class="flex-1">
                  <div class="p-8 rounded-lg shadow-lg bg-white">
                    <h2 class="text-3xl font-semibold mb-4">Asap Services</h2>
                    <p class="text-gray-600 mb-6">El objetivo de este proyecto fue conectar a usuarios con proveedores de servicios en el ámbito del hogar, con un sistema de reserva a través de un chat.</p> <a href="#"
                      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Learn
                      More</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </div>
</main>
</template>

<script setup>
import imgAsap from "../../img/CollageAsapServices.png"
import imgQuiz from "../../img/QuizDataScience.png"
import Footer from "./Footer.vue";
const images = [
  { jpg: 'imgAsap', webp: 'imgAsap', alt: 'Proyecto Asap Services', title: 'Asap Services' },
  { jpg: 'imgQuiz', webp: 'imgQuiz', alt: 'Proyecto Quiz Data Science', title: 'Quiz Data Science' },
  // Agrega más imágenes según sea necesario
];
const roles = [
  {
    titulo: 'Desarrollador Web Backend',
    compañia: 'Universidad San Ignacio de Loyola',
    descripcion: 'Sistema de reserva de servicios domesticos.'
  },
  {
    titulo: 'Desarrollador Web Backend',
    compañia: 'Universidad San Ignacio de Loyola',
    descripcion: 'Arcade de preguntas para apertura de nueva carrera.'
  },
  {
    titulo: 'Desarrollador Web Backend',
    compañia: 'Quinta Ola ONG',
    descripcion: 'Sistema para gestionar la relacion con los clientes (CRM).'
  },
  // Agrega más roles según sea necesario
];
</script>