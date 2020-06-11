require('./bootstrap')

import router from './router'
// import store from './store'
import app from './components/App'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Multiselect from 'vue-multiselect'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// register globally
Vue.component('multiselect', Multiselect)



// import { sync } from 'vuex-router-sync'

// sync(store, router)

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(app),
})
