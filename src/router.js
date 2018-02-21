import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Product from './views/Product.vue'
import Contact from './views/Contact.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
