import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const host_api = '' // quitar comentario antes de compilar para produccion
const host_api = '' // para desarrollo colocar el host del servidor a consumir

export default new Vuex.Store({
  state: {
    module: 'store',
    stores: [],
    storeSelected: '' 
  },
  mutations: {
    setModule(state, module) {
      state.module = module
    }    
  },
  actions: {
    getStores: async function ({ commit }) {
      const stores = await axios.get(host_api + '/v2/stores')
      console.log(stores.data)
      commit('setStore', stores.data)
    }
  },
  modules: {
  }
})
