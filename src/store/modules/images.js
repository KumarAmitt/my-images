import api from '@/api/imgur';

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
  }
};

const mutations = {
  setImages: (state, images) => state.images = images
};

export default {
  state, getters, actions, mutations
}
