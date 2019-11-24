import Vue from 'vue'
import Vuex from 'vuex'
import state from  './state'
// optional configuration
import pathify from './pathify'
import { make } from 'vuex-pathify'

pathify.debug()

Vue.use(Vuex)
const mutations = {
  ...make.mutations(state),
  addGame (state, game) {
    // mutate state
    state.items.push(game)
  }
}
const actions = make.actions(state)
const getters = make.getters(state)
// store
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [pathify.plugin],

})

export default store
window.store = store