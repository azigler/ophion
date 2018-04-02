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
      for (let rate in this.$store.state.rates) {
        if (this.$store.state.rates[rate] > 0) {
          this.$store.commit('increment', { property: rate, value: this.$store.state.rates[rate], stash: 'resources' })
        }
      }
    }
  },
  created () {
    setInterval(this.heartbeat, this.$store.state.heartbeat)
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
  min-height: 44vh;

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
