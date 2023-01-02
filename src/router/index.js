import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthHandler from "@/components/AuthHandler.vue";
import ImageList   from "@/components/ImageList.vue";
import UploadForm from "@/components/UploadForm.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ImageList
  },
  {
    path: '/upload',
    component: UploadForm
  },
  {
    path: '/oauth2/callback',
    component: AuthHandler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
