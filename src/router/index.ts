import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RoundedImgWithPopupView from '../views/RoundedImgWithPopupView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/roundedimgwithpopup',
        name: 'roundedimgwithpopup',
        component: RoundedImgWithPopupView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
