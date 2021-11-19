import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import V_User from '../views/V_User.vue'
import V_Admin from '../views/V_Admin.vue'
import V_Manager from '../views/V_Manager.vue'

//import FormDateTimepicker from '../views/FormDateTimepicker.vue';
import NewUser from '../views/NewUser.vue';
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {

    path: '/V_User',
    name: 'V_User',
    component: V_User
  },
  {
    path: '/V_Manager',
    name: 'V_Manager',
    component: V_Manager
  },
  {
    path: '/V_Admin',
    name: 'V_Admin',
    component: V_Admin
  },
  {
    path: '/NewUser',
    name: 'NewUser',
    component: NewUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
