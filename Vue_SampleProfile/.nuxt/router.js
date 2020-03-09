import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a34c649 = () => interopDefault(import('..\\pages\\empty.vue' /* webpackChunkName: "pages_empty" */))
const _385dc265 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _4a2934a6 = () => interopDefault(import('..\\pages\\project\\Index.vue' /* webpackChunkName: "pages_project_Index" */))
const _6eb61f4e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/empty",
    component: _4a34c649,
    name: "empty"
  }, {
    path: "/login",
    component: _385dc265,
    name: "login"
  }, {
    path: "/project/Index",
    component: _4a2934a6,
    name: "project-Index"
  }, {
    path: "/",
    component: _6eb61f4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
