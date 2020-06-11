import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../components/Books'
import Authors from '../components/Authors'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Books },
    { path: '/books', name: 'Books', component: Books },
    { path: '/authors', name: 'Authors', component: Authors },
]

export default new VueRouter({
    routes,
    mode: 'history',
})
