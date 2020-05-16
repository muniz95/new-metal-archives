import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: localStorage.getItem('jwt'),
    user: JSON.parse(localStorage.getItem('user')),
    authenticated: false
  },
  mutations: {
    authenticate (state) {
      state.jwt = localStorage.getItem('jwt')
      state.user = localStorage.getItem('user')
    },
    unauthenticate (state) {
      state.jwt = ''
      state.jwt = null
    }
  },
  actions: {

  }
})
