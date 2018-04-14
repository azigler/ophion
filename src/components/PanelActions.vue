<template>
  <section class='is-parent tile is-6'>
    <div class='panel actions tile is-child box'>
      <div class="reset">
        <b-icon
          pack="fa"
          icon="trash-alt"
          type="is-dark-grey"
          @click.native="clearStorage()"
        />
      </div>
      <h3>
        Actions
      </h3>
      <div class='action-list'>
        <action-button
          v-for='(item, index) in availableActions'
          :key='index'
          v-bind='actions[item]'
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { initialState } from '@/store'
import PanelActionsButton from '@/components/PanelActionsButton'
import ModalScanRegion from '@/components/ModalScanRegion'
import ModalBuild from '@/components/ModalBuild'
import tracery from 'tracery-grammar'
import baseGrammar from '@/assets/grammar/base'
import initGrammar from '@/assets/grammar/init'

const grammar = {...initGrammar, ...baseGrammar}

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
      reap: {
        method: this.reap,
        title: 'Reap'
      },
      dig: {
        method: this.dig,
        title: 'Dig'
      },
      build: {
        method: this.build,
        title: 'Build'
      }
    }
    return { actions }
  },
  methods: {
    scan () {
      const regionName = corpus.flatten('#regionName#') + ' ' + this.romanize(this.randomNumberInRange(1, 49))
      this.$store.commit('setValue', { property: 'regionName', value: regionName })
      this.$store.commit('setValue', { property: 'namingInspiration', value: corpus.flatten('the #namingInspiration#') })
      this.$store.commit('addLog', { text: corpus.flatten('#scanLog.capitalize#.'), modal: 'scanRegion' })
      this.$store.commit('increment', { property: 'energy', value: 1, stash: 'rates' })
      this.$modal.open({
        component: ModalScanRegion
      })
      this.$store.commit('addAction', ['dig', 'build'])
      this.$store.commit('removeAction', ['scan'])
    },
    dig () {
      this.$store.commit('addLog', { text: `${corpus.flatten('#testLog#')}`, modal: 'log' })
      this.$store.commit('increment', { property: 'exp', value: 1 })
      if (this.resources.energy > 0) {
        this.$store.commit('increment', { property: 'energy', value: -1, stash: 'resources' })
        this.$store.commit('increment', { property: 'minerals', value: 1, stash: 'resources' })
      } else {
        console.log('Not enough energy!')
      }
    },
    build () {
      this.$modal.open({
        component: ModalBuild,
        parent: this
      })
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

<style lang='scss'>
.panel.actions {
  position: relative;

  .reset {
    top: 0%;
    left: 93%;
    position: absolute;
    font-size: 9px!important;

    &:hover {
      cursor: pointer;

      .has-text-dark {
        color: $yellow!important;
      }
    }
  }

  .action-list {
    text-align: left;
  }
}
</style>
