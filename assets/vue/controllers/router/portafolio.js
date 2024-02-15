import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Proyectos from "../Proyectos.vue";
import Inicio from "../Inicio.vue";
import sobreMi from "../Yo.vue";

const routes = [
    {
        name: 'inicios',
        path: '/inicio',
        component: Inicio
    },
    {
        name: 'sobreMi',
        path: '/sobreMi',
        component: sobreMi
    },
    {
        name: 'proyectos',
        path: '/proyectos',
        component: Proyectos
    }
];
export const router = createRouter({
    history: createWebHistory(),
    routes
})