import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '' || 'Sin nombre',
      email: '' || 'Sin correo'
    },
    token: '',
    loggedIn: false
  },
  getters: {
    USER: state => {
      return state.user
    },
    AUTHENTICADED: state => {
      return state.loggedIn
    },
    TOKEN: state => {
      return state.token
    }
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_AUTH: (state, payload) => {
      state.loggedIn = payload;
    },
    SET_TOKEN: (state, payload) => {
      state.token = payload;
    }
  },
  actions: {
    LOGIN:(context, payload) => {
      context.commit('SET_AUTH', payload);
    }

  }
})
