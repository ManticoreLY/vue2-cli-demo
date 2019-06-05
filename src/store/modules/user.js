import { getToken } from '@/utils/auth'
import UserApi from '@/api/user'
import { removeToken, setToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        UserApi.login(user).then(data => {
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }, err => {
          console.log(err)
          reject()
        })
      })
    },
    logout({ commit }, user) {
      return new Promise((resolve, reject) => {
        UserApi.logout(user).then(data => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }, err => {
          console.log(err)
          reject
        })
      })
    }
  }
}

export default user
