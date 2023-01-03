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
    console.log(response)
  }
};

const mutations = {
  setImages: (state, images) => state.images = images
};

export default {
  state, getters, actions, mutations
}