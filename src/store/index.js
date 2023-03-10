import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import images from '@/store/modules/images'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    images
  }
})
