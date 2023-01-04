import api from '@/api/imgur';
import { router } from '@/router'

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  fetchImages: async (context) => {
    const { token  } = context.rootState.auth;
    const response = await api.fetchImages(token)
    context.commit('setImages', response.data.data)
  },
  uploadImages: async (context, images) => {
    const { token } = context.rootState.auth
    await api.uploadImages(images, token);
    router.push('/');
  }
};

const mutations = {
  setImages: (state, images) => state.images = images
};

export default {
  state, getters, actions, mutations
}
