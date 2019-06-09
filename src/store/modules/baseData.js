import medicine_api from '@/api/medicine'
import disease_api from '@/api/disease'

const data = {
  state: {
    medicines: [],
    diseases: []
  },
  mutations: {
    SET_DATA_MEDICINES: (state, data) => {
      state.medicines = data
    },
    SET_DATA_DISEASE: (state, data) => {
      state.diseases = data
    }
  },
  actions: {
    getAllMedicines({ commit }) {
      return new Promise((resolve, reject) => {
        medicine_api.queryPage({ pageObj: { current: 1, size: 100 }}).then(data => {
          commit('SET_DATA_MEDICINES', data.obj.records)
          resolve(data.obj.records)
        }, err => {
          reject(err.msg)
        })
      })
    },
    getAllDiseases({ commit }) {
      return new Promise((resolve, reject) => {
        disease_api.queryPage({ pageObj: { current: 1, size: 100 }}).then(data => {
          commit('SET_DATA_DISEASE', data.obj.records)
          resolve(data.obj.records)
        }, err => {
          reject(err.msg)
        })
      })
    }
  }
}

export default data
