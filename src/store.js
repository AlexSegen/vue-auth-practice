import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '' || 'Sin nombre',
      email: ''
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
    CHECK_AUTH:({commit}) => {
      
      let session = localStorage.getItem('_SESSION');

      if(session != null) {
        commit("SET_AUTH", true);
        commit("SET_USER", JSON.parse(session).user);
        commit("SET_TOKEN", JSON.parse(session).token);        
      }

    },
    LOGIN:(context, payload) => {
      context.commit('SET_AUTH', payload);
    },
    LOGOUT:({commit}) => {
      localStorage.removeItem('_SESSION');
      commit("SET_AUTH", false);
      commit("SET_USER", {});
      commit("SET_TOKEN", '');
      router.push('/login')
    }

  }
})
