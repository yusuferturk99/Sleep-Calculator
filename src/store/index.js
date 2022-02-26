import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLanguage: false,
    myWakeUpTime: Number,
  },
  mutations: {
    WakeUp(state, payload){
      state.myWakeUpTime = payload.myWakeUpTime
    },
    myWakeUpTimeFirst(state, n){
      state.myWakeUpTime += n
    },
    myWakeUpTimeSecond(state, n){
      state.myWakeUpTime += n
    },
    myWakeUpTimeThird(state, n){
      state.myWakeUpTime += n
    },
    myWakeUpTimeFourth(state, n){
      state.myWakeUpTime += n
    },
    myWakeUpTimeFifth(state, n){
      state.myWakeUpTime += n
    },
    myWakeUpTimeSixth(state, n){
      state.myWakeUpTime += n
    },
  },
  actions: {
  },
  getters: {
  }
})
