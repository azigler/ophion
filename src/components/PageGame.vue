<template>
  <main>
    <div class="tile is-ancestor">
      <div class="tile top row is-parent">
        <panel-actions/>
        <panel-resources/>
        <panel-structures/>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile bottom row is-parent">
        <panel-log/>
        <panel-flora/>
        <panel-fauna/>
      </div>
    </div>
  </main>
</template>

<script>
import PanelActions from '@/components/PanelActions'
import PanelResources from '@/components/PanelResources'
import PanelStructures from '@/components/PanelStructures'
import PanelLog from '@/components/PanelLog'
import PanelFlora from '@/components/PanelFlora'
import PanelFauna from '@/components/PanelFauna'

export default {
  name: 'PageGame',
  components: {
    'panel-actions': PanelActions,
    'panel-resources': PanelResources,
    'panel-structures': PanelStructures,
    'panel-log': PanelLog,
    'panel-flora': PanelFlora,
    'panel-fauna': PanelFauna
  },
  methods: {
    heartbeat: function () {
      // TODO: rewrite to collate 'rates' from structure and biota objects instead
      for (let rate in this.$store.state.rates) {
        if (this.$store.state.rates[rate] > 0) {
          this.$store.commit('increment', { property: rate, value: this.$store.state.rates[rate], stash: 'resources' })
          if (this.$store.state.resources[rate] >= this.$store.state.storage[rate]) {
            console.log(`storage maximum: ${rate}`)
            this.$store.commit('setValue', { stash: 'resources', property: rate, value: this.$store.state.storage[rate] })
          }
        }
      }
    }
  },
  created () {
    setInterval(this.heartbeat, this.$store.state.heartrate)
  },
  head: {
    title: function () {
      return {
        inner: this.$store.state.head.inner,
        separator: ' '
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Base styles
main {
  margin: 0.8rem 0.8rem 4rem 0.8rem;
}

.box:not(:last-child),.tile.is-ancestor {
  margin-bottom: 0!important;
}

.row {
  min-height: 22rem;

  &.is-parent {
    &.top {
      padding-bottom: 0;
    }
  }
}

// fix panel gap on tablet
@include mobile {
  .row {
    min-height: initial;
  }
}
</style>
