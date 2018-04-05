<template>
  <section class="is-parent tile is-6">
    <div class="panel actions tile is-child box">
      <h3>
        Actions
      </h3>
      <div class="action-list">
        <action-button
          v-for="(item, index) in availableActions"
          :key="index"
          v-bind="actions[item]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { initialState } from '@/store'
import PanelActionsButton from '@/components/PanelActionsButton'
import tracery from 'tracery-grammar'
import grammar from '@/assets/grammar'

const corpus = tracery.createGrammar(grammar)
corpus.addModifiers(tracery.baseEngModifiers)

export default {
  name: 'PanelActions',
  computed: mapState([
    'regionName', 'resources', 'age', 'availableActions'
  ]),
  data () {
    const actions = {
      scan: {
        method: this.scan,
        title: 'Scan Region'
      },
      log: {
        method: this.log,
        title: 'Log'
      },
      reap: {
        method: this.reap,
        title: 'Reap'
      },
      clearStorage: {
        method: this.clearStorage,
        title: 'Clear Storage'
      }
    }
    return { actions }
  },
  methods: {
    scan () {
      const text = 'You fold open your beaming head...'
      this.$store.commit('addLog', { text })
      this.$store.commit('increment', { property: 'energy', value: 1, stash: 'rates' })
      this.$store.commit('toggleAction', { action: 'scan' })
      // TODO: add modal for describing region & prompting for name
    },
    log () {
      this.$store.commit('nameRegion', { name: 'Yhuli' })
      console.log(corpus.flatten('#regionName#'))
      this.$store.commit('increment', { property: 'fibers', value: 1, stash: 'resources' })
    },
    reap () {
      this.$store.commit('increment', { property: 'progress', value: 1 })
      this.$store.commit('addLog', { text: `${corpus.flatten('#testLog#')}`, hasModal: true })
    },
    clearStorage () {
      console.log('Resetting state...')
      const s = initialState()
      this.$store.replaceState(s)
    }
  },
  components: {'action-button': PanelActionsButton}
}
</script>

<style lang="scss">
.panel {
  .action-list {
    text-align: left;
  }
}
</style>
