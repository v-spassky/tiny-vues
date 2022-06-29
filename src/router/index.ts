import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import RoundedImgWithPopupView from '../views/RoundedImgWithPopupView.vue'
import CircularLayoutView from '../views/CircularLayoutView.vue'
import ArrowDropdownView from '../views/ArrowDropdownView.vue'

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
    },
    {
        path: '/arrowdropdown',
        name: 'arrowdropdown',
        component: ArrowDropdownView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
