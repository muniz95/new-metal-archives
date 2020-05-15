import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: localStorage.getItem('jwt'),
    authenticated: false
  },
  mutations: {
    setToken (state) {
      state.jwt = localStorage.getItem('jwt')
    },
    revokeToken (state) {
      state.jwt = ''
    }
  },
  actions: {

  }
})
