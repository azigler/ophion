import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export function initialState () {
  return {
    age: 0,
    initiated: false,
    heartbeat: 10000,
    resources: {
      energy: 0,
      minerals: 0,
      fibers: 0,
      processor: 0,
      bandwidth: 0
    },
    rates: {
      energy: 0,
      minerals: 0,
      fibers: 0,
      processor: 0,
      bandwidth: 0
    },
    log: ['Your sensors flicker to life...'],
    regionName: undefined,
    credits: 400,
    progress: 0
  }
}

const state = initialState()

export const store = new Vuex.Store({
  state,
  mutations: {
    increment (state, payload) {
      if (payload.stash) {
        const stash = state[payload.stash]
        stash[payload.property] += payload.value
        if (payload.value > 0) {
          console.log(`${payload.stash}.${payload.property}: +${payload.value} = ${stash[payload.property]}`)
        } else {
          console.log(`${payload.stash}.${payload.property}: ${payload.value} = ${stash[payload.property]}`)
        }
      } else {
        state[payload.property] += payload.value
        if (payload.value > 0) {
          console.log(`${payload.property}: +${payload.value} = ${state[payload.property]}`)
        } else {
          console.log(`${payload.property}: ${payload.value} = ${state[payload.property]}`)
        }
      }
    },
    toggle (state, payload) {
      state[payload.property] = !state[payload.property]
    },
    addLog (state, payload) {
      // keep only 10 log entries at a time
      if (state.log.length < 10) {
        state.log.unshift(payload.entry)
      } else {
        state.log.pop()
        state.log.unshift(payload.entry)
      }
    },
    nameRegion (state, payload) {
      state.regionName = payload.name
    }
  },
  plugins: [createPersistedState({key: 'ophion'})]
})