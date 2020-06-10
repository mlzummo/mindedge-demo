import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../components/Books'

Vue.use(VueRouter)

const routes = [
    // { path: '/articles/create', name: 'createArticle', component: require('components/article/Article-create') },
    // { path: '/articles/page/:page', name: 'articlesPage', component: require('components/article/Article-list') },
    // { path: '/articles/edit/:id', name: 'articleEdit', component: require('components/article/Article-edit') },
    // { path: '/article/:id', name: 'article', component: require('components/article/Article') },
    // { path: '/articles', name: 'articles', component: require('components/article/Article-list') },
    // { path: '/login', name: 'login', component: require('components/auth/Login') },
    // { path: '/register', name: 'register', component: require('components/auth/Register') },

    { path: '/', name: 'Home', component: Books },
    { path: '/authors', name: 'Authors', component: Books },

]

export default new VueRouter({
    routes,
    mode: 'history',
})
