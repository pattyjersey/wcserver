import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (componentName) {
    return () => import(`@/components/${componentName}`)
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: load('Home')
        },
        {
            path: '/members',
            name: 'Members',
            component: load('Members')
        }
        
    ]
})

export default router