import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import usersIndex from '../components/users/index.vue'
import notFound from '../components/users/NotFound.vue'

const routes = [

    {
        path:'/',
        component: usersIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }

]

const router = createRouter({

    history: createWebHistory(),
    routes

})

export default router