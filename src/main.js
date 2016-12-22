// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Install vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Set routes
const routes = [
  { path: '/', component: App }
]
// Create router instance
const router = new VueRouter({
  routes // short for routes: routes
})
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
