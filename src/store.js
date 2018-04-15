import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import tracery from 'tracery-grammar'
import baseGrammar from '@/assets/grammar/base'
import initGrammar from '@/assets/grammar/init'

const grammar = {...initGrammar, ...baseGrammar}

const corpus = tracery.createGrammar(grammar)
corpus.addModifiers(tracery.baseEngModifiers)

Vue.use(Vuex)

export function initialState () {
  return {
    beat: 0,
    heartrate: 10000,
    logLength: 100,
    level: 1,
    exp: 0,
    maxExp: 100,
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
    structures: {
      tentaCLAW: 0,
      solarTurf: 0
    },
    head: {
      inner: 'Ophion'
    },
    availableActions: ['scan'],
    log: [{ text: corpus.flatten('#initFragment.capitalize#...') }],
    regionName: undefined,
    namingInspiration: undefined
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
    toggleAction (state, payload) {
      if (state.availableActions.includes(payload.action)) {
        state.availableActions = state.availableActions.filter(action => action !== payload.action)
      } else {
        state.availableActions.push(payload.action)
      }
    },
    addLog (state, payload) {
      // keep only a certain amount of log entries at any given time
      if (state.log.length < state.logLength) {
        state.log.unshift(payload)
      } else {
        state.log.pop()
        state.log.unshift(payload)
      }
    },
    setValue (state, payload) {
      state[payload.property] = payload.value
      console.log(`${payload.property} set to: ${payload.value}`)
    },
    addAction (state, payload) {
      state.availableActions = [...new Set([...state.availableActions, ...payload])]
    },
    removeAction (state, payload) {
      state.availableActions = state.availableActions.filter(action => payload.indexOf(action) < 0)
    },
    addStructure (state, payload) {
      state.structures[payload.name] += payload.value
    }
  },
  getters: {
    getLog: state => {
      return state.log
    },
    getRegionName: state => {
      return state.regionName
    },
    getNamingInspiration: state => {
      return state.namingInspiration
    }
  },
  plugins: [createPersistedState({key: 'ophion'})]
})
