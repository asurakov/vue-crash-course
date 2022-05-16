import Home from "@/pages/Home";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('@/pages/Todos.vue')
    }
]

const router = createRouter({    
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;