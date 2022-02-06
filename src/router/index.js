import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Request from '@/views/Request.vue'
import CreateNewRequest from '@/views/CreateNewRequest.vue'
import RequestInform from '@/views/RequestInform.vue'
import AddRequestInform from '@/views/AddRequestInform.vue'
import RequestFullInform from '@/views/RequestFullInform.vue'
import AdminRequestList from '@/views/AdminRequestList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
  {
    path: '/adminRequestList',
    name: 'AdminRequestList',
    component: AdminRequestList
  },
  {
    path: '/request/create',
    name: 'CreateNewRequest',
    component: CreateNewRequest
  },
  {
    path: '/request/inform',
    name: 'RequestInform',
    component: RequestInform
  },
  {
    path: '/request/add_inform',
    name: 'AddRequestInform',
    component: AddRequestInform
  },
  {
    path: '/request/full_inform',
    name: 'RequestFullInform',
    component: RequestFullInform
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
