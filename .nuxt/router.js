import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d146a67 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4ccc452c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _081fb30f = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _1152a790 = () => interopDefault(import('..\\pages\\contactUs.vue' /* webpackChunkName: "pages/contactUs" */))
const _3768cc10 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _3fb4a021 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2d146a67,
    name: "about___en"
  }, {
    path: "/ar",
    component: _4ccc452c,
    name: "index___ar"
  }, {
    path: "/careers",
    component: _081fb30f,
    name: "careers___en"
  }, {
    path: "/contactUs",
    component: _1152a790,
    name: "contactUs___en"
  }, {
    path: "/projects",
    component: _3768cc10,
    name: "projects___en"
  }, {
    path: "/ar/about",
    component: _2d146a67,
    name: "about___ar"
  }, {
    path: "/ar/careers",
    component: _081fb30f,
    name: "careers___ar"
  }, {
    path: "/ar/contactUs",
    component: _1152a790,
    name: "contactUs___ar"
  }, {
    path: "/ar/projects",
    component: _3768cc10,
    name: "projects___ar"
  }, {
    path: "/ar/news/:id?",
    component: _3fb4a021,
    name: "news-id___ar"
  }, {
    path: "/news/:id?",
    component: _3fb4a021,
    name: "news-id___en"
  }, {
    path: "/",
    component: _4ccc452c,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
