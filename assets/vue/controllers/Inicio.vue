<template>
    <main>
        <div class=" overflow-hidden">
          <div class="bg-sec1">
            <section class="container mx-auto flex flex-wrap">
              <div class="w-full">  
                <div class="h-screen grid place-content-center gap-5 text-center pr-5 pl-5 md:pr-56 md:pl-56">  
                  <span class="text-cyan-700 text-4xl md:text-7xl font-extrabold">Full Stack Developer. <br></span>
                  <h1 class="text-lg md:text-3xl font-semibold">
                    Mi enfoque abarca tanto el desarrollo del lado del servidor como el del cliente, lo que me permite ofrecer soluciones completas y centradas en el usuario.
                  </h1>
                  <article class="flex gap-5 place-content-center">
                    <a href="" class="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 font-medium py-2 px-10 md:px-28 text-center me-2 mb-2">Proyectos</a>
                    <a href="" class="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 font-medium py-2 px-10 md:px-28 text-center me-2 mb-2">CV</a>
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
                  <h2 class="text-center md:text-right text-2xl underline decoration-double mb-4 md:mb-8 max-[767px]:text-white">¿Cómo comencé?</h2>
                  <img src="https://i.imgur.com/ly7D9VF.png" alt="">
                  <p class="text-gray-700 text-center md:text-right leading-loose grid place-content-center h-[350px] max-[767px]:text-white">
                    ¡Hola! Soy Harold Chambilla. Mi gusto por la tecnología parte desde mi niñez, por lo que adaptarme a las nuevas tecnologías ha sido algo emocionante. Decidí estudiar la carrera de Ingeniería Informática y de Sistemas, lo cual me ayudó a conocer más sobre el mundo de la tecnología. Tengo un gran interés en crear soluciones impactantes, lo que me ha llevado a explorar y dominar diversas áreas del desarrollo web.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="h-full flex flex-col justify-center items-center md:items-start p-4 md:p-8 text-white">
                  <h2 class="text-center md:text-left text-2xl underline decoration-double mb-4 md:mb-8 max-[767px]:text-black">¿Cómo trabajo?</h2>
                  <p class="text-center md:text-left leading-loose mb-4 md:mb-0 grid place-content-center h-[350px] max-[767px]:h-[320px] max-[767px]:text-black">
                    Mi experiencia abarca desde el diseño y desarrollo de interfaces atractivas hasta la implementación robusta de lógica empresarial en el lado del servidor. Trabajo con entusiasmo con el objetivo de mejorar mis habilidades, aprendiendo y creciendo profesionalmente.
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
                  <div class="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- Ejemplo de un rol -->
                    <div v-for="(role, index) in roles" :key="index" class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg font-medium text-gray-900">{{ role.titulo }}</h3>
                        <p class="mt-1 text-sm text-gray-500">{{ role.compañia }}</p>
                      </div>
                      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
                        <p class="text-sm text-gray-500">{{ role.descripcion }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container mx-auto py-12">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <!-- Ejemplo de imagen -->
                      <div v-for="(image, index) in images" :key="index" class="relative border-solid border-2 border-cyan-700">
                        <div class="group overflow-hidden">
                          <picture>
                            <source :srcset="image.webp" type="image/webp">
                            <img :src="image.jpg" :alt="image.alt" class="object-cover w-full transition-transform duration-300 transform group-hover:scale-110">
                          </picture>
                          <!-- Overlay para mostrar información adicional si es necesario -->
                          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                            <!-- Aquí puedes agregar información adicional, como el título de la imagen -->
                            <div class="text-white text-center absolute inset-0 flex justify-center items-center">
                              <h3 class="text-lg font-bold">{{ image.title }}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <router-link to="/proyectos" class="flex text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 font-medium py-2 px-10 md:px-28 text-center me-2 mb-2">
                      Ver Proyectos --->
                    </router-link>
                  </div>
                </div>
              </div>
            </section> 
          </div>
        </div>
      </main>
</template>

<script setup>
import imgAsap from "../../img/CollageAsapServices.png"
import imgQuiz from "../../img/QuizDataScience.png"
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