import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Proyectos from "../Proyectos.vue";
import Inicio from "../Inicio.vue";
import sobreMi from "../Yo.vue";

const routes = [
    {
        name: 'inicios',
        path: '/inicio',
        component: Inicio,
        meta: { textColor: 'black' }
    },
    {
        name: 'sobreMi',
        path: '/sobreMi',
        component: sobreMi,
        meta: { textColor: 'black' }
    },
    {
        name: 'proyectos',
        path: '/proyectos',
        component: Proyectos,
        meta: { textColor: 'white' }
    }
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        } else {
          return { left: 0, top: 0 };
        }
      }
})