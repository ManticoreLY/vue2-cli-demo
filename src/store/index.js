import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import user from './modules/user'
import baseData from './modules/baseData'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu,
    user,
    baseData
  },
  getters
})

export default store
