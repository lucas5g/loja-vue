import Vue from 'vue'
import VueRouter from 'vue-router'

import UserForm from './pages/UserForm'
import UserList from './pages/UserList'

Vue.use(VueRouter)



const routes = [
  { path: '/', component: UserList },
  { path: '/listar', component: UserList },
  { path: '/cadastrar', component: UserForm },
]

const router = new VueRouter({ routes })

export default router