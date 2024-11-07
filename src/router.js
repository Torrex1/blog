import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/HomePage.vue";

const routes = [
    { 
        path: "/", 
        component: Home 
    },
    { 
        path: "/registration", 
        component: () => import("./pages/RegistrationPage.vue") 
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
