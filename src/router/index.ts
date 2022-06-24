import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import RoundedImgWithPopupView from '../views/RoundedImgWithPopupView.vue'
import CircularLayoutView from '../views/CircularLayoutView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/roundedimgwithpopup',
        name: 'roundedimgwithpopup',
        component: RoundedImgWithPopupView
    },
    {
        path: '/circularlayout',
        name: 'circularlayout',
        component: CircularLayoutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
