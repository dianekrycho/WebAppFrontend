import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: null,
    locations: null,
    locationId:null,
    locationDetails: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setLocations(state,locations){
      state.locations = locations
    },
    setLocationId(state,locationId){
      state.locationId = locationId
    },
    setLocationDetails(state,locationDetails){
      state.locationDetails = locationDetails
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setLocations({ commit }, locations) {
      commit('setLocations', locations);
    },
    setLocationId({ commit }, locationId) {
      commit('setLocationId', locationId);
    },
    setLocationDetails({ commit }, locationDetails) {
      commit('setLocationDetails', locationDetails);
    },
  },
  modules: {
  }
})
export default store